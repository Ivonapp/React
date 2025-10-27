import React, {useState, useEffect} from 'react'
import Buttondark from './Buttondark'




const Subscribe = () => {






  return (

<div>
        
<div className="subscribe-container">
<div className ="icon-row">
    
    <div className ="subscribe-text-wrapper"> 
                <div className="subscribe-title">
                 Subscribe Our Newsletter
                </div>
                <div className="subscribe-ingress">
                 Subscribe to our newsletter to receive early discount offers, updates and info
                </div>
                </div>
                <div className="search-row">

                <div className="input-wrapper">
                <input
                type="text"
                className="input"
                placeholder="Enter your email"
                />
				<div id="email_error" className="error"> Please enter a valid email </div>
                </div>
                
                        <Buttondark
                        text="submit"
                        />
                </div>
            </div>
        </div>
    </div>
    
  )
}
export default Subscribe