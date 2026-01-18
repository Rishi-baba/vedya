import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import Ourpolicys from '../components/Ourpolicys'
import Newsletterbox from '../components/Newsletterbox'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestCollection></LatestCollection>
      <Bestseller></Bestseller>
      <Ourpolicys></Ourpolicys>
      <Newsletterbox></Newsletterbox>
      <Footer></Footer>
    </div>
  )
}

export default Home