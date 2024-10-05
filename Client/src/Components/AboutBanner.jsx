import React from 'react'
import AboutProduct from '../Data/AboutProduct'

function AboutBanner() {
    return (
        <>
            <div className='w-[98%] mx-auto mt-4 sm:h-[85vh] h-[50vh] rounded-2xl bg-cover bg-center' style={{ backgroundImage: `url(https://pathedits.com/cdn/shop/articles/image16.jpg?v=1604514116)` }}>
            </div>
            <div className='w-[98%] sm:h-[85vh] h-[50vh] mx-auto sm:mt-3 mt-1 rounded-2xl bg-[#0e0e0e98] absolute top-24 sm:left-5 left-2 '>
                <div>
                    <h1 className='text-6xl font-bold text-white text-center sm:mt-[18rem] mt-[8rem]'>About Us</h1>
                    <p className='text-xl text-white mt-4 font-semibold text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ex quaerat. Eius eum, </p>
                </div>
            </div>
        
        
        <AboutProduct/>

        </>
    )
}

export default AboutBanner
