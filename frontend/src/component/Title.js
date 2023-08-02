import React from 'react';
 
const Title = ({ content }) => {
  return (
    <div className='TitleSection'>
      <div>
        <div className='title'>{content}</div>
        <div className='titleUnderline'></div>
      </div>
    </div>
  );
};

export default Title;
