import React from 'react'
import './Navbar.css'
import title from '../../assets/title'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/"><h1>{title.firstName}<span>{title.lastName}</span> </h1></Link>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <li>Search Jobs</li>
            <li>Become HR</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>

        <div className="nav-btn">
            <Link to="/login"><button className='login-btn'>Login</button></Link>
            <button className='app-btn'>Download App</button>
        </div>

        <div className="menu-box">
            <h1>Menu</h1>
        </div>
    </div>
  )
}

export default Navbar
