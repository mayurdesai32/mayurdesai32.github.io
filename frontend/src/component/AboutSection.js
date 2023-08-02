import React from 'react';
import Title from './Title';

const AboutSection = () => {
  return (
    <div id='about'>
      <Title content={'About Me'} />
      <div id='AboutSection'>
        <div>
 
          <div className='aboutTitle'>Hello! My Name Is Mayur Desai</div>
          <p>
            I am a Full Stack Developer. I am a student at KJ Somaiya College
            studying artificial intelligence (AI). I focus on web development as
            well as topics like deep learning, neural networks, and machine
            learning.
          </p>
          <p>
            I'm always willing to pick up new skills. I am also competent of
            teamwork, analytical thinking, leadership qualities, attention to
            detail, and other skills. I offer every project my absolute best
            effort.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
