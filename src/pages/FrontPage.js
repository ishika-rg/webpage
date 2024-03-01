import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Section1 from '../components/Section1'
import DealSection from '../components/DealSection'
import CardSection from '../components/CardSection'

const FrontPage = () => {
  return (
    <div>
        <Navbar />
        <Section1 />
        <CardSection />
        <DealSection />
        <Footer />

    </div>
  )
}

export default FrontPage