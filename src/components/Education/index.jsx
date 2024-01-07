import React from 'react'
import Icon1 from '../../images/uta.png'
import Icon2 from '../../images/bit.png'
import Icon3 from '../../images/NEU.png'
import Icon4 from '../../images/JSSATE.png'
// import Icon3 from '../../images/svg-3.svg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard,ServicesDesc, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='education'>
      <ServicesH1>Education</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Northeastern University</ServicesH2>
          <ServicesP>Sep 2022 - May 2024</ServicesP>
          <ServicesP>Boston, MA</ServicesP>
          <ServicesDesc>
            <b>Relevant Courses</b>
            <li>Web Design and User Experience</li>
            <li>Web Tools and Development</li>
            <li>Database Management and Design</li>
            <li>Program Structure and Algorithms</li>
            <li>UI/UX Design</li>
            <li>Object Oriented Design</li>
            <li>Agile Software Development</li>
          </ServicesDesc>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon4}/>
          <ServicesH2>JSS Academy Of Technical Education</ServicesH2>
          <ServicesP>Aug 2015 - Jun 2019</ServicesP>
          <ServicesP>Bangalore, India</ServicesP>
          <ServicesDesc>
            <b>Relevant Courses</b>
            <li>Computer Communication Networks</li>
            <li>Operating Systems</li>
            <li>Programming in C</li>
            <li>Microprocessors</li>
            <li>Embedded Systems</li>
            <li>Digital Electronics</li>
            <li>Linear Integrated Circuits</li>
          </ServicesDesc>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
