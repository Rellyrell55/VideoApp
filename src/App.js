import React from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import ReactPlayer from 'react-player'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className= 'content'>
          <h1 className="header">
            Videos
          </h1>
          <ReactPlayer className="video" url="https://www.youtube.com/watch?v=H-U257IbuUU"/>
          <ReactPlayer className="video" url="https://www.youtube.com/watch?v=pf_eJzBjfdE"/>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
