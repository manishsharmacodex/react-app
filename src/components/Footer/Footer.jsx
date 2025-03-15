import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import title from '../../assets/title'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="left-col">
            <Link to="/"><h1>{title.firstName}<span>{title.lastName}</span> </h1></Link>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores rerum iste blanditiis quasi vero! Officiis.</p>
        </div>

        <div className="center-col">
            <h1>Menu</h1>
            <ul>
                <li>Home</li>
                <li>Apply HR</li>
                <li>Resume Template</li>
                <li>Course Online</li>
                <li>Privcy & Terms</li>
            </ul>
        </div>

        <div className="right-col">
            <h1>Get In Tocuh</h1>
            <ul>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Our Team</li>
                <li>CEO & Founder</li>
            </ul>
        </div>
        <p className='copy'>&copy; 2025 JobPortal All Rights Reserved</p>
    </div>
  )
}

export default Footer
