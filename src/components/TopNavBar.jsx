import React from 'react';
import logo from '../assets/foodLogo.jpg';
import './TopNavBar.css'

function TopNavBar() {
  return (
    <header className="header-container">
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" style={{height:"50px"}}/>
        </div>
        
        <ul className='nav-links'>
          <li><a href="">HOME</a></li>
          <li><a href="">ABOUT</a></li>
          <li><a href="">FOODS</a></li>
          <li><a href="">CONTACT</a></li>
        </ul>
      </div>
    </header>
  );
}

export default TopNavBar;
