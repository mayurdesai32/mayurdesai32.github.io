import React, { useState } from 'react';
import img1 from '../img/CATD.png';
const Project = ({ detail }) => {
  const [fullText, SetFullText] = useState(false);

  return (
    <div
      className='Project'
      data-aos='fade-up'
      data-aos-offset='100'
      data-aos-easing='linear'
      data-aos-duration='800'
      data-aos-once='true'
    >
      <div className='ProjectImg'>
        <img
          src={img1}
          alt='detail.name'
          data-aos='fade-right'
          data-aos-offset='150'
          data-aos-easing='linear'
          data-aos-delay='300'
          data-aos-duration='800'
          data-aos-once='true'
        />
      </div>
      <div className='ProjectDetail'>
        <div
          className='Projecttitle'
          data-aos='fade-left'
          data-aos-offset='150'
          data-aos-delay='300'
          data-aos-easing='linear'
          data-aos-duration='800'
          data-aos-once='true'
        >
          {/* Cat Dog Identifier */}
          {detail.name}
        </div>
        <div
          className='Projectdesc'
          data-aos='fade-left'
          data-aos-offset='150'
          data-aos-easing='linear'
          data-aos-delay='350'
          data-aos-duration='800'
          data-aos-once='true'
        >
          {!fullText ? detail.detail.substr(0, 200) : detail.detail}
          {!fullText ? (
            <button className='readme' onClick={() => SetFullText(true)}>
              Read more
            </button>
          ) : (
            <button className='readme' onClick={() => SetFullText(false)}>
              Read less
            </button>
          )}
        </div>
        <div className='Projectbtn'>
          <a
            className='btn'
            href={detail.github}
            target='blank'
            data-aos='fade-left'
            data-aos-offset='150'
            data-aos-easing='linear'
            data-aos-duration='800'
            data-aos-once='true'
          >
            Github Link
          </a>
          <a
            className='btn'
            href={detail.website}
            target='blank'
            data-aos='fade-left'
            data-aos-offset='150'
            data-aos-easing='linear'
            data-aos-duration='800'
            data-aos-once='true'
          >
            Go Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
