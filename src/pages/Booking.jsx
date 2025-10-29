import React from 'react'
import Footer from '../components/Footer';
import Chooseus from '../components/Chooseus';
import Greentext from '../components/Greentext';
import Subscribe from '../components/Subscribe';


const Booking = () => {
  return (
    <div>Booking


      <Chooseus />
      <Greentext 
      greentitle ="Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us."
      greeningresse ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida."
      />


<Subscribe />
      <Footer />
    </div>
  )
}

export default Booking