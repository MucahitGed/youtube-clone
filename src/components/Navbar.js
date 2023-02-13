import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube } from '@fortawesome/fontawesome-free-brands'
import '../style/App.css';
import '../style/Video.css';
import '../style/Navbar.css';
import '../style/Responsive.css';
import Search from './Search';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="header-navbar">
          <FontAwesomeIcon icon={faYoutube} className='youIcon icon'/>
          <h1 className='youName'>ITube</h1> 
        </div>
        <div className="searchForm">
            <Search />
        </div>
    </div>
  )
}
export default Navbar
