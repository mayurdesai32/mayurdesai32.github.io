import React from 'react';
import Title from './Title';

const AboutSection = () => {
  return (
    <div id='about'>
      <Title content={'About Me'} />
      <div
        id='AboutSection'
        data-aos='zoom-in-down'
        data-aos-offset='90'
        data-aos-easing='linear'
        data-aos-duration='1000'
        data-aos-once='true'
        data-aos-delay='800'
      >
        <div>
          <div
            className='aboutTitle'
            data-aos='fade-down'
            data-aos-offset='150'
            data-aos-easing='linear'
            data-aos-duration='1200'
            data-aos-once='true'
            data-aos-delay='400'
          >
            Hello! My Name Is Mayur Desai
          </div>
          <p
            data-aos='fade-left'
            data-aos-offset='150'
            data-aos-easing='linear'
            data-aos-duration='1200'
            data-aos-once='true'
            data-aos-delay='400'
          >
            I am a Full Stack Developer. I am a student at KJ Somaiya College
            studying artificial intelligence (AI). I focus on web development as
            well as topics like deep learning, neural networks, and machine
            learning.
          </p>
          <p
            data-aos='fade-right'
            data-aos-offset='150'
            data-aos-easing='linear'
            data-aos-duration='1200'
            data-aos-once='true'
            data-aos-delay='400'
          >
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
