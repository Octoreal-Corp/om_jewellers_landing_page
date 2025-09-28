import Hero from '@/components/section/Hero'
import Message from '@/components/section/Message'
import Navbar from '@/components/section/Navbar'
import Jewelry from '@/components/section/Jewelry'
import Contact from '@/components/section/Contact'
import React from 'react'
import Footer from '@/components/section/Footer'

const Home = () => {
  return (
    <div className=' min-h-screen w-full bg-[#FFFFFF]'>
      <Navbar/>
      <Hero/>
      <Message/>
      <Jewelry/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home