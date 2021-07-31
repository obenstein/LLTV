import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import ScrollToTop from '../components/ScrollToTop';
import Videobox from '../components/InfoSection/Videobox';
import Reach from '../components/InfoSection/Reach';
import ChartInfo from '../components/InfoSection/ChartInfo';
import ChartTwo from '../components/InfoSection/chartTwo';
import {
  inpersonObjOne,
  inpersonObjTwo,
  inpersonObjFour,
  inpersonObjThree,
} from '../components/InfoSection/Data';

function InPerson() {
  const [isOpen, setIsOpen] = useState(false);
  const inpersonDetails = [{
  },
  {
    chartTitle: "Your complete, modern event platform",
    chartDesc: "The moment your attendees join you can provide a seamless, personalized experience to guide them quickly and easily through your event. And best of all, building an event is quick and easy.",
    img1: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/In-person%20events/Event%20home%20page.png?width=865&height=566&name=Event%20home%20page.png",
    img2: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/Event%20app.png?width=865&height=584&name=Event%20app.png",
    img3: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/Sponsor%20ROI.png?width=865&height=566&name=Sponsor%20ROI.png",
    bt1: "EVENT HOME PAGE",
    bt2: "INTUITIVE EVENT BUILDER",
    bt3: "EVENT APP FOR IOS, ANDROID AND WEB"
  },]
  const inpersonDetailsTWO = [{
  },
  {
    chartTitle: "Improve your ticket retention by 18%",
    chartDesc: "Helping attendees have meaningful conversations is at the core of what we do. Connecting your audience 1:1 with Brella is proven to boost audience satisfaction and improve ticket retention year over year.",
    img1: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/In-person%20events/AI-powered%20matchmaking.png?width=865&height=584&name=AI-powered%20matchmaking.png",
    img2: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/In-person%20events/Meeting%20locations.png?width=865&height=566&name=Meeting%20locations.png",
    img3: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/In-person%20events/Easy%20meeting%20booking.png?width=865&height=566&name=Easy%20meeting%20booking.png",

    bt1: "AI POWERED MATCHMAKING",
    bt2: "MEETING LOCATIONS",
    bt3: "EASY MEETING BOOKINGS"
  },]
  const inpersonDetailsTHREE = [{
  },
  {
    chartTitle: "Skip the leads - give your sponsors meetings instead",
    chartDesc: "Following up with lead lists post-event is a thing of the past with Brella. Your sponsors can proactively reach out to qualified leads and schedule 1:1 meetings, generating positive ROI before your event begins.",
    img1: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/In-person%20events/Participant%20list%20filters.png?width=865&height=566&name=Participant%20list%20filters.png",
    img2: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/In-person%20events/Sponsor%20ads.png?width=865&height=566&name=Sponsor%20ads.png",
    img3: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/In-person%20events/Measurable%20sponsor%20ROI.png?width=865&height=584&name=Measurable%20sponsor%20ROI.png",

    bt1: "PARTICIPANT LIST FILTERS",
    bt2: "SPONSOR ADS",
    bt3: "MEASURABLE SPONSOR ROI"
  },]
  const forReach = [{

  },
  {

  },
  {

  }, {
    title: "Our latest event planning resources",
    desc: "“Virtual sponsorships aren’t marketable” is a myth. Put it to rest with a platform that connects interested and relevant buyers with your sponsors.",
    img1: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/Native%20sponsor%20promotion-1.png?width=306&height=200&name=Native%20sponsor%20promotion-1.png",
    img1tit: "Native sponsor promotion",
    img1desc: "Create a digital booth & promote sponsors directly in your event marketplace",
    img2: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/Effective%20lead%20generation-1.png?width=306&height=200&name=Effective%20lead%20generation-1.png",
    img2tit: "Effective lead generation",
    img2desc: "Provide a list of interested parties quickly by segmenting your audience according to networking & matchmaking data",
    img3: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/Personal%20meeting%20rooms-1.png?width=306&height=200&name=Personal%20meeting%20rooms-1.png",
    img3tit: "Expedite the sales process",
    img3desc: "Instead of waiting, sponsors can proactively approach leads and connect at your event 1:1",
    bt1: "All Sponsor Features"
  }
  ]


  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...inpersonObjOne} />
      <ChartInfo hybridDetails={inpersonDetails} />
      <ChartInfo hybridDetails={inpersonDetailsTWO} />
      <ChartInfo hybridDetails={inpersonDetailsTHREE} />
      <ChartTwo hybridDetails={inpersonDetails} />
      <Reach hybridDetails={forReach} />
      <InfoSection {...inpersonObjTwo} />
      <InfoSection {...inpersonObjThree} />
      <InfoSection {...inpersonObjFour} />
      <Footer />
    </>
  );
}

export default InPerson;
