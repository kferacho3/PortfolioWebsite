
import "./intro.scss";
import React, { useRef, useEffect, useState} from 'react';

import { init } from "ityped";
import { 
  MidContainer,
  IntroContainer,
  MidContainer2,
  Container,
  MidImg,
  MidBg,
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
function Mid({isOpen, toggle}) {
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
    <Container className="cloud">
      
    <IntroImg src={'./images/airballoon.jpg'} type='image/jpg' className='me4'/>
   
     <IntroContainer >
     <IntroImg2 src={'./images/Bird1.jpg'} type='image/jpg' className='b1'/>
    <IntroImg2 src={'./images/Bird3.jpg'} type='image/jpg' className='b3'/>
    <IntroImg2 src={'./images/Bird2.jpg'} type='image/jpg' className='b2'/>
    <IntroBG >
  
   
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
                    to='bottom' 
                    smooth={true} 
                    duration={6000} 
                    spy={true} 
                    exact='true' 
                    offset={-80} 
                    activeClass='active'>
                    
                        EXPLORE {hover ? <ArrowForward /> : <ArrowRight/>}
                    </ButtonS>
            </IntroBtnWrapper>  
            
    </IntroBG>
    </IntroContainer>
    <MidContainer id ={'home'} > 
   
     
       
       
       

        <MidBg >
        <MidImg autoPlay loop muted playsinline src={'./house/15.gif'} type='image/gif' />   
        </MidBg>
    
        
        
        <MidBg >
        <MidImg autoPlay loop muted playsinline src={'./house/9.gif'} type='image/gif' />   
        </MidBg>
       
        

        <MidBg >
        <MidImg autoPlay loop muted playsinline src={'./house/11.gif'} type='image/gif' />   
        </MidBg> 
        
    
        <MidBg >
        <MidImg autoPlay loop muted playsinline src={'./house/13.gif'} type='image/gif' />   
        </MidBg>
     
        <MidBg >
        <MidImg autoPlay loop muted playsinline src={'./house/16.gif'} type='image/gif' />   
        </MidBg>
       
    </MidContainer>
    </Container>
  );
}
export default Mid;