
import { Button } from '../ButtonElement'
import VIdeo from '/home/dros/Documents/react1/react-web/src/Videos/video.mp4'
import React, {useState} from 'react'
import { 
    HeroContainer,
    HeroBg,
    VideoBG,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    HeroContent
} from './HeroElements'

const HeroSection = () => {

    const [hover,setHover]= useState(false)
        const onHover= ()=> {
            setHover(!hover);
        }
    
  return (
    
             <HeroContainer>
<HeroBg>
    {/* <VideoBG autoPlay loop muted src={Video} type='video/'></VideoBG> */}
</HeroBg>
<HeroContent>
    <HeroH1> Virtual Banking Made Easy </HeroH1>
    <HeroP>
        Sing up for a new account today and receive $250 
        in credit towars your next payment
    </HeroP>
    <HeroBtnWrapper>
        <Button to="singup" 
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        primary= "true"
        dark="true"
        >
            Get Started {hover ? <ArrowForward/>: <ArrowRight/>}
        </Button>
    </HeroBtnWrapper>
</HeroContent>
        </HeroContainer>
    
  )
}

export default HeroSection
