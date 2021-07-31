import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import carosel from '../components/InfoSection/carosel';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour
} from '../components/InfoSection/Data';
import Services from '../components/Services';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <carosel></carosel>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <Footer />
    </>
  );
}

export default Home;
