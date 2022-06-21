import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    background-image: url('./images/dirt2.jpg');
    background-position: center;
    background-size: cover;
    opacity: ${({ isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen}) => (isOpen ? '0' : '-100%')}
    
`;

export const CloseIcon = styled(FaTimes) `
    color: #fff;
`;

export const Icon = styled.div`
    position: absoliute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    color: #fff;
    margin: auto;

`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 40px;
    margin-top: -50px;
    grid-template-rows: repeat(6, 60px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarItem1 = styled.div`
    
    height: 100%;
    width: 100%;
    background-image: url('./images/w1.jpg');
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

    transform: scale(2);
    padding: 15px 0px;
    &:hover {
        transform: scale(2.1);
    }
     
`;
export const SidebarItem2 = styled.div`
    
    height: 100%;
    width: 100%;
    background-image: url('./images/w2.jpg');
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
    padding: 23px 0px;
    transform: scale(2.25);
    &:hover {
        transform: scale(2.35);
    }
     
`;

export const SidebarItem3 = styled.div`
    
    height: 100%;
    width: 100%;
    background-image: url('./images/w5.jpg');
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
    padding: 30px 0px;
    transform: scale(2.5);
    &:hover {
        transform: scale(2.6);
    }
     
`;
export const SidebarItem4 = styled.div`
    
    height: 100%;
    width: 100%;
    background-image: url('./images/w4.jpg');
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
    padding: 15px 0px;
    margin-top: 50px;
    transform: scale(2.5);
    &:hover {
        transform: scale(2.6);
    }
     
`;
export const SidebarLink = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #FFF444;
    cursor: pointer;
    text-shadow: 1px 1px #FF0000;

    

    &:hover {
        color: #660099;
        transition: 0.2 ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -120px;
`;

export const SidebarRoute = styled(LinkS)`
    
    
    white-space: nowrap;
    padding: 40px 64px;
    
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