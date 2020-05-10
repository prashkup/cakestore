import React from 'react'
import PropTypes from 'prop-types'

import './Navbar.css'

const Navbar = ({title}) => {
  return (
    <nav className='site-nav'>
      <div className='logo'>
        <h1><a href='/'>{title}</a></h1>
      </div>
      <ul className='nav-links'>
        <li className='nav-link'>Cart</li>
        <li className='nav-link'>Sign In</li>
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

export default Navbar
