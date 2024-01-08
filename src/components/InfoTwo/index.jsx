import React from 'react'
// import { Button } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, SocialIcons, SocialIconLink, ImgWrap, Img } from './InfoElements'
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Info = ({lightBg, id, imgStart, topLine, lightText, headline1, headline2, headline3, darkText, description, buttonLabel, alt, img, primary, dark, dark2 }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline1}</Heading>
                <Heading lightText={lightText}>{headline2}</Heading>
                <Heading lightText={lightText}>{headline3}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>

                <SocialIcons>
                  {/* <SocialIconLink href='https://www.facebook.com/Vishnu.Gops10' target='_blank' arial-label='Facebook'>
                    <FaFacebook />
                  </SocialIconLink> */}
                  <SocialIconLink href='https://www.instagram.com/adityasauravvijay/' target='_blank' arial-label='Instagram'>
                    <FaInstagram/>
                  </SocialIconLink>
                  <SocialIconLink  target='_blank' arial-label='Youtube'>
                    <FaYoutube />
                  </SocialIconLink>
                  <SocialIconLink  target='_blank' arial-label='Twitter'>
                    <FaTwitter/>
                  </SocialIconLink>
                  <SocialIconLink href='https://www.linkedin.com/in/aditya-saurav-vijay/' target='_blank' arial-label='Linkedin'>
                    <FaLinkedin />
                  </SocialIconLink>
                </SocialIcons>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default Info
