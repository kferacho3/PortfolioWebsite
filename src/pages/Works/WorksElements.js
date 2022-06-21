import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link as LinkR} from 'react-router-dom';
export const WorksContainer = styled.div`
  
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 180vh;
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
export const WorksImg = styled.img`
    top: 60%;
    left: 50%;
    height: 200px;
    width: 200px;
    margin-right: -50%;
    transform: translate(-225%, 80%);
    z-index: -5000000; 
    position: absolute;
    
    border-top: 3px solid transparent;
    border-radius: 25px;
    @media screen and (max-width: 850px) {
    align-items: center;
        display:block;
    position: absolute;
    left: 150%;


}
`;
export const WorksContainer2 = styled.div`
    background: #0c0c0c;
  
    padding: 0 30px;
    height: 100%;
    z-index: 1;

`;

export const WorksBG = styled.div`
    position: absolute;

    top: 0;
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

export const WorksContent = styled.div`
    z-index: = 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const WorksH1 = styled.h1`
    color: #fff;
    font-size: 8rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-60%, -525%);
    text-shadow: 3px 3px #000;
    z-index: 99999;
    text-align: center;
    text-FaAlignCenter: FaCentercode;



@media screen and (max-width: 850px) {
        font-size: 4rem;

    transform: translate(-50%, -900%);
    }
    @media screen and (max-width: 400px) {
        font-size: 3.5rem;
        
    }
    @media screen and (max-width: 350px) {
        font-size: 3rem;
    }
`;



export const WorksH2 = styled.h2`
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

export const WorksH3 = styled.h3`
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
export const WorksP = styled.p`
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
    
    

@media screen and (max-width: 850px) {
    font-size: 35px;
}

@media screen and (max-width: 480px) {
        font-size: 30px;

    transform: translate(-50%, -100%);
    }
`;

export const WorksBtnWrapper = styled.div`
    margin-top: 48px;
    display: flex;
    position: absolute;
    top: 55%;
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

    border-radius: 20px;
    background: url(deer.gif);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '35px 15px')} ;
    color: #FF0000;
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
    margin-top: 75px;
    zoom: 0.;
&:hover {
    transition: all 0.2s ease-in-out;
    color: ${({dark}) => (dark ? '#FFF444' : '#fff')};
    transform: scale(1.05);
}
@media screen and (max-width: 640px) {
        
    }
`;