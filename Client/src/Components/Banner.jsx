import React, { useEffect, useState } from 'react'
import '../App.css'
import image from '../Data/BannerData'
import { FaChevronCircleLeft ,  FaChevronCircleRight} from "react-icons/fa";
const Banner = () => {
    const [banner , setBanner] = useState(0)

    const nextBanner = () => {
       setBanner(banner === image.length-1 ? 0 : banner + 1)
    }

    const prevBanner = () => {
        setBanner(banner === 0 ? image.length-1:banner-1)
    }

    useEffect(()=>{
        const interval = setInterval(() => {
            nextBanner();
        },2000)
        return () => clearInterval(interval)
    },[banner])
  return (
    <>
     {
        image.map((item,index) =>(
            <div key={index} className={ `${banner === index ? 'block':'hidden'}`} >
                <div className='sm:w-[80%] m-auto mt-10 rounded-lg sm:h-[80vh] h-[50vh] bg-cover bg-center w-[90%]' style={{backgroundImage:`url(${item.img})`}} ></div>
            </div>

        ))
     }
     <div className='flex justify-between  w-[76%] absolute sm:top-[50%] top-[37%] left-[12%] '>
     <FaChevronCircleLeft onClick={prevBanner} className='text-4xl cursor-pointer'/>
     <FaChevronCircleRight onClick={nextBanner} className='text-4xl cursor-pointer' />
     </div>
    </>
  )
}

export default Banner

