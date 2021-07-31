import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import ScrollToTop from '../components/ScrollToTop';
import {
  analyticsObjOne,
  analyticsObjTwo,
  analyticsObjThree
} from '../components/InfoSection/Data';

function Analytics() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...analyticsObjOne} />
      <InfoSection {...analyticsObjTwo} />
      <InfoSection {...analyticsObjThree} />
      <Footer />
    </>
  );
}

export default Analytics;
