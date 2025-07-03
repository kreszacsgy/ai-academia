import React from 'react'
import Hero from './Hero/Hero'
import AboutCard from '../About/AboutCard'
import HAbout from './HAbout'
import Testimonal from './Testimonal/Testimonal'
import Hblog from './Hblog'
import Hprice from './Hprice'

const Home = () => {
  return (
    <>
        <Hero/>
        <AboutCard/>
        <HAbout/>
        <Testimonal/>
        <Hblog />
        <Hprice />
    </>
  )
}

export default Home