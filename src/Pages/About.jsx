import React from 'react'
import Heroes from '../Components/Aboutpage/Heroes';
import Wework from '../Components/Aboutpage/Wework';
import Checkout from '../Components/Aboutpage/Checkout';
import Ourteam from '../Components/Aboutpage/Ourteam';
import Corevalue from '../Components/Aboutpage/Corevalue';
import Card from '../Components/Aboutpage/Card';
import Card1 from '../Components/Aboutpage/Card1';
import Moderteck from '../Components/Aboutpage/Moderteck';


const About = () => {
  return (
    <>
      <Heroes/>
      <Wework/>
      <Checkout/>

      <Ourteam/>
      <Corevalue/> 
      <Card1/>
      <Moderteck/>
      <Card/>
      
    </>
  )
}

export default About;