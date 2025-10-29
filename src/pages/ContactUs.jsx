import React from 'react'
import HeroSmall from '../components/HeroSmall';
import Footer from '../components/Footer';
import Socialmediapage from '../components/Socialmediapage';
import Subscribe from '../components/Subscribe';
import Accordion from '../components/Accordion';
import Form from '../components/Form';

const ContactUs = () => {
  return (
    <div>
      

      <Form />
      <HeroSmall 
      headline ="Contact Us"
      ingress ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      <Socialmediapage />
    
      <Accordion />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default ContactUs