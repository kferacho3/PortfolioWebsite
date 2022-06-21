import React, { useRef, useEffect, useState} from 'react';
//import Video from '../../videos/HBG3.mp4';
import Img from '../../images/bit3.png';
import "./personal.scss";
import { 
  PersonalContainer,
  PersonalContainer2,
  PersonalBG,
  PersonalBtnWrapper,
  PersonalContent, 
  PersonalH1,
  PersonalH2,
  PersonalH3,
  PersonalImg,
  PersonalP, 
  VideoBg, 
  Button4, 
  ArrowForward, 
  ArrowRight 
} from './PersonalElements';
function Personal() {
  const textRef = useRef();

  
  const [hover, setHover] = useState(false);

  const onHover = () => {
      setHover(!hover);
  }
  return (
    <PersonalContainer id ={'Personal'}>
    
    <PersonalBG >
    <div className='bit3'/>
          
    <PersonalImg src={'./images/ufo.jpg'} type='image/jpg' className='me3'/>
    <div className='bods'>
    
    <div className='container'>
      <div className='card'>
      <div className='imgBx'>
        <img src ="./images/plan1.jpg">

        </img>
      </div>
        <div className='contentBx'>
          <div className='content'>
            <h3></h3>
            <p>

            </p>
          </div>
        </div>
      </div>
      <div className='card'>
      <div className='imgBx'>
        <img src ="./images/plan2.jpg">

        </img>
      </div>
        <div className='contentBx'>
          <div className='content'>
            <h3></h3>
            <p>

            </p>
          </div>
        </div>
      </div>
      <div className='card'>
      <div className='imgBx'>
        <img src ="./images/plan3.jpg">

        </img>
      </div>
        <div className='contentBx'>
          <div className='content'>
            <h3></h3>
            <p>

            </p>
          </div>
        </div>
      </div>
      <div className='card'>
      <div className='imgBx'>
        <img src ="./images/plan4.jpg">

        </img>
      </div>
        <div className='contentBx'>
          <div className='content'>
            <h3></h3>
            <p>

            </p>
          </div>
        </div>
      </div>
      <div className='card'>
      <div className='imgBx'>
        <img src ="./images/plan5.jpg">

        </img>
      </div>
        <div className='contentBx'>
          <div className='content'>
            <h3></h3>
            <p>

            </p>
          </div>
        </div>
      </div>
      <div className='card'>
      <div className='imgBx'>
        <img src ="./images/plan6.jpg">

        </img>
      </div>
        <div className='contentBx'>
          <div className='content'>
            <h3></h3>
            <p>

            </p>
          </div>
        </div>
      </div>
    </div>
    
      
    </div>



          <PersonalBtnWrapper>
                    <Button4 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    //href = 'https://discord.gg/swwnG3kpz5'
                    target='_blank' 
                    //onclick="openInNewTab('https://discord.gg/UaKAS7hf');"
                    primary = 'true'
                    dark = 'true'
                    fontBig = 'true'>
                    
                        ???() {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button4>
            </PersonalBtnWrapper>
            <VideoBg autoPlay loop muted playsinline src={Img} type='image/jpg' />     
            
    </PersonalBG>
    
    </PersonalContainer>
  );
}
export default Personal;