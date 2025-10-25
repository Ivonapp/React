import React from 'react'
import Buttonlight from './Buttonlight';

function Greentext({ greentitle, greeningresse }) {
  return (
    <div>            
        <div className="green-color-container">
            <div className="container">
                <div className="green-container">
                    <h3 className="greentitle">{greentitle}</h3>
                    <div className="greeningresse">{greeningresse}</div>
                    <div className="greenbutton">
                    <Buttonlight 
                    text="Book Now"
                    />
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Greentext