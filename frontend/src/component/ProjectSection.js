import React from 'react';
import Title from './Title';
import Project from './Project';
import ProjectDetail from '../assert/ProjectDetail.json'
const ProjectSection = () => {
    // console.log(ProjectDetail)
  return (
    <div id='ProjectSection' className='container'>

      <Title content={'My Projects'} />

      <div className='Projectlist'>
       { ProjectDetail.map((ele,i)=> <Project detail={ele} key={i} />)}
       
        {/* <Project />
        <Project />
        <Project /> */}
      </div>
    </div>
  );
};

export default ProjectSection;
