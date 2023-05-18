import React from 'react'
import { Hero, Content, Sales } from '../../components'
import {popularsales, toprateslaes, highlight, sneaker } from './../../Data/data.js'

const Home = () => {
  return (
    <div>
      <Hero />
      <Sales 
      sales={popularsales}
      popular
      />
      <Content 
      contentData={highlight}
      isHighlight
      />
      <Sales sales={toprateslaes} />
      <Content 
      contentData={sneaker}
      />
      
    </div>
  )
}

export default Home
