import React from 'react'
import './Navbar.css'
import title from '../../assets/title'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>{title.firstName} <span>{title.lastName}</span> </h1>
        <ul>
            <li>Home</li>
            <li>Search Jobs</li>
            <li>Become HR</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>

        <div className="nav-btn">
            <button>Login</button>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar
