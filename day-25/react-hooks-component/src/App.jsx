import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// const fungsiBagas = (initialState) => {
//   const initialStateAfter1Year = initialState + 5
//   return { initialState, initialStateAfter1Year }
// }

function App() {
  // [camelCase, camelCaseHeheHaha]
  const [count, setCount] = useState(0)
  const [dayBagasMentoring, setDayBagasMentoring] = useState(['day-23', 'day-24', 'day-25'])
  const [change, setChange] = useState(0)
  // const { initialState: shoes, initialStateAfter1Year: shoesAfter1Year } = fungsiBagas(1)

  useEffect(() => {
    console.log('halo dari useEffect')
  }, [])

  useEffect(() => {
    console.log('state berubah!!!!!')
    setChange(prev => prev + 1)
  }, [count, dayBagasMentoring])

  // dipanggil setiap kali component ini nge-render
  console.log('halo bukan dari useEffect')
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React | total update state: {change}</h1>
      <div className="card">
        <p>{count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() => setCount((prev) => prev - 1)}>
          Decrement
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <ul>
          {dayBagasMentoring.map((value, index) => {
            return (
              // kalo pake fungsi .map, jangan lupa pasang attribute "key" di element terluar
              <li key={index}>{value}</li>
            )
          })}
        </ul>
        {/*
        ...prev maksudnya = spread operator untuk variable 'prev'
        spread operator = dari object/array,
                          return semua datanya di tempat spread operator digunakan
                          
                          prev = ['day-23', 'day-24', 'day-25']
                          [...prev, "day-xx"] => ['day-23', 'day-24', 'day-25', 'day-xx']
         */}
        <button onClick={() => setDayBagasMentoring((prev) => [...prev, "day-xx"])}>
          Add New Day
        </button>
        {/*
        Gimana caranya ngehapus elemen dari array di dalam state react hooks???? 
         */}
        <button onClick={() => setDayBagasMentoring((prev) => {
          // error Reference
          // Gabisa update variable dengan reference yang sama
          // harus buat variable baru dengan nilai yang sama persis, tetapi tidak mereferensi ke variable yang lama
          // contoh: 
          //  - const oldArray = prev       -------   oldArray ambil dari referensi 'prev', jadi masih mereferensi ke variable yang lama
          //  - const oldArray = [...prev]  -------   oldArray bikin nilai baru, tidak mengambil referensi sama persis dari variable yang lama
          // walaupun nilainya sama persis dengan 'prev', tetapi karena bikin array baru, maka dianggap dia tidak mengambil referensi yang sama

          // before: buggy
          // const oldArray = prev

          // after: aman
          const oldArray = [...prev]
          oldArray.pop()
          // oldArray.splice(prev.length - 1, 1);
          return oldArray
        })}>
          Remove Last Day
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
