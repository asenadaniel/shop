import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Fruit from '../../components/Fruit/Fruit'
import RootAndTubers from '../../components/RootAndTubers/RootAndTubers'
import Vegetables from '../../components/Vegetables/Vegetables'
import HeroAbout from '../../components/HeroAbout/HeroAbout'
import Footer from '../../components/Footer/Footer'


function Home() {
  return (
    <div className=" font-bodyFont">
      <Navbar />
      <Hero />
      <Fruit />
      <RootAndTubers />
      <Vegetables />
      <HeroAbout />
      <Footer />
    </div>
  )
}

export default Home
