import React from 'react'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
//import ReactPlayer from 'react-player'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <HeroSection/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
