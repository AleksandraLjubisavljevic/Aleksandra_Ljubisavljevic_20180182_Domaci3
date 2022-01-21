
import React from 'react'
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className="navBar">
      <div className='navbar-container'>
          <Link to='/'className='navbar-logo'>
           HYDE PARK
          </Link>
          <ul className='nav-menu active'>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                O nama
              </Link>
            </li>
          </ul>
        </div>
        </div>
    )
}

export default NavBar

