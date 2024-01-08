import React from 'react'
import Icon1 from '../../images/kpcl2.png'
import Icon2 from '../../images/DRDO.jpg'
import Icon3 from '../../images/Fintellix.jpg'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesIcon4, ServicesH2, ServicesP, ServicesP2 ,ServicesDesc} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='experience'>
      <ServicesH1>Experience</ServicesH1>
      <ServicesWrapper>
      <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Fintellix</ServicesH2>
          <ServicesP>Consultant I</ServicesP>
          <ServicesP2>Bengaluru, Karnataka, India</ServicesP2>
          <ServicesP2>April 2021 - August 2022</ServicesP2>
          <ServicesDesc>
            <li>Incorporated microservices architecture to build 5+ RESTful-based Web microservices for the Self-Help project enabling 800+ retail branches of Capitec Bank to efficiently manage customers and utilize a user-friendly mobile application for digital credit</li>
            <li>Reduced deployment time by 40% by implementing Docker-based deployment and enhanced reliability by implementing effective monitoring using Elastic, Kibana, and Grafana</li>
            <li>Slashed the amount of time required for the credit granting process to less than 45 minutes by implementing REST API endpoints to launch, retrieve status, and terminate the service, providing flexible control and monitoring capabilities resulting in an Average Response Time of 80 milliseconds</li>
          </ServicesDesc>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Fintellix</ServicesH2>
          <ServicesP>Associate Consultant</ServicesP>
          <ServicesP2>Bengaluru, Karnataka, India</ServicesP2>
          <ServicesP2>July 2019 – March 2021</ServicesP2> 
          <ServicesDesc>
            <li>Maintained and implemented bug fixes for a multi-faceted web application called ALPHA serving as a branch application for more than 1200+ bank agents and achieved 95% customer issue resolution rate</li>
            <li>Implemented a Dashboard feature in the branch application of Capitec Bank, enabling bank agents to store and view important information with respect to loan applications leading to a 20% increase in credit applications</li>
            <li>Collaborated with cross-functional teams in an agile team environment to analyze client requirements, actively participating in different phases of software development and improving team efficiency, communication, and product quality thereby reducing project delivery time by 15%</li>
          </ServicesDesc>
        </ServicesCard>
      </ServicesWrapper>
      <ServicesWrapper>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Aeronautical Defense Establishment</ServicesH2>
          <ServicesP>HSI Intern</ServicesP>
          <ServicesP2>Bengaluru, Karnataka, India</ServicesP2>
          <ServicesP2>Sep 2017 – Nov 2017</ServicesP2>
          <ServicesDesc>
            <li>Worked along with a team in development of Embedded Digital Actuators</li>
            <li>Worked on developing code for the Communications and Calibrations of the Autopilot System using C++. Developed code to successfully send and retrieve required flight data from Drone using Embedded sensors and High-end SoC like Inertial Sense and Apalis Tk1.</li>
            <li>Part of the Hardware Software Integration Testing using HSI Test Setup for Actuators</li>
          </ServicesDesc>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon4 src={Icon1}/>
          <ServicesH2>Karnataka Power Corporation Ltd</ServicesH2>
          <ServicesP>Design and Development Electronics Engineer Intern</ServicesP>
          <ServicesP2>Bengaluru, Karnataka, India</ServicesP2>
          <ServicesP2>Jan 2017 – Apr 2017</ServicesP2>
          <ServicesDesc>
            <li>Part of the Design and development of PV Grid Solar Power Plant. </li>
            <li>Involved in testing of Solar cells to determine photovoltaic capacity</li>
      
          </ServicesDesc>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
