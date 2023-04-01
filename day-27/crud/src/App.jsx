import { useEffect, useState } from 'react'
import './App.css'
import Axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

  /*
    EXERCISE:
    Buat table untuk menampilkan data dari backend, ada ID, NAME, AGE.
    Tambah juga kolom buat button EDIT dan DELETE

    10 menit
  */
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
            <td><button onClick={() => console.log("edit", item.id)}>Edit</button><button onClick={() => console.log("delete", item.id)}>Delete</button></td>
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
