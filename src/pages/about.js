import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import ScrollToTop from '../components/ScrollToTop';
import {
  aboutObjOne,
  aboutObjTwo,
  aboutObjThree
} from '../components/InfoSection/Data';

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...aboutObjOne} />
      <InfoSection {...aboutObjTwo} />
      <InfoSection {...aboutObjThree} />
      <Footer />
    </>
  );
}

export default About;
