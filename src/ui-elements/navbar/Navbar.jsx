import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'

import './Navbar.css'
import ShoppingCart from '../shoppingCart/ShoppingCart'

const Navbar = ({title}) => {
  return (
    <nav className='site-nav'>
      <div className='logo'>
      <h1><Link to='/'>{title}</Link></h1>
      </div>
      <ul className='nav-links'>
        <li className='nav-link'>
          <Link to='/cart'>
            <ShoppingCart />
          </Link>
        </li>
        <li className='nav-link'>
          <Link to='/account'>Account</Link>
        </li>
        <li className='nav-link'>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

export default Navbar
