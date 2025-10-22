import React from 'react';
import "./Adesign.css";
import { NavLink } from 'react-router-dom';
import Button from './Button';
import Facebook from '../assets/images/Facebook.svg';
import Twitter from '../assets/images/Twitter.svg';
import Brev from '../assets/images/Brev.svg';
import Telefon from '../assets/images/Telefon.svg';
import Instagram from '../assets/images/Instagram.svg';
import Youtube from '../assets/images/Youtube.svg';
import Logostoragecompany from '../assets/images/Logostoragecompany.svg';

export default function Header() {
  return (
    <header>
      
      <div className="header-color">
      <div className="left-icons">
      <img src={Telefon} alt="Logotyp" className="logo" />
      <span>+46 8 123 122 44</span>

      <div className="contact-info">
      <img src={Brev} alt="Logotyp" className="logo" />
      <span>contact@domain.com</span>
      </div>
      </div>

      <div className="right-icons">
      <a href="https://www.facebook.com" target="_blank"><img src={Facebook} alt="Facebook" className="logo" />
      </a>
      <a href="https://www.twitter.com" target="_blank"><img src={Twitter} alt="Twitter" className="logo" />
      </a>
      <a href="https://www.instagram.com" target="_blank"><img src={Instagram} alt="Instagram" className="logo" />
      </a>
      <a href="https://www.youtube.com" target="_blank"><img src={Youtube} alt="Youtube" className="logo" />
      </a>
      </div>
      </div>

      <div className="middle-section">
      <div className="bottom-icon">
      <img src={Logostoragecompany} alt="Logotyp" className="logo" />
      </div>

    <nav className="navbar">
    <div className="nav-links">
    <NavLink className="nav-link" to="/Home">Home</NavLink>
    <NavLink className="nav-link" to="/AboutUs">About Us</NavLink>
    <NavLink className="nav-link" to="/Services">Services</NavLink>
    <NavLink className="nav-link" to="/ContactUs">Contact Us</NavLink>
    </div>
    </nav>

    <Button />
        
    </div>

    </header>
  )
}
