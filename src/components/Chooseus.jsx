import React from 'react'
import Icon1 from '../assets/images/Icon1.svg';
import Icon2 from '../assets/images/Icon2.svg';
import Icon3 from '../assets/images/Icon3.svg';
import Icon4 from '../assets/images/Icon4.svg';
import ChooseusColumn from './ChooseusColumn';
import graybox2 from '../assets/images/graybox2.svg';
import Titlelayout from './Titlelayout';

function Chooseus() {
  return (
    <div>
        <div className="chooseus-background-color">
            <div className="container">

<Titlelayout
title="Why Choose Us"
middletitle="Choose Us for Exceptional Storage Solutions"
ingress="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida."
/>

<div className="chooseus-container">
                <div className="chooseus-icon-container">
                <ChooseusColumn 
                icon={Icon1}
                title="Security and Safety"
                ingress="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                />

                <ChooseusColumn 
                icon={Icon2}
                title="Flexible and Affordable"
                ingress="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                />

                <ChooseusColumn 
                icon={Icon3}
                title="Clean and Well-Maintained Facilities"
                ingress="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                />

                <ChooseusColumn 
                icon={Icon4}
                title="24/7 and Convenient Access"
                ingress="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                />
            </div>



                <div className="chooseus-wrapper">
                <img src={graybox2} alt="logo" className="graybox2" />

                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Chooseus