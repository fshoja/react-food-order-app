import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
 <nav className="navbar">

      <h1>
        🍔 Food Order
      </h1>


      <ul>

        <li>
          <Link to="/">
            Home
          </Link>
        </li>


        <li>
          <Link to="/menu">
            Menu
          </Link>
        </li>


        <li>
          <Link to="/cart">
            Cart
          </Link>
        </li>


      </ul>

    </nav>
  )
}
