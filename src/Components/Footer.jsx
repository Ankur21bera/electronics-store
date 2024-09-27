import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <h3 className='text-[25px] text-red-500 font-bold'>Electronics-Store</h3>
            <p className='w-full md:w-2/3 text-gray-600 mt-2'>
            Step into the new season with our handpicked latest collection, designed to elevate your wardrobe. From casual chic to sophisticated elegance, each piece reflects the latest trends, crafted with premium materials for comfort and durability.
            </p>
        </div>
         <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
               <li>Home</li>
               <li>About us</li>
               <li>Delivery</li>
               <li>Privacy Policy</li>
            </ul>
         </div>

         <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>234567890</li>
                <li>Electronics-store@gmail.com</li>
            </ul>
         </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
