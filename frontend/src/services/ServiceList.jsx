import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "calculate weather",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgUrl: guideImg,
    title: "best tour guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imgUrl: customizationImg,
    title: "customization",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

const ServiceList = () => {
  return (
    <>
    {
      servicesData.map((item, index)=> <Col lg='3' md='6' sm='12' className='mb-4' key={index}><ServiceCard item={item}></ServiceCard></Col>)
    }
    </>
  )
}

export default ServiceList
