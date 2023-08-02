import React from 'react';

import heroimg from '../img/hero.png';

const HeroSection = () => {
  return (
    <div id='HeroSection' className='container'>
      <div className='HeroSection1'>
        <div className='hero'>
          <h3 className='hero_title'>Hi, I am Mayur Desai</h3>

          <h1 className='hero_develop'>Full Stack Developer</h1>

          <h2 className='hero_text'>
            I am a fullstack developer who loves to code and is always
            passionate to learn new technologies
          </h2>

          <div className='hero_btn'>
            <a>Contact Me </a> <a>Download CV</a>
          </div>
        </div>

        <div className='hero_img'>
          <img src={heroimg} />
        </div>
      </div>
      <div className='hero_up'>
        <a href='https://www.linkedin.com/in/mayurdesai88'>
          <i className='fa-brands fa-linkedin-in circular-icon'></i>
        </a>

        <a href='mailto:msdesai32@gmail.com'>
          <i className='fa-sharp fa-regular fa-envelope circular-icon'></i>
        </a>

        <a href='https://www.github.com/mayurdesai32'>
          {' '}
          <i className='fa-brands fa-github circular-icon'></i>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
