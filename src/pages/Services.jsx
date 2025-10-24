import React from 'react'
import HeroSmall from '../components/HeroSmall';
import Footer from '../components/Footer';
import Servicescolumns from '../components/Servicescolumns';


const Services = () => {
  return (
    <div>
      <HeroSmall 
      headline ="Services"
      ingress ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      <Servicescolumns />


    <Footer />
    </div>
  )
}

export default Services