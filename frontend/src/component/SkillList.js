import React from 'react';

const SkillList = ({ list, title }) => {
  return (
    <div
      className='Skill'
      data-aos='flip-left'
      data-aos-offset='100'
      data-aos-easing='linear'
      data-aos-duration='1000'
      data-aos-once='true'
      data-aos-delay='300'
    >
      <div className='SkillList'>
        <div
          className='skillTitle'
          data-aos='zoom-in-up'
          data-aos-offset='90'
          data-aos-easing='linear'
          data-aos-duration='1000'
          data-aos-once='true'
          data-aos-delay='800'
        >
          {title}
        </div>
        <div className='list'>
          {list.map((ele, i) => (
            <div
              key={i}
              className='skill_type'
              data-aos='zoom-in-up'
              data-aos-offset='90'
              data-aos-easing='linear'
              data-aos-duration='1000'
              data-aos-once='true'
              data-aos-delay='800'
            >
              {ele}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillList;
