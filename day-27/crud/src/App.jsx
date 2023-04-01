import { useEffect, useState } from 'react'
import './App.css'
import Axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [nameCreate, setNameCreate] = useState("")
  const [ageCreate, setAgeCreate] = useState("")

  const handleNameChange = (e) => {
    // console.log(e)
    setNameCreate(e.target.value)
  }

  const handleAgeChange = (e) => {
    // console.log(e)
    setAgeCreate(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log(nameCreate, ageCreate)
    // Axios
    Axios({
      method: 'post',
      url: 'http://localhost:7777/employee',
      data: {
        name: nameCreate,
        age: ageCreate
      }
    })
      .then(function (response) {
        Axios({
          method: 'get',
          url: 'http://localhost:7777/employee',
          // data: {
          //   name: 'x',
          //   age: '1'
          // }
        })
          .then(function (response) {
            console.log(response.data.data)
            setData(response.data.data)
          });
      });
  }

  /*
    EXERCISE:
    Coba implement tombol delete, panggil API endpoint untuk delete employee
    10 menit
  */

  const handleEdit = (id, name, age) => {
    console.log(id)
    Axios({
      method: 'put',
      url: `http://localhost:7777/employee/${id}`,
      data: {
        name: name,
        age: (parseInt(age) + 1).toString()
        // age: parseInt(age) + 1 + ""
      }
    })
      .then(function (response) {
        console.log(response.data.data)
        Axios({
          method: 'get',
          url: 'http://localhost:7777/employee',
          // data: {
          //   name: 'x',
          //   age: '1'
          // }
        })
          .then(function (response) {
            console.log(response.data.data)
            setData(response.data.data)
          });
      });
  }

  useEffect(() => {
    Axios({
      method: 'get',
      url: 'http://localhost:7777/employee',
      // data: {
      //   name: 'x',
      //   age: '1'
      // }
    })
      .then(function (response) {
        console.log(response.data.data)
        setData(response.data.data)
      });
  }, [])

  return (
    <div className="App">
      <label for="name">Name:</label>
      <input value={nameCreate} onChange={handleNameChange} type="text" id="name" name="name" />
      <br />
      <label for="age">Age:</label>
      <input value={ageCreate} onChange={handleAgeChange} type="text" id="age" name="age" />
      <br />
      <input onClick={handleSubmit} type="submit" value="Submit" />
      <br />
      <table>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
          <th></th>
        </tr>
        {data.map(item => {
          return <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td><button onClick={() => handleEdit(item.id, item.name, item.age)}>Edit</button><button onClick={() => console.log("delete", item.id)}>Delete</button></td>
          </tr>
        })}

      </table>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
