import React from 'react'
import Kalendericon from '../assets/images/Kalendericon.svg';


function Blogcolumn() {
  return (
    <div>
        
<div className="column-container">
    <div className="column-green-1">
    <div className="column-gray-border"></div>
    </div>
    <div className="column-green-2">




<div className="column-icon-datum"> 
<a href="" className="kalender-icon"><img src= {Kalendericon} alt="Icon kalender"/></a>
                             <span className="kalender-text">August 17, 2025</span></div>
                        <h6 className="column-title">Safe and Secure: The Importance of Choosing the Right Storage</h6>
                    <div className="column-ingress">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem…</div>
                <div className="column-yellow-ingress">Read more →</div>
            </div>
        </div>
    </div>
  )
}

export default Blogcolumn