import React, { use, useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { ShopContext } from '../context/ShopContext';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [Showfilter,setShowfilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [Category, setCategory] = useState([]);
  const [Subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState('relevent');

  const toggleCategory = (event)=>{

    if(Category.includes(event.target.value)){
      setCategory(prev=>prev.filter(item=> item !== event.target.value))
    }
    else{
      setCategory(prev=> [...prev, event.target.value])
    }
  }

  const toggleSubcategory = (event)=>{

    if(Subcategory.includes(event.target.value)){ 

      setSubcategory(prev=>prev.filter(item=> item !== event.target.value))
    }
    else{
      setSubcategory(prev=> [...prev, event.target.value])
    }
  }



  const applyfilter = ()=>{

    let productsCopy = products.slice();

    if (showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if(Category.length > 0){
      productsCopy = productsCopy.filter(item=> Category.includes(item.category));
    }
    if(Subcategory.length > 0){
      productsCopy = productsCopy.filter(item=> Subcategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);
  }
  useEffect(() => {
    applyfilter();
  },[Category,Subcategory,search,showSearch]);

  const setProduct = ()=>{

    let fpCopy = filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=> a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=> b.price - a.price));
        break;
      default:
        applyfilter();
        break;
    }
  }
  useEffect(() => {
    setProduct();
  },[sortType]);

  return (

    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowfilter(!Showfilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTER
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${Showfilter ? 'rotate-90' : ''}`} alt="" />
        </p>
        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${Showfilter ? '' : 'hidden'} sm:block`}>

          <p className='mb-3 text-sm font-medium'>CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory}/>Kids
            </p>  
          </div>
        </div>
      {/* subcategory filter */}
      <div className={`border border-gray-300 pl-5 py-3 my-5 ${Showfilter ? '' : 'hidden'} sm:block`}>

          <p className='mb-3 text-sm font-medium'>SUBCATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubcategory}/>Topwear
            </p>
            <p className='flex gap'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubcategory}/>Bottomwear  
            </p>
            <p className='flex gap'>
              <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSubcategory}/>Winterwear
            </p>  
          </div>
        </div>
      </div>


      {/* right side content */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'Collections'} ></Title>
          {/* Product sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
            <option value="relevent">Sort by Relevance</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
        {/* map products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}>

              </ProductItem>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collection