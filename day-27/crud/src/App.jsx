import { useEffect, useState } from 'react'
import './App.css'
import Axios from 'axios'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Count from './components/Count';

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      age: '',
      // title: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .required('Required'),
      age: Yup.string()
        .required('Required'),
    }),
    onSubmit: values => {
      const name = values.name
      const age = values.age
      console.log(values)
      Axios({
        method: 'post',
        url: 'http://localhost:7777/employee',
        data: {
          name: name,
          age: age
        }
      })
        .then(function (response) {
          handleGetAllData()
        });
    },
  });
  const [data, setData] = useState([])
  const [nameCreate, setNameCreate] = useState("")
  const [ageCreate, setAgeCreate] = useState("")
  const [titleCreate, setTitleCreate] = useState("")

  const handleNameChange = (e) => {
    // console.log(e)
    setNameCreate(e.target.value)
  }

  const handleAgeChange = (e) => {
    // console.log(e)
    setAgeCreate(e.target.value)
  }

  const handleTitleChange = (e) => {
    // console.log(e)
    setTitleCreate(e.target.value)
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
        handleGetAllData()
      });
  }

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
        handleGetAllData()
      });
  }

  const handleDelete = (id) => {
    console.log(id)
    Axios({
      method: 'post',
      url: `http://localhost:7777/employee/delete/${id}`
    })
      .then(function (response) {
        console.log(response.data.data)
        handleGetAllData()
      });
  }

  const handleGetAllData = () => {
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
  }

  useEffect(() => {
    handleGetAllData()
  }, [])

  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br />
        {formik.touched.name && formik.errors.name ? (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        ) : null}
        <label htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        <br />
        {formik.touched.age && formik.errors.age ? (
          <div>{formik.errors.age}</div>
        ) : null}
        {/* <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        /> */}
        <button type="submit">Submit</button>
      </form>
      <label for="name">Name:</label>
      <input value={nameCreate} onChange={handleNameChange} type="text" id="name" name="name" />
      <br />
      <label for="age">Age:</label>
      <input value={ageCreate} onChange={handleAgeChange} type="text" id="age" name="age" />
      <br />
      <label for="title">Title:</label>
      <input value={titleCreate} onChange={handleTitleChange} type="text" id="title" name="title" />
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
            <td><button onClick={() => handleEdit(item.id, item.name, item.age)}>Edit</button><button onClick={() => handleDelete(item.id)}>Delete</button></td>
          </tr>
        })}

      </table>
    </div>
  )
}

export default App
