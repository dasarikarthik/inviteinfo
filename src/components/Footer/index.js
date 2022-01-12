import { FooterContainer,FooterWrap,FooterLinksContainer,FooterLinksWrapper,FooterLinkItems,FooterLinkTitle,FooterLink } from "./FooterElements"
import {FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaInstagram} from 'react-icons/fa'
import { SocialMedia ,SocialIconLink,SocialLogo, SocialMediaWrap, WebsiteRights, SocialIcons} from "./FooterElements"
import { animateScroll as scroll } from "react-scroll/modules"

const Footer = () => {

    const toggleHome= ()=>{
        scroll.scrollToTop();
    };

    return (
        <>
         <FooterContainer>
             <FooterWrap>
                 <FooterLinksContainer>
                     <FooterLinksWrapper>
                         <FooterLinkItems>
                             <FooterLinkTitle>About Us</FooterLinkTitle>
                                 <FooterLink to="/signin">How it Works</FooterLink>
                                 <FooterLink to="/signin">Testimonials</FooterLink>
                                 <FooterLink to="/signin">Careers</FooterLink>
                                 <FooterLink to="/signin">Investors</FooterLink>
                                 <FooterLink to="/signin">Terms of Service</FooterLink>
                         </FooterLinkItems>
                         <FooterLinkItems>
                             <FooterLinkTitle>Videos</FooterLinkTitle>
                                 <FooterLink to="/signin">Submit Video</FooterLink>
                                 <FooterLink to="/signin">Ambassadors</FooterLink>
                                 <FooterLink to="/signin">Agency</FooterLink>
                                 <FooterLink to="/signin">Influencer</FooterLink>
                         </FooterLinkItems>
                     </FooterLinksWrapper>
                     <FooterLinksWrapper>
                         <FooterLinkItems>
                             <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                 <FooterLink to="/signin">Contact</FooterLink>
                                 <FooterLink to="/signin">Support</FooterLink>
                                 <FooterLink to="/signin">Destinations</FooterLink>
                                 <FooterLink to="/signin">Sponsorships</FooterLink>
                         </FooterLinkItems>
                         <FooterLinkItems>
                             <FooterLinkTitle>Social Media</FooterLinkTitle>
                                 <FooterLink to="/signin">Instagram</FooterLink>
                                 <FooterLink to="/signin">Facebook</FooterLink>
                                 <FooterLink to="/signin">Youtube</FooterLink>
                                 <FooterLink to="/signin">Twitter</FooterLink>
                         </FooterLinkItems>
                     </FooterLinksWrapper>
                 </FooterLinksContainer>
                 <SocialMedia>
                     <SocialMediaWrap>
                         <SocialLogo onClick={toggleHome} to="/">dolla</SocialLogo>
                         <WebsiteRights>dolla © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                         <SocialIcons>
                         <SocialIconLink href="/" target="_blank" arial-label="Facebook"><FaFacebook /></SocialIconLink>
                         <SocialIconLink href="/" target="_blank" arial-label="Instagram"><FaInstagram /></SocialIconLink>
                         <SocialIconLink href="/" target="_blank" arial-label="Youtube"><FaYoutube /></SocialIconLink>
                         <SocialIconLink href="/" target="_blank" arial-label="Twitter"><FaTwitter /></SocialIconLink>
                         <SocialIconLink href="/" target="_blank" arial-label="Linkedin"><FaLinkedin /></SocialIconLink>
                         </SocialIcons>
                     </SocialMediaWrap>
                 </SocialMedia>
             </FooterWrap>
         </FooterContainer>
        </>
    )
}

export default Footer
