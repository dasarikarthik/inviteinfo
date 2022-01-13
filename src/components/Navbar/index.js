import { Navigate } from "react-router-dom"
import {FaBars} from 'react-icons/fa'
import { IconContext } from "react-icons/lib"
import { Nav, NavbarContainer, NavLogo,MobileIcon,NavMenu, NavItem, NavLinks,NavBtn,NavBtnLink } from "./NavbarElements"
import { useEffect, useState } from "react"
import { animateScroll as scroll } from "react-scroll"



const Navbar = ({toggle}) => {

const [scrollNav, setScrollNav]= useState(false)

const changeNav = () => {
    if(window.scrollY >= 80){
        setScrollNav(true)
    }
    else{
        setScrollNav(false);
    }
}

useEffect(()=> {
    window.addEventListener('scroll', changeNav)
}, []);
const toggleHome= ()=>{
    scroll.scrollToTop();
};
const rangu=scrollNav? "#000":"#fff";

    return (
        <>
        <IconContext.Provider value={{color: rangu}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo scrollNav={scrollNav} to="/" onClick={toggleHome}>inviteinfo</NavLogo>
                <MobileIcon  onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                       <NavLinks scrollNav={scrollNav} to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80} >About</NavLinks> 
                    </NavItem>
                    <NavItem>
                       <NavLinks scrollNav={scrollNav} to='discover' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks> 
                    </NavItem>
                    <NavItem>
                       <NavLinks scrollNav={scrollNav} to='services' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavLinks> 
                    </NavItem>
                    <NavItem>
                       <NavLinks scrollNav={scrollNav} to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks> 
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink href="https://api.whatsapp.com/send?phone=+918885190228">Conatct us</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
