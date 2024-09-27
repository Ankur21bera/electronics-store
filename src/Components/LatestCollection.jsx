import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(()=> {
     setLatestProducts(products.slice(0,10));
    },[])
  return (
    <div className='my-10'>
       <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Step into the new season with our handpicked latest collection, designed to elevate your wardrobe. From casual chic to sophisticated elegance, each piece reflects the latest trends, crafted with premium materials for comfort and durability.</p>
       </div>

       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                latestProducts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))
            }
       </div>
    </div>
  )
}

export default LatestCollection
