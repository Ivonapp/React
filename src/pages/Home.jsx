import React from 'react'
import HeroLarge from '../components/HeroLarge';
import Footer from '../components/Footer';
import Box1 from '../components/Box1'
import Logoipsum from '../components/Logoipsum'
import Servicescolumns from '../components/Servicescolumns';
import Chooseus from '../components/Chooseus';



const Home = () => {
  return (
       <div>
      <HeroLarge />
      <Box1 />
      <Logoipsum />
      <Servicescolumns />
      <Chooseus />

      <Footer />
    </div>
  )
}

export default Home