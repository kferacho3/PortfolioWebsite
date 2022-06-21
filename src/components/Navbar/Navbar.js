import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
//import {connectWallet} from './walletconnect';
//import connectWallet from './sdk';

import {
     Nav, 
     NavbarContainer, 
     NavLogo,
     MobileIcon, 
     NavMenu, 
     NavItem, 
     NavLinks, 
     NavBtn,
     NavBtnLink
} from './NavbarElements';


const Navbar = ({ toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>FERACHO</NavLogo>
                <MobileIcon onClick={toggle}> 
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/about' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>about()</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/services' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>services()</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/projects' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>myProjects()</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/connect' smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'>connect()</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='fun'smooth={true} duration={500} spy={true} exact='true' offset={-80} activeClass='active'  >fun()</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    );
};

export default Navbar;
