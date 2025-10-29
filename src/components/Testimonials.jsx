
import React, {useState, useEffect} from 'react'


const Testimonials = () => {
    const [serviceItems, setServiceItems] = useState([])


    const fetchData = async () => {
        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
        const data = await res.json()
        setServiceItems(data)
    }
    useEffect(() => {
    fetchData()
    }, [])

  return (

    <section id="testimonials" className="testimonials">
        
      <div className="container">
        <div className="testimonials-wrapper">
                       {serviceItems.map(item => (
                       <div key={item.id} className="box-wrapper">
            


            <div className="testimonial-box">
              <div className="testimonials-wrap">
               
                <div className="testimonials-stars">{item.rating}</div>
              </div>

              <div className="testimonials-comment">{item.comment}</div>

              <div className="testimonials-customer">
                <img
                  className="testimonials-icon"
                  src={item.avatarUrl}
                />
                <div className="text-sections">
                  <h5 className="testimonials-title">{item.name}</h5>
                  <p className="customeringress">{item.companyName}</p>
                </div>
              </div>
            </div>
          </div>
           ))}
        </div>
      </div>

    </section>
  )
}

export default Testimonials