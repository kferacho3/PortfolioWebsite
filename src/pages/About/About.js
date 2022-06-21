import React, { useRef, useEffect, useState} from 'react';
//import Video from '../../videos/HBG3.mp4';
import Img from './cloud.jpg';
import gsap from "gsap";
import "./about.scss";
import { 
  AboutContainer,
  AboutContainer2,
  AboutBG,
  AboutBtnWrapper,
  AboutBtnWrapper2,
  AboutContent, 
  AboutH1,
  AboutH2,
  AboutH3,
  AboutImg,
  AboutP, 
  VideoBg, 
  Button4, 
  Button1,
  AboutConts,
  AboutSecImg,
  AboutContCont,
  AboutImg2,
  Download, 
  Subtitle,
  TextWrapper,
  Column1,
  ArrowForward,
  ArrowRight
} from './AboutElements';
function About({isOpen, toggle}) {
  const textRef = useRef();
  const [hover, setHover] = useState(false);
  const onHover = () => {
      setHover(!hover);
  }


  const [active, setActive] = React.useState(1);
  const SetView = (active) => {
    setActive(active);
  };

  const ActiveView = () => {
    switch (active) {
      case 1:
        return <AboutContCont>
        <AboutImg2 src={'./images/Cc.png'} type='image/png' className='hov'/>
        <AboutImg2 src={'./images/Cpython.png'} type='image/png' className='hov2'/>
        <AboutImg2 src={'./images/Cjava.png'} type='image/png' className='hov3' />
        <AboutImg2 src={'./images/Cp5js.png'} type='image/png' className='hov4'/>
        <AboutImg2 src={'./images/Cr.png'} type='image/png' className='hov5' />
      </AboutContCont>;
      case 2:
        return <AboutContCont>
        <AboutImg2 src={'./images/Csass.png'} type='image/png' className='hov'/>
        <AboutImg2 src={'./images/Creact.png'} type='image/png' className='hov2'/>
        <AboutImg2 src={'./images/Cjavascript.png'} type='image/png' className='hov3' />
        <AboutImg2 src={'./images/Cphotoshopxd.png'} type='image/png' className='hov4'/>
        <AboutImg2 src={'./images/Cwebpack.png'} type='image/png' className='hov5' />
      </AboutContCont>;
      default:
        return <AboutContCont>
        <AboutImg2 src={'./images/Cc.png'} type='image/png' className='hov'/>
        <AboutImg2 src={'./images/Cpython.png'} type='image/png' className='hov2'/>
        <AboutImg2 src={'./images/Cjava.png'} type='image/png' className='hov3' />
        <AboutImg2 src={'./images/Cp5js.png'} type='image/png' className='hov4'/>
        <AboutImg2 src={'./images/Cr.png'} type='image/png' className='hov5' />
      </AboutContCont>;
    }
  };

  return (
    <AboutContainer id ={'about'}>
    
      <AboutBG >

        <div className='bit'/>
          <AboutImg src={'./images/car.gif'} type='image/gif' className='me'/>
          <div className='wheels'>
            <img src={'./images/W.jpg'} type='image/jpg' className='lW'/>
            <img src={'./images/W.jpg'} type='image/jpg' className='rW'/>
        </div>

        <AboutContainer2>
       
          
          {ActiveView()}
          

          
          <AboutH2 >discover more</AboutH2>
          <AboutH3 >about me</AboutH3>
        </AboutContainer2>
        
        <AboutBtnWrapper2>
                    <Button1 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    to ='/services' 
                    onClick={() => SetView(1)}
                    primary = 'true'
                    dark = 'true'
                    fontBig = 'true'>
                    languages() 
                    </Button1>

                    <Button1
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    to ='/services' 
                    onClick={() => SetView(2)}
                    primary = 'true'
                    dark = 'true'
                    fontBig = 'true'>
                    frameworks() 
                    </Button1>     
        </AboutBtnWrapper2>

        <AboutContent className='abouts'>
          <Column1>
            <TextWrapper>
              <Subtitle>I am a recent graduate from Georgia Tech eager to begin my free lancing journey! This portfolio plans to showcase my projects done for clients and my personal works ranging from creative coding to applicable models and architectures usable for you! I love creating websites and applications to express my creativity and bring to life what you envision :)</Subtitle>
            </TextWrapper>              
          </Column1>
        </AboutContent>


        <AboutBtnWrapper>
                    <Button4 
                     to ='/services' 
                    onClick={toggle}
                    primary = 'true'
                    dark = 'true'
                    fontBig = 'true'>
                    myServices() {hover ? <ArrowRight /> : <ArrowForward/>}
                    </Button4>
        </AboutBtnWrapper>
            
            
      </AboutBG>
    
    </AboutContainer>
  );
}
export default About;