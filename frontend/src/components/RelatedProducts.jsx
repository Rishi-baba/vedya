import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProducts = ({category, subCategory }) => {

  const { products, currency } = useContext(ShopContext);
  const [related, setRelated] = useState([]); 

  useEffect(() => {
    
    if(products.length > 0){
      let productCopy = products.slice();
      productCopy = productCopy.filter((item)=>category === item.category)
      productCopy = productCopy.filter((item)=>subCategory === item.subCategory)
      setRelated(productCopy);
    }
  }, [products]);
 
  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={"Related"} text2={"PRODUCT"}></Title>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
        {related.map((item, index) => (
          <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}></ProductItem>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts