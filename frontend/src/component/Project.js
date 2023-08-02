import React,{useState} from 'react';
import img1 from '../img/CATD.png';
const Project = ({detail}) => {
const [fullText,SetFullText]=useState(false);

 
  return (
    <div className='Project'>
      <div className='ProjectImg'>
        {' '}
        <img src={img1} alt='gfgd'/>{' '}
      </div>
      <div className='ProjectDetail'>
        <div className='Projecttitle'>
          {/* Cat Dog Identifier */}
          {detail.name}
          </div>
        <div className='Projectdesc'>


          {
          !fullText ? (detail.detail.substr(0, 200) ):(detail.detail)}
 {!fullText ?(<button className='readme' onClick={() => SetFullText(true)}>Read more</button>):
  (<button className='readme' onClick={() => SetFullText(false)}>Read less</button>)
 
          }
          
        </div>
        <div className='Projectbtn'>
          <a className='btn' href={detail.github} target='blank'> Github Link</a>
          <a className='btn'href={detail.website}target='blank'> Go Live</a>
        </div>
      </div>
    </div>
  );
};

export default Project;
