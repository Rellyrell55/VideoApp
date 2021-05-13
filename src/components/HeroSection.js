import React from 'react';
import '../App.css';
import './Cards.css'
import './HeroSection.css';
import ReactPlayer from 'react-player'

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className="card__container">
        <ReactPlayer className="cards__item" url="https://www.youtube.com/watch?v=H-U257IbuUU"/>
        <ReactPlayer className="cards__item" url="https://www.youtube.com/watch?v=pf_eJzBjfdE"/>
      </div>
    </div>
  );
}

export default HeroSection;
