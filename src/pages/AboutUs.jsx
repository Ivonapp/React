import React from 'react'
import HeroSmall from '../components/HeroSmall';
import Footer from '../components/Footer';
import Box1 from '../components/Box1'
import Logoipsum from '../components/Logoipsum'

const AboutUs = () => {
  return (
    <div>
      <HeroSmall 
      headline ="About Us"
      ingress ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." />
    <Box1 />
    <Logoipsum />







    <Footer />
    </div>
  )
}

export default AboutUs