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
      <img src={Telefon} alt="Telefonnummer" className="logo" />
      <a href="tel:+46812312244" className="phone">+46 8 123 122 44</a>

      <div className="contact-info">
      <img src={Brev} alt="Email" className="logo" />
      <a href="mailto:contact@domain.com" className="email"> contact@domain.com</a>
      </div>
      </div>

      <div className="right-icons">
      <a href="https://www.facebook.com"> <img src={Facebook} alt="Facebook" className="icon" />
      </a>
      <a href="https://www.twitter.com"> <img src={Twitter} alt="Twitter" className="icon" />
      </a>
      <a href="https://www.instagram.com"> <img src={Instagram} alt="Instagram" className="icon" />
      </a>
      <a href="https://www.youtube.com"> <img src={Youtube} alt="Youtube" className="icon" />
      </a>
      </div>
      </div>

      <div className="middle-section">
      <div className="bottom-icon">
      <a href="/Home">
      <img src={Logostoragecompany} alt="Logotyp" className="logo" />
     </a>
      </div>

    <nav className="navbar">
    <div className="nav-links">
    <NavLink className="nav-link" to="/Home">Home</NavLink>
    <NavLink className="nav-link" to="/AboutUs">About Us</NavLink>
    <NavLink className="nav-link" to="/Services">Services</NavLink>
    <NavLink className="nav-link" to="/ContactUs">Contact Us</NavLink>
    </div>
    </nav>

    <Button name ="Book Now" />
        
    </div>

    </header>
  )
}
