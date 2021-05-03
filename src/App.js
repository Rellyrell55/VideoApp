import React from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import ReactPlayer from 'react-player'
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <h1>
          Videos
        </h1>
        <ReactPlayer url="https://www.youtube.com/watch?v=p_GNkc7Jm3Q"/>
        <ReactPlayer url="https://www.youtube.com/watch?v=pf_eJzBjfdE"/>
      </div>
    </Router>
  );
}

export default App;
