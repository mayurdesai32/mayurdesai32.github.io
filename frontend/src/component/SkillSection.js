import React from 'react';
import Title from './Title';
import SkillList from './SkillList';
const skillSection = () => {
  return (
    <div id='skill'>
      <Title content={'My Skills'} />
      <div id='skillSection'>
        <SkillList
          list={[
            'HTML',
            'CSS',
            'JAVASCRIPT',
            'TYPESCRIPT',

            'REACT',
            'REACTNATIVE',
            // "NODE-js",
            // "EXPRESS-js",
            // "DJANGO",
            // "FASTAPI",
            // "MYSQL",
            // "MONGODB",
          ]}
          title={'FrontEnd'}
        />
        <SkillList
          list={['NODE', 'PYTHON', 'EXPRESS', 'FASTAPI', 'MongoDB', 'Oracle', 
        ]}
          title={'BACKEND'}
        />
        {/* <SkillList
          list={[
            // " NUMPY",
            // "Pandas",
            // "MATPLOTLIB",
            "MACHINE LEARNING",
            "DEEP LEARNING",
            "Natural Language Processing",
            "COMPUTER VISION",
            // "TensorFlow",
          ]}
          title={"AI/DATA SCIENCE"}
        /> */}
        <SkillList
          list={[
            'GIT',
            'chrome developer',
            'postman',
            'jmeter',
            // 'DOCKER',

            // 'KUBERNATE',
            // 'TERRAFORM',
            // 'AWS',
          ]}
          title={'Development Tool '}
        />
      </div>
    </div>
  );
};

export default skillSection;
