import { useEffect, useState } from 'react'
import './App.css'
import Axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])

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
      <ul>
        {data.map(item => {
          return <li key={item.id}>[{item.id} | {item.name} | {item.age}]</li>
        })}
      </ul>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
