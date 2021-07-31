import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import ScrollToTop from '../components/ScrollToTop';
import Videobox from '../components/InfoSection/Videobox';
import Reach from '../components/InfoSection/Reach';
import ChartInfo from '../components/InfoSection/ChartInfo';
import {
  hybridObjOne,
  hybridObjTwo,
  hybridObjThree,
  hybridObjFour,
} from '../components/InfoSection/Data';

const title = "Provide the best hybrid networking experience"
const desc = "Attendees who participate in Brella  meetings are 18% more likely to  come back to your next event.  Our AI-powered matchmaking gives the highest-quality matches and meetings to each participant, no matter if they attend virtually or live."
const videoOne = "https://f.hubspotusercontent00.net/hubfs/2090809/Animations/AI_Matchmaking.mp4"

const videos = ["https://f.hubspotusercontent00.net/hubfs/2090809/Animations/Personal_Meeting%20(1).mp4", "https://f.hubspotusercontent00.net/hubfs/2090809/Animations/AI_Matchmaking.mp4", "https://f.hubspotusercontent00.net/hubfs/2090809/Animations/AI_Matchmaking.mp4"]
const hybridDetails = [{
  title: "Provide the best hybrid networking experience",
  desc: "Attendees who participate in Brella  meetings are 18% more likely to  come back to your next event.  Our AI-powered matchmaking gives the highest-quality matches and meetings to each participant, no matter if they attend virtually or live.",
  v1: "https://f.hubspotusercontent00.net/hubfs/2090809/Animations/Personal_Meeting%20(1).mp4",
  v2: "https://f.hubspotusercontent00.net/hubfs/2090809/Animations/AI_Matchmaking.mp4",
  v3: "https://f.hubspotusercontent00.net/hubfs/2090809/Animations/Set_an_Agenda.mp4",
  bt1: "AI MATCHMAKING AND NETWORKING",
  bt2: "PERSONAL ONLINE MEETING ROOM",
  bt3: "QUICK MEETING BOOKING"
},
{
  chartTitle: "Understand both your live and virtual impact",
  chartDesc: "Gain a new understanding of your audience and event success by measuring impact across different formats. Determine engagement & activity levels across your live & virtual audience, calculate networking impact and much more.",
  img1: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/Digital%20booth%20traffic.png?width=865&height=566&name=Digital%20booth%20traffic.png",
  img2: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/Livestream%20analytics%20%20(((TEST))))).png?width=865&height=566&name=Livestream%20analytics%20%20(((TEST))))).png",
  img3: "https://www.brella.io/hs-fs/hubfs/Illustrations%20Web2021/Audience%20engagement%20data.png?width=865&height=566&name=Audience%20engagement%20data.png",
  bt1: "DIGITAL BOOTH TRAFFIC",
  bt2: "LIVE STREAM ANALYTICS",
  bt3: "AUDIENCE ENGAGEMENT DATA",

}, {

}, {
  title: "How we do hybrid",
  img1: "https://www.brella.io/hs-fs/hubfs/Build%20the%20excitement.png?width=866&height=413&name=Build%20the%20excitement.png",
  img1tit: "Build the excitement well before your event",
  img1desc: "All attendees can join the platform 2 weeks before your event to meet and chat with other participants.",
  img2: "https://www.brella.io/hs-fs/hubfs/%26%20inclusive%20experience.png?width=866&height=413&name=%26%20inclusive%20experience.png",
  img2tit: "Provide a truly memorable, inclusive experience",
  img2desc: "No matter if they attend live or virtual, everyone can participate in sessions, breakout rooms and 1:1 networking.",
  img3: "https://www.brella.io/hs-fs/hubfs/Make%20new%20connections.png?width=866&height=413&name=Make%20new%20connections.png",
  img3tit: "Make new connections from anywhere",
  img3desc: "Our AI provides all your attendees with their personal meeting location, either at the event or online.",
  bt1: "Contact Sales"
}
]
const detailsTwo = [{
  title: "Drive sales to your sponsors - both online and offline",
  desc: `Drastically increase sponsor value with a presence both online and offline, and accurate reporting of their return on investment.`,
  bt1: "VIRTULA BOOTHS",
  bt2: "ONLINE AND OFFILNE 1:1 MEETINGS",
  bt3: "SPONSOR ADS AND PROMOTIONS",
  v1: "https://f.hubspotusercontent00.net/hubfs/2090809/Animations/Virtual_Booth.mp4",
  v2: "https://f.hubspotusercontent00.net/hubfs/2090809/Animations/Online_Offline_meetings.mp4",
  v3: "https://f.hubspotusercontent00.net/hubfs/2090809/Animations/Sponsored_Ads.mp4"

}]
function Hybrid() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <InfoSection {...hybridObjOne} />
      <Videobox hybridDetails={hybridDetails} />
      <ChartInfo hybridDetails={hybridDetails} />
      <Videobox hybridDetails={detailsTwo} />
      <Reach hybridDetails={hybridDetails} />
      <InfoSection {...hybridObjTwo} />
      <InfoSection {...hybridObjThree} />
      <InfoSection {...hybridObjFour} />
      <Footer />
    </>
  );
}

export default Hybrid;
