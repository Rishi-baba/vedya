import React, { use, useContext, useEffect, useState } from 'react'
import Title from './Title'
import ProductItem from './ProductItem'
import { ShopContext } from '../context/ShopContext'


const Bestseller = () => {
  const {products} = useContext(ShopContext)
  const [bestseller,setbestseller] = useState([])


  useEffect(()=>{
    const bestseller = products.filter((item)=> (item.bestseller));
    setbestseller(bestseller);
  },[products])

  return (
    <div className='my-10'>
      <div className='text-center py-8  text-3xl'>
        <Title text1={'Best'} text2={'Seller'} ></Title>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>Discover our top-rated medical instruments, trusted by healthcare professionals for their quality and reliability.</p>
      </div>
      {/* rendering product */}

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
        bestseller.map((item,index)=>(
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))
        } 
      </div>
    </div>
  )
}

export default Bestseller