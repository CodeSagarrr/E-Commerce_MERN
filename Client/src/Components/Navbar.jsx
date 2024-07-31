import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = ({productCart}) => {
  const [openMenu, setOpenMenu] = useState(false);
 

  
  return (
    <>
      <div className='flex justify-between px-4 py-5 border  ' >
        <div className='md:ml-60 ml-10'>
          <h1 className='text-4xl font-bold'>Store</h1>
        </div>
        <div className='flex'>
          <div className='flex items-center justify-center text-2xl md:hidden mr-10 cursor-pointer' onClick={() => setOpenMenu(!openMenu)}><GiHamburgerMenu /></div>
          <ul className='md:flex mr-20 text-[22px] font-bold my-2 hidden'>
            <li className='px-6'><Link to="/">Home</Link></li>
            <li className='px-6'><Link to="/about">About us</Link></li>
            <li className='px-6'><Link to='/products'>Products</Link></li>
            <li className='px-6'><Link to="/signup"><span className='text-yellow-400'>Sign up</span></Link></li>
            <li className='px-4'><a href="/"><span className='text-yellow-400'>Logout</span></a></li>

          </ul>
          <span className='md:mr-40 mt-2 mr-10'><Link to='/cart'><FaShoppingCart className='text-2xl cursor-pointer'/></Link><i className='absolute top-1 text-xl font-semibold right-[9.5%]'>{productCart.length }</i></span>

          {openMenu ? <div className='flex'>
            <ul className='md:flex  text-[22px] font-bold absolute top-0 right-0 w-[34%] h-full bg-[#151515] text-white z-10'>
              <li className='px-6 relative left-10 top-52 py-8'><Link to="/">Home</Link></li>
              <li className='px-6 relative left-10 top-52 py-8'><Link to="/about">About us</Link></li>
              <li className='px-6 relative left-10 top-52 py-8'><Link to='/products'>Products</Link></li>
              <li className='px-6 relative left-10 top-52 py-8'><Link to="/signup"><span >Sign in</span></Link></li>
              <li className='px-6 relative left-10 top-52 py-8'><Link to="/"><span >Logout</span></Link></li>
              <div className='absolute top-0 right-0 mx-8 my-4 text-2xl cursor-pointer ' onClick={()=>setOpenMenu(!openMenu)}><RxCross1 /></div>
            </ul>


          </div> : ''}

        </div>
      </div>

    </>
  )
}

export default Navbar



