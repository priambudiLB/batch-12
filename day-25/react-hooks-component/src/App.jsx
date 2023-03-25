import { useEffect, useState } from 'react'
import './App.css'
import Logos from './components/Logos'
import States from './components/States'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// const fungsiBagas = (initialState) => {
//   const initialStateAfter1Year = initialState + 5
//   return { initialState, initialStateAfter1Year }
// }

const dataLogo = [
  {
    href: "https://vitejs.dev",
    src: viteLogo,
    className: "logo",
    alt: "Vite logo"
  },
  {
    href: "https://reactjs.org",
    src: reactLogo,
    className: "logo react",
    alt: "React logo"
  }
]

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

  // visualisasi Child -> Parent communication
  const setCountWrapper = (arg) => {
    console.log('setCount is called!', arg)
    setCount(arg)
  }

  // dipanggil setiap kali component ini nge-render
  console.log('halo bukan dari useEffect')
  return (
    <div className="App">
      <Logos data={dataLogo} />
      <States
        change={change}
        count={count}
        setCount={setCountWrapper}
        dayBagasMentoring={dayBagasMentoring}
        setDayBagasMentoring={setDayBagasMentoring}
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
