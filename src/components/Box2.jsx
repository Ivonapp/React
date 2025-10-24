import React from 'react'
import "./Adesign.css";
import Phoneicon from '../assets/images/Phoneicon.svg';
import Button from './Button';

function Box2() {
  return (
    <div>
        
    <div className="positioning-wrapper">
      
    <div className="positionering2">
    <div className="positionering-text"> 
    <h4 className="yellow-title">About Us</h4>
    <h3 className="green-title">Providing a Safe Space for Your Treasured Items</h3>
    <div className="green-ingress">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</div>
    </div>
  
    <div className="vm-wrapper"> 
    <div className="vm-box">
    <h5 className="vm-title">Vision</h5>
    <div className="vm-ingress">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</div>
    </div>

    <div className="vm-box">
    <h5 className="vm-title">Mission</h5>
    <div className="vm-ingress">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</div>
    </div>
    </div>

    <div className="button-icon-wrapper"> 
    <Button name="Discover More" />
    

    <div className="phone-icon-text-wrapper">
    <div className="phoneicon-circle">
    <img src={Phoneicon} alt="Telefonnummer" className="phoneicon" />
    </div>
    <div className="phone-icon-wrapper"> 
    <h5 className="phone-icon-text">More Information</h5>
    <a href="tel:+46812312244" className="phone-icon-number">+46 8 123 122 44</a>
    </div>
    </div>
    </div>
    </div>


    </div>
  </div>
  )
}

export default Box2