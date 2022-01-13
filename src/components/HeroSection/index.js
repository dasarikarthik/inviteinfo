import Video from '../../videos/video.mp4';
import { useState } from 'react';
import { Button } from '../ButtonElements';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements';
const HeroSection = () => {

    const [hover, setHover]=useState(false)

    const onHover=() =>{
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
        </HeroBg>
        <HeroContent>
            <HeroH1>Invitations Made Easy</HeroH1>
            <HeroP>
                Contact Us to send inviations to all your relatives. 
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup"  smooth={true} duration={500} spy={true} exact='true' offset={-80}  onMouseEnter={onHover} onMouseLeave={onHover}>Get Started {hover ? <ArrowForward/>: <ArrowRight/>}</Button>
            </HeroBtnWrapper>
        </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
