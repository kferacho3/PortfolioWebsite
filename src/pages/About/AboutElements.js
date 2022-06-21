import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import { keyframes } from 'styled-components'
import {BsDownload} from 'react-icons/bs'

import {Link as LinkR} from 'react-router-dom';

export const AboutContainer = styled.div`
    
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 140vh;
    width: 100%;
    position: relative;
    z-index: 1;
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
export const AboutImg = styled.img`
    top: 65%;
    left: 60%;
    height: 200px;
    width: 250px;
    margin-right: -50%;
    transform: translate(-250%, 125%);
    z-index: 0; 
    align-items: center;
        display:block;
    position: absolute;
    
    border-top: 3px solid transparent;
    border-radius: 25px;
/*
    @media screen and (max-width: 1120px) {
        position: absolute;
    left: 65%;
}*/
@media screen and (max-width: 850px) {
    
        zoom: 0.75;
        top: 70%;
    align-items: center;
        display:block;
    position: absolute;
    left: 150%;


}
    /*animation: linear 60s infinite;*/
`;
export const AboutImg2 = styled.img`
 
    
    margin-right: 0%;
    height: 400px;
    width: 475px;
    
    z-index: 0; 
    
    position: absolute;
    margin-top: 50px;
    left: -20px;
    @media screen and (max-width: 1250px) {
        zoom: 1.2;
}

/*
    @media screen and (max-width: 1120px) {
        position: absolute;
    left: 65%;
}*/
@media screen and (max-width: 850px) {
    align-items: center;
    display:block;
    position: absolute;
    left: 75%;
    top: 28%;
    zoom: 0.5;


}
    /*animation: linear 60s infinite;*/
`;



export const AboutContainer2 = styled.div`
    top: 45%;
    left: 50%;
    white-space: nowrap;
    position: absolute;
    display:inline-block;
    @media screen and (max-width: 1250px) {
        zoom: 0.9;

}
@media screen and (max-width: 850px) {
        zoom: 0.85;
    }
    
    z-index: 1;

`;

export const AboutBG = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflowX: hidden;  
    
    
`;

export const VideoBg = styled.img`
    width: 100%;
    height: 100%;
    z-index: -9999px;
    -o-object-fit: cover;
    object-fit: cover;
    
`;


export const AboutContent = styled.div`
    top: 10%;
    z-index: 99999999;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;

    @media screen and (max-width: 1250px) {
        zoom: 0.9;

}
@media screen and (max-width: 1050px) {
 
    zoom: 0.8;
}
@media screen and (max-width: 850px) {
    top: 10%;
    left: -60%;

    position: relative;
        zoom: 0.65;
    }
    

`;
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 60px;
    padding-bottom: 40px;
`;
export const Subtitle = styled.p`
    
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 30px;
    color: '#010606';

`;
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    transform: translate(200%, 20%);
    grid-area: auto;
    width: 400px;
    height: 400px;
    background-image: url('./images/cbord.jpg');
    background-position:center;;
    background-size: cover-image;
    background-repeat: no-repeat;
    border: 5px solid #000;
    border-radius: 10px;


`;
export const AboutH1 = styled.h1`
    color: #FFF444;
    font-size: 8rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    text-shadow: 5px 5px #FF0000;
    z-index: 99999;
    text-align: center;
    text-FaAlignCenter: FaCentercode;

@media screen and (max-width: 1250px) {
    font-size: 6rem;
}

@media screen and (max-width: 850px) {
        font-size: 3.25rem;

    transform: translate(-50%, -200%);
    }
`;



export const AboutH2 = styled.h2`
    color: #FFF444;
    font-size: 8rem;
    position: absolute;
    white-space: nowrap;
    top: 30%;
    left: -40%;
    margin-right: -50%;
    transform: translate(-75%, -250%);
    text-shadow: 3px 3px #FF0000;
    z-index: 99999;
    text-align: center;
    text-FaAlignCenter: FaCentercode;
    display: inline-block;
    @media screen and (max-width: 1250px) {
 
    font-size: 6.6rem;
    left: -40px;
}
@media screen and (max-width: 1050px) {
 
 font-size: 5.6rem;
 left: -25px;
}

@media screen and (max-width: 850px) {
    
        font-size: 3rem;

    transform: translate(-50%, -750%);
    }
`;

export const AboutH3 = styled.h3`
    color: #FFF444;
    font-size: 5rem;
    position: absolute;
    top: 30%;
    left: -40%;
    margin-right: -50%;
    transform: translate(-150%, -250%);
    text-shadow: 3px 3px #FF0000;
    z-index: 99999;
    text-align: center;
    text-FaAlignCenter: FaCentercode;
    display: inline-block;
@media screen and (max-width: 1250px) {
    font-size: 3.5rem;
}
@media screen and (max-width: 1050px) {
    font-size: 3rem;
}

@media screen and (max-width: 850px) {
    font-size: 2.25rem;
    top: -140px;
    left: -40px;
    transform: translate(-50%, -480%);
    }
`;



export const AboutBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, 275%);
    flex-direction: column;
    align-items: center;
    z-index: 99999;
    @media screen and (max-width: 640px) {
        align-items: center;
        display:block;
    
    margin: auto;
        margin-top: 50px;
        zoom: 0.9;
    }
`;

export const AboutBtnWrapper2 = styled.div`
    top: 45%;
    left: 50%;
    white-space: nowrap;
    position: absolute;
    
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 40px;
    margin-top: 100px;
    transform: translate(-500px);
    z-index: 99999;
    @media screen and (max-width: 640px) {
        align-items: center;
        margin: auto;
        margin-top: 50px;
        zoom: 0.9;
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
    margin-top:2 3px;
    border-radius: 50px;
    background-image: url(./images/bcloud.jpg);
    background-position:center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 75px' : '30px 30px')} ;
    color: #fff;

    text-shadow: 1.5px 1.5px #000;
    font-size = ${({fontBig}) => (fontBig ? '30px' : '16px')} ;
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
    transform: scale(1.02);
    color: ${({dark}) => (dark ? '#FFF444' : '#fff')};
}
`;

export const Download = styled(BsDownload)`
    margin-left: 8px;
    font-size: 20px;
`;

export const Button1 = styled.a`
    
    background-image: url(./images/button1.jpg);
    background-position:center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    white-space: nowrap;
    height: 250px;
    width: 250px;
    text-shadow: 1.5px 1.5px #000;
    padding: ${({big}) => (!big ? '14px 48px' : '30px 30px')} ;
    color: #fff;
    font-size: 28px;
    text-color: #FFF444;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    display:inline-block;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    z-index: 999999;
    transform: scale(0.8);

&:hover {
    
    transition: all 0.2s ease-in-out; 
    background-image: url(./images/button2.jpg);
    background-position:center;
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
    
    color: ${({dark}) => (dark ? '#FFF444' : '#fff')};
}
`;


export const AboutContCont = styled.div`
    
    top: -275px;
    right: 0;
    left: -400px;
    bottom: 0;
  position:absolute; display:inline-block; margin:0 auto;
  zoom: 1.5;
    
@media screen and (max-width: 1250px) {
    font-size: 4rem;
    top: -225px;
    left: -430px;
}
@media screen and (max-width: 1050px) {
    zoom: 1.05;
}
@media screen and (max-width: 850px) {
   
    
    top: 80px;
        

    }
`;

