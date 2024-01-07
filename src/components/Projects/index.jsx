import React from 'react'
import Icon1 from '../../images/proj1.svg'
import Icon2 from '../../images/proj2.svg'
import Icon3 from '../../images/proj3.svg'
import Icon4 from '../../images/proj4.svg'
import Icon5 from '../../images/proj5.svg'
import Icon6 from '../../images/proj6.svg'

import {ServicesContainer, ServicesH1,ServicesH3, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='project'>
      <ServicesH1>Projects</ServicesH1>
      <ServicesWrapper>
      <a href="https://github.com/AdityaSauravVijay/MenuMasters">
        <ServicesCard >
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Menu Masters</ServicesH2>
        </ServicesCard>
      </a>
      <a href="https://github.com/AdityaSauravVijay/OLMS">
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Online Library Management System</ServicesH2>
          {/* <ServicesP>you can acess our plataform online anywhere in the world.</ServicesP> */}
        </ServicesCard>
      </a>
      <a href="https://github.com/AdityaSauravVijay/Verify-E-NEWS">
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Verify E-News</ServicesH2>
          {/* <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP> */}
        </ServicesCard>
      </a>
      <a href="https://github.com/NishithNishith/AED-final-project">
        <ServicesCard>
          <ServicesIcon src={Icon4}/>
          <ServicesH2>Animal Rescue System</ServicesH2>
          {/* <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP> */}
        </ServicesCard>
      </a>
      <a href="https://github.com/AdityaSauravVijay/MyPortfolio">
        <ServicesCard>
          <ServicesIcon src={Icon5}/>
          <ServicesH2>My Portfolio </ServicesH2>
          {/* <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP> */}
        </ServicesCard>
      </a>
      <a href="https://github.com/AdityaSauravVijay/Airport-Management-System">  
        <ServicesCard>
          <ServicesIcon src={Icon6}/>
          <ServicesH2>Airport Management System</ServicesH2>
          {/* <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP> */}
        </ServicesCard>
      </a>
      </ServicesWrapper>
      <a href="https://github.com/AdityaSauravVijay">
      <ServicesH3>Checkout my Github profile</ServicesH3>
      </a>
    </ServicesContainer>
  )
}

export default Services
