import React from 'react'
import Buttonlight from './Buttonlight';

function Pricingplancolumn() {
  return (
    <div>
        <div className="container">



        <div className="pricing-border">


    <div className="pricing-ingress">Phasellus sollicitudin sapien eu massa accumsan, quis semper odio suscipit.</div>
        <hr />
            <div className="pricing-container"> 
                <div className="pricing-icons">
                    <i className="bi bi-check-circle-fill"></i>
                    <p className="pricing-ingress">Nam nec ipsum in dolor</p>
                </div>

                <div className="pricing-icons">
                    <i className="bi bi-check-circle-fill"></i>
                    <p className="pricing-ingress">Fusce nec ligula ut arcu</p>
                </div>

                <div className="pricing-icons">
                    <i className="bi bi-check-circle-fill"></i>
                    <p className="pricing-ingress">Aliquam pulvinar arcu in</p>
                </div>

                <div className="pricing-icons">
                    <i className="bi bi-check-circle-fill"></i>
                    <p className="pricing-ingress">Duis gravida enim porta</p>
                </div>

                <div className="pricing-icons">
                    <i className="bi bi-check-circle-fill"></i>
                    <p className="pricing-ingress">Etiam eget libero non ligula</p>
                

                    <div className="btn-wrapper"> 
                    <Buttonlight text="Rent Now" />
                </div>
            </div>
        </div>
    </div>
            
            





        </div>
    </div>
  )
}

export default Pricingplancolumn