import React, { useState } from 'react';
import { Button } from '../ButtonElements';

import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';
import { Link } from 'react-router-dom';

function HeroSection() {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id='home'>
      <HeroBg>
        
      </HeroBg>
      <HeroContent>
        <HeroH1>The event platform that inspires, engages and connects attendees</HeroH1>
        <HeroP>
        Industry leaders trust LLTV to deliver truly interactive virtual, hybrid and in-person events that empower attendees and sponsors to make meaningful connections.
        </HeroP>
        <HeroBtnWrapper>
        <Button
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
            primary='true'
            dark='true'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
          <Link to='signup'>Sign Up {hover ? <ArrowForward /> : <ArrowRight />}</Link>
        </Button>
          
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
