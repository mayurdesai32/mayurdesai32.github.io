import React from 'react';

const SkillList = ({ list, title }) => {
  return (
    <div className='Skill'>
      <div className='SkillList'>
        <div className='skillTitle'>{title}</div>
        <div className='list'>
          {list.map((ele, i) => (
           
              <div key={i} className='skill_type'>
                {ele}
              </div>
           
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillList;
