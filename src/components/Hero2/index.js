import React, {useState} from 'react';



import {
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight,
    Button4
} from './HeroElements';

import './Hero2.scss';

function HeroSection1() {
  const [hover, setHover] = useState(false);
  const onHover = () => {
      setHover(!hover);
  }
    return (
        <HeroContainer id={'home'}>
            <HeroBg>
            <HeroH1> Meta · Tunes </HeroH1>
                <HeroP style={{fontWeight: "bold"}}>
                    MUSIC ENVISIONED BY YOU, BROUGHT TO LIFE!
                </HeroP>
                <HeroBtnWrapper>
                    <Button4 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    href = 'https://discord.gg/swwnG3kpz5'
                    target='_blank' 
                    //onclick="openInNewTab('https://discord.gg/UaKAS7hf');"
                    primary = 'true'
                    dark = 'true'
                    fontBig = 'true'>
                    
                        GET WHITELISTED NOW! {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button4>
                </HeroBtnWrapper>
            </HeroBg>
      </HeroContainer>
    );
}

export default HeroSection1;
