import React from 'react'
import Banner from '../../components/common/Banner'
import HomeBrowseCategory from '../../components/section/HomePage/HomeBrowseCategory'
import LearnGrowSection from '../../components/common/LearnGrowSection'
import CTA from '../../components/common/CTA'
import Benefits from '../../components/section/HomePage/Benefits'
import Testimonial from '../../components/common/Testimonial'
import CountDown from '../../components/common/CountDown'

const Home = () => {
  return (
    <>
      <Banner/>
      <CountDown/>
      <HomeBrowseCategory/>
      <LearnGrowSection/>
      <CTA/>
      <Benefits/>
      <Testimonial/>
    </>
  )
}

export default Home
// const testimonialData = [
//   {
//     name: 'Priya Sharma',
//     college: 'Banasthali Vidyapith',
//     description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa est natus doloribus alias labore incidunt nemo! Non vel quibusdam unde, iste quas corporis a perspiciatis! Quos magni iste mollitia libero.',
//     image: img1
//   },
//   {
//     name: "Satyam Raj",
//     college: "NIT Mizoram",
//     description: "It was such a great session. The way of presenting every thought and views of the teacher was great. Thanks for such an amazing session.",
//     image: "testi1.jpeg"
//   },
//   {
//     name: "Damini Srivastava",
//     college: "Banasthali Vidyapith",
//     description: "The training was outstanding beyond remarks. We never expected to learn this much in just within 3 days. It was really an amazing session. Much motivated now to move on our python journey. Thank You Upflairs for developing within us the enthusiasm to learn more and more.",
//     image: "testi2.jpeg"
//   },
//   {
//     name: "Lalit Agarwal",
//     college: "Poornima college of Engineering",
//     description: "Overall it was a great experience, as having knowledge on recent technologies used in industry will make us industry ready for the future. I am very grateful to Upflairs for guiding me so well with technologies. Thank you.",
//     image: "testi3.jpeg"
//   },
//   {
//     name: "Harshita Samant",
//     college: "Banasthali Vidyapith",
//     description: "Thanks so much Upflairs for your valuable training. I really enjoyed it and appreciate that you made it fun. It strengthened my technical skills and proved to be a great learning experience. Your helpful attitude makes it clear that you can continue to take on challenges and grow my knowledge in that field.",
//     image: "testi4.jpeg"
//   },
//   {
//     name: "Vaani Gupta",
//     college: "Banasthali Vidyapith",
//     description: "Well for the session I attended, it was just amazing. I learned a lot and I'm hopefully expecting more to explore in the same domain. I would like to thank the entire team of Upflairs for being just simply outstanding and supportive. Looking forward to more opportunities. A big THANK YOU to all. It was really one of the finest workshops I ever attended.",
//     image: "testi5.jpeg"
//   },
//   {
//     name: "Vrinda Saraswat",
//     college: "Banasthali Vidyapith",
//     description: "I really enjoyed this workshop. On the very first day of the workshop I had no idea this session was going to be mind blowing. I have learnt so many new things and  in this workshop I built my very first robot. I have a lot to say, but I have to condense it here. THIS WAS THE BEST WORKSHOP I'VE EVER BEEN TO.",
//     image: "testi6.jpeg"
//   },
// ];