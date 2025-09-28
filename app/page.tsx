import Hero from '@/components/section/Hero'
import Navbar from '@/components/section/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div className=' min-h-screen w-full bg-[#FFFFFF]'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default Home