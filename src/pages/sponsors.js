import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import ScrollToTop from '../components/ScrollToTop';
import {
  sponsorObjOne,
  sponsorObjTwo,
  sponsorObjThree
} from '../components/InfoSection/Data';

function Sponsors() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...sponsorObjOne} />
      <InfoSection {...sponsorObjTwo} />
      <InfoSection {...sponsorObjThree} />
      <Footer />
    </>
  );
}

export default Sponsors;
