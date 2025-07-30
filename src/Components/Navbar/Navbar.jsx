import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav>
            <div className="logo">
                <img src="" alt="" />
                <div className="logo-text">SLASHD</div>
            </div>

            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">Pricing</a></li>
            </ul>
            <div className="auth-buttons">
                <a href="" className="sign-in">Singn In</a>
                <a href="" className="get-started">Get Started</a>
            </div>
            

    </nav>
  )
}


