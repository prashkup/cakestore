import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '@reach/router'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import './Navbar.css'

const Navbar = ({ title }) => {
  const productsInCart = useSelector((state) => {
    const cartItemQuantities = Object.values(state.cart.items)

    if (cartItemQuantities.length) {
      return cartItemQuantities.reduce((a, b) => a + b)
    } else {
      return 0
    }
  })

  return (
    <nav className="site-nav">
      <div className="logo">
        <h1>
          <Link to="/">{title}</Link>
        </h1>
      </div>
      <ul className="nav-links">
        <li className="nav-link">
          <Link to="/cart">
            <div className="shopping-cart">
              <FontAwesomeIcon style={{ marginRight: '10px' }} icon={faCartPlus} />
              <p>{productsInCart}</p>
            </div>
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/account">Account</Link>
        </li>
        <li className="nav-link">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar
