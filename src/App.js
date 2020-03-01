import React from 'react';
import logo from './images/read_child_bg.orig.jpg';
// import Test1 from './Test1.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>
          QuranConnect 
        </h4>
        <p> Serving your passion for the Quran</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </header>
      {/* <Test1/> */}
    </div>
  );
}

export default App;
