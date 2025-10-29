import React from 'react'
import HeroSmall from '../components/HeroSmall';
import Footer from '../components/Footer';
import Socialmediapage from '../components/Socialmediapage';
import Subscribe from '../components/Subscribe';
import Accordion from '../components/Accordion';
import Formpage from '../components/Formpage';
import Titlelayout from '../components/Titlelayout';


const ContactUs = () => {
  return (
    <div>
      
      <Titlelayout
      title="Get in Touch"
      middletitle="Get Personalized Assistance – Contact Us"
      ingress="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo"
      />
      <Formpage />
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