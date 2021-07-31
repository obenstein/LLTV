import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import ScrollToTop from '../components/ScrollToTop';
import {
   matchObjOne,
   matchObjTwo,
   matchObjThree
} from '../components/InfoSection/Data';

function Match() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...matchObjOne} />
      <InfoSection {...matchObjTwo} />
      <InfoSection {...matchObjThree} />
      <Footer />
    </>
  );
}

export default Match;
