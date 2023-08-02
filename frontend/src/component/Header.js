import React, { useState } from 'react';

const Header = () => {
  const [openMenu,setOpenMenu]=useState(false)
  return (
    <div className='navbar'>
      <div id='Header' className='container '>
        <div className='Nav_logo'>Mayur Desai</div>
        <ul className='Navlist'>
          <li>
            <a href='#app'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#skill'>Skills</a>
          </li>
          <li>
            <a href='#ProjectSection'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>

        {/* <i className='Nav_min fa-sharp fa-solid fa-bars'></i> */}

<div className='Nav_min' onClick={()=>setOpenMenu(!openMenu)}>
 
  <div className={`${openMenu ? 'animateBar1' : ''} bar1`}></div>
          <div className={`${openMenu ? 'animateBar2' : ''} bar2`}></div>
          <div className={`${openMenu ? 'animateBar3' : ''} bar3`}></div>
</div>

<div className={`${openMenu ? 'navDrawerOpen' : ''} navDrawer`}>
  <ul className='drawerNavlist'>
          <li>
            <a href='#app'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#skill'>Skills</a>
          </li>
          <li>
            <a href='#ProjectSection'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>


</div>

      </div>
    </div>
  );
};

export default Header;
