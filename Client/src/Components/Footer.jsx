import React from 'react'
import { FaInstagramSquare, FaFacebook, FaGithubSquare, FaComment, FaLock } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div>
        <div className='flex sm:flex-row flex-col p-4 bg-[#151515] w-full text-white mt-10 rounded-t-lg'>
          <div className='basis-[40%] sm:ml-20 ml-3  mt-16'>
            <span className='text-5xl'><FaComment /></span>
            <p className='sm:max-w-[60%] my-6 font-semibold max-w-[98%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, atque tenetur. Accusantium quibusdam totam amet eius corporis mollitia cumque excepturi
              <br /> suscipit voluptate fuga! Iusto consequatur nulla est itaque sint sunt.</p>

            <h1 className='text-2xl font-semibold'>Connect With Us</h1>
            <div className='my-6'>
              <p className='font-semibold'><MdCall className='my-2 text-xl' /> +91 8080798926</p>
              <p className='font-semibold'><IoMdMail className='my-2 text-xl' /> Sagarv0987@gmail.com</p>
            </div>
            <div>
              <p className='font-semibold '><FaLock className='my-2 text-xl' />Secure Online Payments</p>
            </div>
          </div>

          <div className=' flex justify-evenly sm:ml-20 '>
            <div className='sm:mt-20 mt-8'>
              <h1 className='text-2xl font-bold'>Quick Links</h1>
              <ul className='flex flex-col gap-4 mt-4 '>
                <li><a href="/">Home</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href="/products">Products</a></li>
              </ul>
            </div>

            <div className='sm:ml-20 ml-4 sm:mt-[5rem] mt-[2rem]'>
              <h1 className='text-2xl font-bold'> Categories</h1>
              <div className='flex flex-col gap-4 mt-4'>
                <p>Cloths</p>
                <p>Footwere</p>
                <p>Hand Bags</p>
                <p>Jwellary</p>
                <p>Belt</p>
              </div>
            </div>

            <div className='flex flex-col sm:mt-20 mt-8 sm:ml-20 ml-6  text-4xl gap-4'>
              <a href='https://www.facebook.com/' className='px-1'><FaFacebook /></a>
              <a href='https://www.instagram.com/' className='px-1'><FaInstagramSquare /></a>
              <a href='https://www.twitter.com/' className='px-1'><FaSquareXTwitter /></a>
              <a href="/" className='px-1'><FaGithubSquare /></a>
            </div>

          </div>

        </div>
        <div>
          <p className='text-center text-white pb-3 font-semibold bg-[#151515]'>Copyright © 2024 Sagar. All Rights Reserved.</p>
        </div>
      </div>

    </>
  )
}

export default Footer
