import React from 'react'
import Icon1 from '../assets/images/Icon1.svg';
import ChooseusColumn from './ChooseusColumn';

function Chooseus({ icon, title, ingress }) {
  return (
    <div>
        <div className="booking-background-color">
            <div className="container">
            
                <div>Why Choose Us</div>
                <div>Choose Us for Exceptional Storage Solutions</div>

                <ChooseusColumn 
                icon={Icon1}
                title="Security and Safety"
                ingress="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                />
            
            </div>
        </div>
    </div>
  )
}

export default Chooseus