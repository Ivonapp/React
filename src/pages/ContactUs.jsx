import React from 'react'
import HeroSmall from '../components/HeroSmall';
import Footer from '../components/Footer';
import Socialmediapage from '../components/Socialmediapage';

const ContactUs = () => {
  return (
    <div>
      
      <HeroSmall 
      headline ="Contact Us"
      ingress ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      <Socialmediapage />

<Footer />
    </div>
  )
}

export default ContactUs