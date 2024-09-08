import React from 'react'
import TopSlider from '../components/TopSlider'
import all_products from '../assets/all_products'
import Banner from '../components/Banner'
import Card from '../components/Card'
import shoppingData from '../assets/all-data'


export default function() {
  return (
    <div className='py-7 px-2 lg:px-20 md:px-10  z-1 flex flex-col'>
       
       <TopSlider/>
        <Banner/>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full py-7 gap-5">
         {
          shoppingData?.map((item)=>(
             <div key={item.id} className="flex justify-center">
               <Card item={item}/>
             </div>
          ))
         }
        </div>
    </div>
  )
}
