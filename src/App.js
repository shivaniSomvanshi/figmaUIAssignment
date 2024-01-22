import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import BlockOne from './components/BlockOne';
import BlockTwo from './components/BlockTwo';
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
      <Navbar/>
      <BlockOne/>
      <BlockTwo/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
