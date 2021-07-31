import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import ScrollToTop from '../components/ScrollToTop';
import Carousel from '../components/InfoSection/carosel';
import Reviews from '../components/InfoSection/Reviews';
import Videobox from '../components/InfoSection/Videobox';
import Videoboxtwo from '../components/InfoSection/VideoBoxtwo';
import ChartInfo from '../components/InfoSection/ChartInfo';
import Reach from '../components/InfoSection/Reach';
import {
  virtualObjOne,
  virtualObjTwo,
  virtualObjThree,
  virtualObjFour,
  virtualObjFive
} from '../components/InfoSection/Data';

function Virtual() {
  const [isOpen, setIsOpen] = useState(false);


  const virtualDetails = [{
    title: "Start a discourse around core topics",
    desc: "It’s simple to both host and watch your event content. Your attendees can jump straight into the stream as soon as they join, or start networking 1:1 with others. And with multiple livestream hosting, live chat, breakout rooms and more, it’s simple to provide access to the content your audience demands.",
    v1: "https://f.hubspotusercontent00.net/hubfs/2090809/Animations/Multiple_Livestreams.mp4",
    v2: "https://f.hubspotusercontent00.net/hubfs/2090809/Animations/Stream_Chat_Q&A.mp4",
    v3: "https://f.hubspotusercontent00.net/hubfs/2090809/Animations/Breakout_room.mp4",
    bt1: "MULTIPLE LIVESTRAMS",
    bt2: "LIVE STREAMS, CHATS & Q&A's",
    bt3: "BREAKOUT ROOMS"

  },
  {
    chartTitle: "Understand both your live and virtual impact",
    chartDesc: "Gain a new understanding of your audience and event success by measuring impact across different formats. Determine engagement & activity levels across your live & virtual audience, calculate networking impact and much more.",
    img1: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/Livestream%20analytics%20%20(((TEST))))).png?width=865&height=566&name=Livestream%20analytics%20%20(((TEST))))).png",
    img2: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/Matchmaking%20interests.png?width=865&height=566&name=Matchmaking%20interests.png",
    img3: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/Sponsor%20ROI.png?width=865&height=566&name=Sponsor%20ROI.png",
    bt1: "LIVE STREAM ANALYTICS",
    bt2: "ATENDEE INTEREST AND INTENTS",
    bt3: "SPONSOR ROI ANALYTICS"
  },
  {
    title: "Relevant and memorable 1:1 meetings",
    desc: "We believe one good meeting outshines 1,000 random ones. And it’s not make believe - we found that attendees who have Brella meetings are 18% more likely to come to your next event. That’s the power of networking done right, and you’ll bring that to your event with Brella.",
    v1: "https://f.hubspotusercontent00.net/hubfs/2090809/Animations/AI_Matchmaking.mp4",
    v2: "https://f.hubspotusercontent00.net/hubfs/2090809/Animations/Personal_Meeting%20(1).mp4",
    v3: "https://f.hubspotusercontent00.net/hubfs/2090809/Animations/Set_an_Agenda.mp4",
    bt1: "AI MATCHMAKING AND NETWORKING",
    bt2: "PERSONAL ONLINE MEETING ROOM",
    bt3: "QUICK MEETING BOOKING"
  }, {
    title: "Greater reach & impact for your  sponsors",
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

      <InfoSection {...virtualObjOne} />
      <Carousel></Carousel>
      <Videobox hybridDetails={virtualDetails} />
      <Videoboxtwo hybridDetails={virtualDetails} />
      <InfoSection {...virtualObjTwo} />
      <ChartInfo hybridDetails={virtualDetails} />
      <Reach hybridDetails={virtualDetails} />
      <InfoSection {...virtualObjFour} />
      <InfoSection {...virtualObjThree} />

      <Footer />
    </>
  );
}

export default Virtual;
