import React from 'react'
import Banner from '../../components/common/Banner'
import HomeBrowseCategory from '../../components/section/HomePage/HomeBrowseCategory'
import LearnGrowSection from '../../components/common/LearnGrowSection'
import CTA from '../../components/common/CTA'
import Benefits from '../../components/section/HomePage/Benefits'
import Testimonial from '../../components/common/Testimonial'

const Home = () => {
  return (
    <>
    
      <Banner/>
      <HomeBrowseCategory/>
      <LearnGrowSection/>
      <CTA/>
      <Benefits/>
      <Testimonial/>
    </>
  )
}

export default Home