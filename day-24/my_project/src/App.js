import logo from './logo.svg';
import './App.css';

function App() {
  console.log('hihi')
  const text = "Bagas"
  const num = 10
  const skills = ["html", "css", "js", "react", "html"]
  const data = [
    {
      name: "react",
      creator: "meta"
    },
    {
      name: "angular",
      creator: "google"
    }
  ]
  return (
    <div className="App">
      {console.log("HALOOOOO")}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text + " " + num}</p>
        <ul>
          {skills.map((value, index) => {
            console.log(value, index)
            return (
              // kalo pake fungsi .map, jangan lupa pasang attribute "key" di element terluar
              <li key={index}>{value}</li>
            )
          })}
        </ul>
        <ol>
          {data.map((value, index) => (
            // kalo pake fungsi .map, jangan lupa pasang attribute "key" di element terluar
            <li key={index}>{value.name + " is created by: " + value.creator}</li>
          ))}
        </ol>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
