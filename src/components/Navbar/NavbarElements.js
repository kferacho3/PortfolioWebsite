import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    /*background: ${({scrollNav}) => (scrollNav ? Img : 'transparent')};*/
    background-image: url('./images/ground3.jpg');
    height: 60px;
    margin-top: -60px;
    display: flex;
    justify-content: center;
  
    align-items: center;
    font-size: 1.5rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 90px;
    z-index: 1;
    width: 100%;
    padding: 0 10px;
    max-width: 1100px;
    transform: scale(0.8);
`;

export const NavLogo = styled(LinkR)`
    color: #FFF444;
    text-shadow: 2px 2px #FF0000;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 0px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 870px) {
        display: block;
        
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(150%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
        }   
    `;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    liust-style: none;
    text-align: center;
    margin-right: -15px;
    margin-top: 20px;
    margin-bottom: 5px;
    transform: translateY(-15px);
    
    @media screen and (max-width: 990px) {
        transform: scale(0.75) translateX(-50px);
     }

    @media screen and (max-width: 870px) {
       display: none;
    }
`;

export const NavItem = styled.div`
    
    height: 100%;
    width: 100%;
    background-image: url('./images/ground4.jpg');
    background-position: center;
    background-size: cover;
    white-space: nowrap;
    padding: 10px 40px;
    color: #FFF444;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transform: scale(1.1);
    }
     
`;

export const NavLinks = styled(LinkR)`
    color: #FFF444;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transform: translateY(25px);
    text-shadow: 2px 2px #FF0000;
    
    &.active {
        border-bottom: 3px solid #660099;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 990px) {
        transform: scale(0.70) translateX(-120px) translateY(20px);
       
     }
    @media screen and (max-width: 870px) {
        display: none;
    }
`;

export const NavBtnLink = styled.div`
    border-radius: 50px;
    color: #fff;
    white-space: nowrap;
    padding: 20px 22px;
    
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    background-image: url('./images/ch1.jpg');
    background-position: center;
    background-size: cover;
    transform: scale(1.2);
    &:hover {
        background-image: url('./images/ch2.jpg');
        transform: scale(.9);
    }
`;

