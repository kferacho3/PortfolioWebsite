import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';


export const FooterContainer = styled.footer`

    background-color: #101522;
    background: url(./images/grass2.jpg) no-repeat center center fixed ;
    background-position: center;
    background-size: cover;
    
    @media screen and (max-width: 728px) {
        margin: auto;
        display: block;
        align-items: center;
        min-height: 100%;
        margin: auto;
       
        
    }
    
`;

export const FooterWrap = styled.div`
    padding: 0px 24px;
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;

    
`;

export const FooterLinksContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-context: center;
    overflow-x: hidden;

    row-gap: 40px;
    @media screen and (max-width: 1125px) {
        transform: scale(0.8);
    }
    @media screen and (max-width: 860px) {
        padding-top: 32px;
        display: grid;
        transform: scale(0.8);
        grid-template-columns: 1fr;
        grid-auto-columns: minmax(auto, 1fr);
        padding: 0px -30px;
    }
`;

export const FooterLinksWrapper = styled.div`

    display: flex;
    height: 500px;
    width: 100%;
    background-image: url('./images/bug5.jpg');
    background-position: center;
    background-size: cover;
    white-space: nowrap;
    padding: 60px 0px;
    color: #FFF444;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transform: scale(1.05);
    }
    @media screen and (max-width: 860px) {
        flex-direction: column;
    
    }
    @media screen and (max-width: 520px) {
    transform: scale(0.8) ;
    height: 700px;
    padding: 150px 0px;
    }
`;

export const FooterLinksWrapper2 = styled.div`

    display: flex;
    height: 500px;
    width: 100%;
    background-image: url('./images/bug8.jpg');
    background-position: center;
    background-size: cover;
    white-space: nowrap;
    padding: 40px 0px;
    color: #FFF444;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transform: scale(1.05);
    }
    @media screen and (max-width: 860px) {
        flex-direction: column;
        
        
    }
    @media screen and (max-width: 520px) {
    transform: scale(0.8);
    height: 700px;
    padding: 140px 0px;
    }
`;

export const FooterLinksWrapper3 = styled.div`

    display: flex;
    height: 500px;
    width: 100%;
    background-image: url('./images/bug6.jpg');
    background-position: center;
    background-size: cover;
    white-space: nowrap;
    padding: 0px 0px;
    color: #FFF444;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transform: scale(1.05);
    }
    @media screen and (max-width: 860px) {
        flex-direction: column;
        
    }
    @media screen and (max-width: 520px) {
    transform: scale(0.7) ;
    height: 700px;
    padding: 100px 0px;
    }
`;


export const FooterLinkItems = styled.div`
    
    
    color: #FFF444;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 130px 80px;
    text-shadow: 1px 1px #FF0000;
   
    
`;

export const FooterLinkItems2 = styled.div`
    
    color: #FFF444;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 150px 120px;
    text-shadow: 1px 1px #FF0000;
 
    
`;

export const FooterLinkItems3 = styled.div`
    color: #FFF444;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 180px 80px;
    text-shadow: 1px 1px #FF0000;
    
  
`;
export const FooterLinkTitle = styled.div`
    font-size: 2.5rem;
    margin-bottom: 16px;
    text-shadow: 2px 2px #FF0000;
    @media screen and (max-width: 1090px) {
        
    }
    
`;

export const FooterLink = styled(LinkS)`
    color: #FFF444;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 2rem;
    

    &:hover {
        color: #660099;
        transition: 0.3s ease-in-out;
    }
    @media screen and (max-width: 1090px) {
        
    }
`;

export const FooterLink1 = styled(LinkS)`
    color: #FFF444;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 2rem;
    

    &:hover {
        color: #660099;
        transition: 0.3s ease-in-out;
    }
    @media screen and (max-width: 1090px) {
        transform: scale(0.8);
    }
`;
export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-driection: column;
    }
`;

export const SocialLogo = styled(Link)`
    
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    color: #FFF444;
    text-shadow: 1px 1px #FF0000;
    @media screen and (max-width: 520px) {
        transform: scale(0.8);
        }
    
`;

export const WebsiteRights = styled.small`
    color: #FFF444;
    text-shadow: 1px 1px #FF0000;
    margin-bottom: 16px;
    @media screen and (max-width: 520px) {
        transform: scale(0.8) translateX(20px);
        }
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    @media screen and (max-width: 520px) {
        transform: scale(0.8);
        }
`;

export const SocialIconLink = styled.a`
    color: #fff;
    fonts-size: 24px;
    @media screen and (max-width: 520px) {
        transform: scale(0.8);
        }
`;

export const VizIco = styled.img`
    
    align-items: center
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    display: flex;
    height: 250px;
    width: 250px;
    margin-bottom: 100px;
    transform: translate(90%, 30%)
    @media screen and (max-width: 520px) {
        transform: scale(0.8);
        }
    
`;

export const VizSet = styled.div`
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;

    justify-content: center;
    grid-template-columns: 1fr 1fr;
    display: table-cell;
    vertical-align: middle
    gap: 75px;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        transform: scale(0.60);
        }
`;
