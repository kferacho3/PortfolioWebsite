import React, { useRef, useEffect, useState}from 'react';
import "./intro.scss";
import { 
  BotContainer,
  BotH1,
  BotH2,
  BotBg,
  VideoBg,
  BotImg,
  MachineL,
  SpaceT,
  Meta,
  Apps,
  BotContWrapper
} from './IntroElements';
function Bot({isOpen, toggle}) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
      setHover(!hover);
  }
  return (
    <BotContainer id ='bottom' > 

    <BotH1> Completed </BotH1>
    <BotH2> Works </BotH2>
    <BotImg to ='/about' 
                    onClick={toggle}  />
                 
        <BotContWrapper>
                    <Meta to ='/about' 
                    onClick={toggle}  />
                    <Apps to ='/about' 
                    onClick={toggle}  />
                    <SpaceT to ='/about' 
                    onClick={toggle}  />
                    <MachineL to ='/about' 
                    onClick={toggle}  />
        </BotContWrapper>
    

    <BotBg>
        <VideoBg autoPlay loop muted playsinline src={'./images/plainbg.jpg'} type='image/jpg' />   
    </BotBg>
       
    </BotContainer> 
    
  );
}
export default Bot;