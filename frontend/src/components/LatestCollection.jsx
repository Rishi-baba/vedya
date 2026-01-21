import React, { use, useContext, useEffect, useState } from 'react'

import Title from './Title'
import ProductItem from './ProductItem'
import { ShopContext } from '../context/ShopContext'

const LatestCollection = () => {

    const {products} = useContext(ShopContext)
    const [latestProduct, setLatestProduct] = useState([])

    useEffect(() => {
        const latest = products.slice(0,10);
        setLatestProduct(latest);
    }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center py-8  text-3xl'>
        <Title text1="Latest" text2="Necessity"></Title>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>Access reliable medical instruments on rent quality checked, affordable, and delivered when you need them most</p>
      </div>
      

      {/* rendering product */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProduct.map((item,index) => (
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
        ))}
      </div> 
    </div>
  )
}

export default LatestCollection