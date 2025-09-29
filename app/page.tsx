import Contact from "@/components/section/Contact";
import Footer from "@/components/section/Footer";
import Hero from "@/components/section/Hero";
import Jewelry from "@/components/section/Jewelry";
import Message from "@/components/section/Message";
import Navbar from "@/components/section/navbar/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <Message />
      <Jewelry />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
