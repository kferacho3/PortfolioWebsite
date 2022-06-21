import React from 'react'
import { FaDiscord, FaInstagram, FaTwitter , FaYoutube} from 'react-icons/fa';
import Popup from './Popup';
import { animateScroll as scroll} from 'react-scroll';
import "./Footer.scss";
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksWrapper2,
    FooterLinksWrapper3,
    FooterLinkItems,
    FooterLinkItems2,
    FooterLinkItems3,

    FooterLinkTitle,
    FooterLink,
    FooterLink1,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
   
  } from './FooterElements';
import { useState} from 'react';
const Footer = ({bg, img1, img2, img3}) => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
   
    const [buttonPopup2, setButtonPopup2] = useState(false);
    
    const handleClick1 = () => {
        window.open("https://discord.gg/swwnG3kpz5");
      };
      const handleClick2 = () => {
        window.open("https://twitter.com/MetaTunesNFT");
      };
      const handleClick3 = () => {
        window.open("https://www.instagram.com/metatunesnft/");
      };

      //handles timed popup by eliminating raapid popup (useeffect helps)
      


    return (
        <FooterContainer  className='home'>
          <FooterWrap>
            <FooterLinksContainer>

              <FooterLinksWrapper>
                 <FooterLinkItems>
                    <FooterLinkTitle> pages() </FooterLinkTitle>
                        <FooterLink1 to=''>about()</FooterLink1>
                        <FooterLink1 to=''>works()</FooterLink1>
                        <FooterLink1 to=''>myProjects()</FooterLink1>
                        <FooterLink1 to=''>fun()</FooterLink1>  
                        
                        
                 </FooterLinkItems>
                 </FooterLinksWrapper>
            

              <FooterLinksWrapper2 >
                 <FooterLinkItems2>
                    <FooterLinkTitle> socials() </FooterLinkTitle>
                        <FooterLink onClick={handleClick1} target='_blank'>linkedin()</FooterLink>
                        <FooterLink onClick={handleClick2} target='_blank'>twitter()</FooterLink>
                        <FooterLink onClick={handleClick3}  target='_blank'>instagram()</FooterLink>
                        <FooterLink to="">youtube()</FooterLink>
                 </FooterLinkItems2>
                 </FooterLinksWrapper2>
                 
                 <FooterLinksWrapper3>
                 <FooterLinkItems3>
                    <FooterLinkTitle> connect() </FooterLinkTitle>
                    <FooterLink onClick={() => setButtonPopup2(true)}>CONTACT!</FooterLink>

                    <FooterLink onClick={() => setButtonPopup2(true)}>resume()</FooterLink>
                    <Popup trigger ={buttonPopup2} setTrigger = {setButtonPopup2}>
                        <h3>ferachonacho@gmail.com</h3>
                        </Popup>
                 </FooterLinkItems3>
              </FooterLinksWrapper3>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        FERACHO
                    </SocialLogo>
                    <WebsiteRights>FERACHO © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='https://discord.gg/swwnG3kpz5' target='_blank' aria-label='Discord'>
                            <FaDiscord />
                        </SocialIconLink>
                        <SocialIconLink href='https://twitter.com/MetaTunesNFT' target='_blank' aria-label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/metatunesnft/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                            <FaYoutube/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
          </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;



