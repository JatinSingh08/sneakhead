import React from 'react'
import { Hero, Content, Sales, Brands } from '../../components'
import {popularsales, toprateslaes, highlight, sneaker } from './../../Data/data.js'
import { useData } from '../../context'

const Home = () => {
  const { trendingShoesHome, popularShoesHome } = useData();
  console.log({trendingShoesHome});
  console.log({popularShoesHome});
  return (
    <div className='flex flex-col gap-5'>
      <Hero />
      <Brands />
      <Sales 
      items={popularShoesHome}
      title={"Popular Shoes"}
      popular
      />
      <Content 
      contentData={highlight}
      isHighlight
      />
      <Sales 
      title={"Trending Shoes"}
      items={trendingShoesHome} 
      />
      <Content 
      contentData={sneaker}
      />
      
    </div>
  )
}

export default Home
