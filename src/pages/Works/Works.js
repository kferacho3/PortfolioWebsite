import React, { useRef, useEffect, useState} from 'react';
//import Video from '../../videos/HBG3.mp4';
import Img from '../../images/bit5.png';
import "./works.scss";
import { 
  WorksContainer,
  WorksContainer2,
  WorksBG,
  WorksBtnWrapper,
  WorksContent, 
  WorksH1,
  WorksH2,
  WorksH3,
  WorksImg,
  WorksP, 
  VideoBg, 
  Button4, 
  ArrowForward, 
  ArrowRight 
} from './WorksElements';
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

function Works({isOpen, toggle}) {
  const textRef = useRef();

  
  const [hover, setHover] = useState(false);

  const onHover = () => {
      setHover(!hover);
  }
  return (
    <WorksContainer id ={'/services'} className='bit2'>
   
   <WorksImg src={'./images/boat.jpg'} type='image/jpg' className='me2'/>
   
    <ServicesContainer id='services'>
      
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={'./images/phone.jpg'}/>
          <ServicesH2>Web + App Design</ServicesH2>
          <ServicesP>Design websites and applications via freestyle or pre-designed template provided by the client</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={'./images/comp.jpg'}/>
          <ServicesH2>Web + App Dev</ServicesH2>
          <ServicesP>Bring forth designs and functionalities into life. Personal projects are usually designed during development</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={'./images/art.jpg'}/>
          <ServicesH2>Photo Shop</ServicesH2>
          <ServicesP>Create and edit images and objects to match websites aesthetic and design.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
      </ServicesContainer>
      <WorksH1>My Services</WorksH1>
    

    

          <WorksBtnWrapper>
                    <Button4 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    to ='/connect' 
                    onClick={toggle}
                    primary = 'true'
                    dark = 'true'
                    fontBig = 'true'>
                    
                        connect() {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button4>
            </WorksBtnWrapper>
   
    

    </WorksContainer>
  );
}
export default Works;