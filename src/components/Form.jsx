import React from 'react'
import Buttondark from './Buttondark'

function Form() {
  return (
    


            <div className="form-alignment"> 
            <div className="form-container">
                        <div className="form-name-email">
                            <div className="form-text-alignment">
                            <div className="form-text-name">Your Name</div>
                                            <input
                                            type="text"
                                            name="name"
                                            className="input"
                                            placeholder="Your Name*"
                                            />
                                        </div>

                            <div className="form-text-alignment">
                            <div className="form-text-email">Email</div>
                                            <input
                                            type="text"
                                            name="email"
                                            className="input"
                                            placeholder="Email*"
                                            />
                                        </div>
                                    </div>

                        <div className="form-unit">
                            <div className="form-text-unit">Choose Unit</div>
                                            <input
                                            type="text"
                                            name="unit"
                                            className="input"
                                            placeholder="Choose Unit*"
                                            />
                                    </div>
                        
                        <div className="form-storage">
                            <div className="form-text-storage">Storage Purpose</div>
                                            <textarea
                                            type="text"
                                            name="storage"
                                            className="input"
                                            placeholder="Describe your storage purpose so that we can match your request"
                                            ></textarea>
                                        </div>

<div className="form-button"> 
                        <Buttondark
                        text="Book Unit"
                        />
                </div>
            </div>
    </div>
  )
}

export default Form

