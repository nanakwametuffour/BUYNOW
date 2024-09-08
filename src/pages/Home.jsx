import React from 'react'
import TopSlider from '../components/TopSlider'
import all_products from '../assets/all_products'
import Banner from '../components/Banner'

export default function() {
  return (
    <div className='py-7 px-20 h-screen flex flex-col '>
       
       <TopSlider/>
        <Banner/>
    </div>
  )
}
