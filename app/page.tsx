import Contact from "@/components/section/Contact";
import Footer from "@/components/section/Footer";
import Hero from "@/components/section/Hero";
import Jewelry from "@/components/section/Jewelry";
import Message from "@/components/section/Message";
import Navbar from "@/components/section/navbar/Navbar";
import React from "react";

const Home = () => {
  return (
    <div className="mx-auto w-full">
      <header className="relative h-dvh w-full">
        <Navbar />
        <div className="h-[calc(100vh-72px)]">
          <Hero />
        </div>
      </header>
      <div className="mx-auto max-w-[1536px]">
        <main>
          <Message />
          <Jewelry />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
