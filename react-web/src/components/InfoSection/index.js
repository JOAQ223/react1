import React from 'react'
import { Button } from '../ButtonElement'
import { 
    Column1, 
    Column2, 
    ImgWrap ,
    InfoContainer,
    InfoWrapper,
    InfoRow,
    BtnWrap,
    TopLine,
    Heading,
    Subtitle,
    TextWrapper,
    Img

      }     from './InfoElement'

  

const InfoSection = ({
    lightBg,
    imgStart,
    id,
    topLine,
    lightText,
    darkText,
    descripcion,
    buttonLabel,
    headLine,
    img,
    alt,
    primary,
    dark,
    dark2
    }) => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine} </TopLine>
                    <Heading lightText={lightText}> {headLine}</Heading>
                    <Subtitle darkText={darkText}> {descripcion}</Subtitle>
                    <BtnWrap>
                        <Button to='home'
                        smoth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        primary={primary ? 1:0}
                        dark={dark ? 1:0}
                        dark2={dark2 ? 1:0}
                        >{buttonLabel}</Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img src={img} alt={alt}></Img>
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>

    </InfoContainer>
  )
}

export default InfoSection
