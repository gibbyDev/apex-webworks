import HeroParallaxDemo  from "@/components/Hero";
import Cards from "@/components/Cards";
import React from 'react'
import { NavbarDemo } from "@/components/Navbar";
import { Timeline } from "@/components/ui/timeline";
import { TimelineDemo } from "@/components/Timeline";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Home = () => {
  return (
    <div>
        <NavbarDemo />
        <HeroParallaxDemo />
        {/* <Cards /> */}
        <TimelineDemo />
        <Cards />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default Home