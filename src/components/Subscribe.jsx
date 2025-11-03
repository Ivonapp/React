
import React, { useState } from 'react'
import Buttondark from './Buttondark'

const Subscribe = () => {
const [formData, setFormData] = useState ({ email: '', })
const [errors, setErrors] = useState({})
const [submitted, setSubmitted] = useState(false)

const handleChange = (e) => {    /*DENNA GÖR SÅ VI KAN SKRIVA PÅ HEMSIDNA*/
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
 /*ERROR HANTERING*/
        if (value.trim() === '') { /*Om kund lämnar tomma fält*/
            setErrors(prevErrors =>  ({...prevErrors, [name]: `Please fill in ${name}`}))
        } 
        else if (!value.includes('@')) {
            setErrors(prevErrors => ({...prevErrors, [name]: `Please fill in a valid ${name} that contains the letter @.`}))
        } 
        else {
             setErrors(prevErrors =>  ({...prevErrors, [name]: ''}))
        }

      }
    const handleOk = () => { /*NÄR KUNDEN TRYCKER PÅ OK-KNAPPEN SÅ FÖRSVINNER Kund-respons RUTAN*/
        setSubmitted(false)
    }
    const handleSubmit = async (e) => {  /*Så sidan inte laddar om*/
        e.preventDefault() 
        const newErrors = {}
        Object.keys(formData).forEach(field => {
                if (formData[field].trim() === '') {
                    newErrors[field] = `Please fill in ${field}`
                }
        })
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
        /*alert('form submitted successfully')*/
        /*FETCH HÄR*/
        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/subscribe', {
        method: 'post',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        })
            console.log('Status:', res.status) 
            console.log('Response OK:', res.ok)
        /*OM ALLT KUND SKICKAR IN OVAN ÄR KORREKT KOMMER NEDAN:*/
        if (res.ok) {
            setSubmitted(true)
            setFormData({  /*NOLLSTÄLLER FORMULÄRET*/
            email: '' })
        }
    }
    
    if (submitted) {
        return (
            <div className="subscribe-respons">
                <h2>Du prenumererar nu på vårt nyhetsbrev!</h2>
                <Buttondark text="OK" onClick={handleOk} />
            </div>
        )
    }
  return (

<form onSubmit={handleSubmit} noValidate> 
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                placeholder="Enter your email"
                />
                <span className="error-message">{errors.email && errors.email}</span>
                </div>
                        <Buttondark text="Submit" />
                </div>
            </div>
        </div>
  </form>
  )
}
export default Subscribe
