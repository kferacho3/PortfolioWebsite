import React, { useRef, useEffect, useState} from 'react';
import Video from '../../videos/HBG3.mp4';
//import Img from '../../images/HIMG.png';

import {animateScroll as scroll} from 'react-scroll';
import Img from '../../images/bg2.png';
import "./intro.scss";
import { init } from "ityped";
import { 
  IntroContainer,
  IntroContainer2,
  IntroBG,
  IntroBtnWrapper,
  IntroContent, 
  IntroH1,
  IntroH2,
  IntroH3,
  IntroImg,
  IntroImg2,
  IntroP, 
  VideoBg, 
  Button4,
  ButtonS, 
  ArrowForward, 
  ArrowRight,
  Download 
} from './IntroElements';
function Intro({isOpen, toggle}) {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1800,
      backSpeed:60,
      strings: ["Creator", "Developer", "Problem Solver"],
    });
  }, []);
  const [hover, setHover] = useState(false);

  const onHover = () => {
      setHover(!hover);
  }
  const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };
  return (
    <IntroContainer id ={'home'} >
    
    <IntroBG className='cloud'>
    <IntroImg2 src={'Bird1.jpg'} type='image/jpg' className='b1'/>
    <IntroImg2 src={'Bird3.jpg'} type='image/jpg' className='b3'/>
    <IntroImg src={'airballoon.jpg'} type='image/jpg' className='me4'/>
   
    <IntroImg2 src={'Bird2.jpg'} type='image/jpg' className='b2'/>
   
    <div />
          <IntroH1>Hello There, I'm</IntroH1>
          <IntroH2>Kamal Feracho</IntroH2>
          <IntroH3 >
          a Freelance <span ref={textRef} />
          </IntroH3>
          <IntroBtnWrapper scrollNav={scrollNav}>
                    <ButtonS 
                    
                    onClick={toggle}
                    primary = 'true'
                    dark = 'true'
                    fontBig = 'true'
                    to='about' 
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80} 
                    activeClass='active'>
                    
                        EXPLORE {hover ? <ArrowForward /> : <ArrowRight/>}
                    </ButtonS>
            </IntroBtnWrapper>  
            
    </IntroBG>
    
    </IntroContainer>
  );
}
export default Intro;