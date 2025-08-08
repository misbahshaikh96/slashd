import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="nav container">
        <div className="logo">
          <img src={'/logo.webp'} alt="" />
        </div>

        <ul>
          
          <li><a href="">About</a></li>
          <li><a href="">Product</a></li>
          <li><a href="">Pricing</a></li>
        </ul>

        <div className="auth-buttons">
          <button className="si">Sign In</button>
          <button className="gs">Get Started</button>
        </div>
      </nav>
  )
}


