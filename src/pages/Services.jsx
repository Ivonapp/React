import React from 'react'
import HeroSmall from '../components/HeroSmall';
import Footer from '../components/Footer';
import Servicescolumns from '../components/Servicescolumns';
import Greentext from '../components/Greentext';

const Services = () => {
  return (
    <div>
      <HeroSmall 
      headline ="Services"
      ingress ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
      <Servicescolumns />
      <Greentext 
      greentitle ="Looking for Secure and Flexible Storage? Find Your Perfect Fit With Us."
      greeningresse ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida."
      />

    <Footer />
    </div>
  )
}

export default Services