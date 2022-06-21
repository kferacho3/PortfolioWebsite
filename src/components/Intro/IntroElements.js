
import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const IntroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    width: 100%;
    position: relative;
    z-index: 1;
    overflow-x: hidden;
    overflow-y: hidden;
    overflow: hidden;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0, 0, 0, 0, 0.6) 100%), 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)

    }
`;

export const IntroImg = styled.img`
    top: 0%;
    left: 80%;
    height: 400px;
    width: 400px;
    margin-right: -50%;
    transform: translate(-250%, -50%);
    z-index: 0; 
    align-items: center;
    display:block;
    position: absolute;
    border-top: 3px solid transparent;
    border-radius: 25px;
`;

export const IntroImg2 = styled.img`
    top: 50%;
    left: 30%;
    height: 100px;
    width: 100px;
    margin-right: -50%;
    transform: translate(-250%, -50%);
    transform: scale(-1, -1);
    z-index: 0; 
    align-items: center;
        display:block;
    position: absolute;
    border-top: 3px solid transparent;
    border-radius: 25px;
`;



export const IntroContainer2 = styled.div`
    background: #0c0c0c;
    padding: 0 30px;
    height: 100%;
    z-index: 1;
`;

export const IntroBG = styled.div`
    position: absolute;
    top: 30px;
    right: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
`;

export const VideoBg = styled.img`
    width: 100%;
    height: 100%;
    z-index: -9999px;
    -o-object-fit: cover;
    object-fit: cover;
`;

export const IntroContent = styled.div`
    z-index: = 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const IntroH1 = styled.h1`
    color: #FFF444;
    font-size: 8rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-60%, -250%);
    text-shadow: 5px 5px #FF0000;
    z-index: 99999;
    text-align: center;
    text-FaAlignCenter: FaCentercode;

@media screen and (max-width: 1250px) {
    font-size: 6rem;
}

@media screen and (max-width: 850px) {
        font-size: 3.5rem;

		transform: translate(-50%, -200%);
    }
`;



export const IntroH2 = styled.h2`
    color: #FFF444;
    font-size: 7rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-70%, -175%);
    text-shadow: 5px 5px #FF0000;
    z-index: 99999;
    text-align: center;
    text-FaAlignCenter: FaCentercode;

    @media screen and (max-width: 1250px) {
    font-size: 5rem;
}

@media screen and (max-width: 850px) {
        font-size: 3.25rem;

		transform: translate(-50%, -20%);
    }
`;

export const IntroH3 = styled.h3`
    color: #FFF444;
    font-size: 5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -100%);
    text-shadow: 5px 5px #FF0000;
    z-index: 99999;
    text-align: center;
    text-FaAlignCenter: FaCentercode;

@media screen and (max-width: 1250px) {
    font-size: 4rem;
}

@media screen and (max-width: 850px) {
        font-size: 3.25rem;

		transform: translate(-50%, 100%);
    }
`;
export const IntroP = styled.p`
    color: #FFF444;
    font-size: 6rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 270%);
    text-shadow: 5px 5px #FF0000;
    z-index: 99999;
    text-align: center;
    text-FaAlignCenter: 
    
    o;

@media screen and (max-width: 900px) {
    font-size: 35px;
}

@media screen and (max-width: 480px) {
        font-size: 30px;

		transform: translate(-50%, -100%);
    }
`;

export const IntroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 150%);
    flex-direction: column;
    align-items: center;
    z-index: 99999;
    @media screen and (max-width: 640px) {
        align-items: center;
		display:block;
		
		margin: auto;
        margin-top: 125px;
    }
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;



export const Button4 = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#FFF444' : '#010606')} ;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '30px 30px')} ;
    color: #FF0000;
    font-size: ${({fontBig}) => (fontBig ? '30px' : '16px')} ;
    text-color: #FFF444;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    z-index: 99999;
&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    color: ${({dark}) => (dark ? '#660099' : '#fff')};
}
`;

export const ButtonS = styled(LinkS)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#FFF444' : '#010606')} ;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '30px 30px')} ;
    color: #FF0000;
    font-size: ${({fontBig}) => (fontBig ? '30px' : '16px')} ;
    text-color: #FFF444;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    z-index: 99999;
&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    color: ${({dark}) => (dark ? '#660099' : '#fff')};
}
`;
export const Container = styled.div`
height: 400vh;
width: 100%;
    position: relative;
    justify-content: center;
    align-items: center;
`
export const MidContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 300px 30px;
    height: 300vh;
    width: 100%;
    position: relative;
    z-index: 1;
    overflow-x: hidden;
    overflow-y: hidden;
  
    :before {
        content: '';
        position: absolute;
       
        z-index: 2;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0, 0, 0, 0, 0.6) 100%), 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)
        

    }
`;
export const MidContainer2 = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 4000px;
    width: 1800px;
    position: relative;
    z-index: 1;
    overflow-x: hidden;
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0, 0, 0, 0, 0.6) 100%), 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)
        

    }
`;
export const MidBg = styled.div`
    position: absolute;

    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    
`;

export const MidImg = styled.img`
    
    height: 100%;
    width: 100%;
    position: relative;
    z-index: -9999px;
    object-fit: fill;
    @media screen and (max-width: 420px) {
      
     
      width: 120%;
      height: 100%;
      }
    
`;


export const BotContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150vh;
    width: 100%;
    position: relative;
    z-index: 1;
    overflow-x: hidden;
    overflow-y: hidden;
    :before {
        content: '';
        position: absolute;
       
        z-index: 2;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0, 0, 0, 0, 0.6) 100%), 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%)
        

    }
;`

export const BotH1 = styled.h1`
    color: #fff;
    font-size: 8rem;
    position: absolute;

    transform: translate(-140px, -350px);
    text-shadow: 5px 5px #000;
    z-index: 99999;
    text-align: center;
    text-FaAlignCenter: FaCentercode;

@media screen and (max-width: 1250px) {
    font-size: 6rem;
};`

export const BotH2 = styled.h1`
    color: #fff;
    font-size: 8rem;
    position: absolute;

    transform: translate(-140px, -300px);
    text-shadow: 5px 5px #000;
    z-index: 99999;
    text-align: center;
    text-FaAlignCenter: FaCentercode;

@media screen and (max-width: 1250px) {
    font-size: 6rem;
};`

export const BotBg = styled.div`
position: absolute;

top: 0;
right: 0;
bottom: 0;
width: 100%;
height: 100%;
overflow: hidden;

`;

export const BotImg = styled(LinkR)`
    top: 120px;
    height: 900px;
    width: 900px;
    z-index: 999999; 
    position:absolute; 
   transform: translate(-450px, 100px);
    
    background-image: url('./images/finme.png');
    zoom: 0.75;
    &:hover {
    transition: all 0.2s ease-in-out;

    background-image: url('./images/finme2.png');
}
@media screen and (max-width: 1000px) {
      
    transform: translate(-100px, 1100px);
      zoom: 0.4;
    }
  

    @media screen and (max-width: 650px) {
    
    transform: translate(-100px, 2400px);
    
     zoom: 0.25;
     }
`;

export const Mons = styled.div`
@media screen and (max-width: 1250px) {
    zoom: 0.91;
}
`
export const MachineL = styled(LinkR)`
    top: 120px;
    height: 1400px;
    width: 1900px;
    z-index: 999999; 
    position:absolute; 
   
    transform: translate(1000px, 2000px);
    
    background-image: url('./images/ml.png');
    zoom: 0.18;
    &:hover {
        zoom: 0.181;
}
@media screen and (max-width: 1250px) {
    
    transform: translate(0px, 2000px);
}
@media screen and (max-width: 650px) {
    
    transform: translate(1000px, 4000px);
  }

`;
export const Apps = styled(LinkR)`
    top: 120px;
    height: 1400px;
    width: 1900px;
    z-index: 999999; 
    position:absolute; 
   transform: translate(3000px, 2000px);
    
    background-image: url('./images/App.png');
    zoom: 0.18;
    &:hover {
        zoom: 0.181;
}
@media screen and (max-width: 1250px) {
    
    transform: translate(1750px, 2000px);
}
@media screen and (max-width: 650px) {
    
    transform: translate(1000px, 2500px);
  }
`;

export const SpaceT = styled(LinkR)`
    top: 120px;
    height: 1400px;
    width: 1900px;
    z-index: 999999; 
    position:absolute; 
   transform: translate(3000px, 250px);
    
    background-image: url('./images/st.png');
    zoom: 0.18;
    &:hover {
        zoom: 0.181;
}
@media screen and (max-width: 1250px) {
    
    transform: translate(1750px, 250px);
}
@media screen and (max-width: 650px) {
    
    transform: translate(1000px, 1000px);
  }

`;

export const Meta = styled(LinkR)`
    top: 120px;
    height: 1400px;
    width: 1900px;
    z-index: 999999; 
    position:absolute; 
   transform: translate(1000px, 250px);
    
    background-image: url('./images/meta.png');
    zoom: 0.18;
    &:hover {
    zoom: 0.181;
}
@media screen and (max-width: 1250px) {
    
    transform: translate(0px, 250px);
}
@media screen and (max-width: 650px) {
    
    transform: translate(1000px, -500px);
  }
`;



export const BotImg2 = styled.img`
    top: 50%;
    left: 30%;
    height: 100px;
    width: 100px;
    margin-right: -50%;

    transform: translate(-250%, -50%);
    transform: scale(-1, -1);
    z-index: 0; 
    align-items: center;
    display:block;
    position: absolute;
    border-top: 3px solid transparent;
    border-radius: 25px;
`;

export const BotContContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  overflow: hidden;
  @media screen and (max-width: 850px) {
    
    transform: translateY(25px);
  }

  
 `;

export const BotContWrapper = styled.div`
    max-width: 1500px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 120px;
  
    @media screen and (max-width: 1000px) {
        transform: translate(-325px, -500px);
        zoom: 0.9;
    grid-gap: 5px;
  }

    @media screen and (max-width: 650px) {
      grid-template-columns: 1fr;
      zoom: 0.7;
      transform: translate(-325px, -650px);

  }
  @media screen and (max-width: 450px) {
  
    transform: translate(-350px, -600px);
      zoom: 0.55;

  }
`;