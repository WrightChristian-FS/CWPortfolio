import React from "react";
import './App.css';
import HNavbar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import Work from './components/work/work';
import Project from './components/project/project';
import Develop from "./components/develop/develop";
import Contact from "./components/contact/contact";



function App() {
  return (
    <div className="App">
      <HNavbar />
      <Intro />
      <Work />
      <Project />
      <Develop />
      <Contact />
      {/* <header className="App-header">

        <div>
          <Navbar />
        </div>


        <p>
          Edit hi <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
