import React from 'react'
import Buttonlight from './Buttonlight';

function Pagenotfound() {
  return (
    <div>
        <div className="page-not-found-background">
            <div className="container"> 
                <div className="page-not-found-wrapper"> 
                    <div className="page-not-found-ops">ops!</div>
                    <h2 className="page-not-found-title">Page Not Found</ h2>
                    <div className="page-not-found-ingress">Sorry, the page you are looking for does not exist. It may have been moved, removed altogether or is temporarily unavailable.</div>
                        <div className="page-not-found-button">
                        <Buttonlight 
                        text="Back To Home"
                        />
                    </div>
            </div>
      </div>  
</div>





    </div>
  )
}

export default Pagenotfound