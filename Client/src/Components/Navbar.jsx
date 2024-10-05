import axios from 'axios';
import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = ({ productCart }) => {
  const redirect = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const handleLogOut = async () => {
    try {
      const response = await axios.get('/user/logout')
      toast.success(response.data.msg)
      redirect('/login')
    } catch (error) {
      if (axios.isAxiosError(error)) {
       console.log(error)
      }
    }
  }

  return (
    <>
      <div className='flex justify-between px-4 py-5 border  ' >
        <div className='sm:ml-16 ml-6'>
          <h1 className='text-4xl font-bold'>Store</h1>
        </div>
        <div className='flex'>
          <div className='flex items-center justify-center text-2xl md:hidden mr-8 cursor-pointer' onClick={() => setOpenMenu(!openMenu)}><GiHamburgerMenu /></div>
          <ul className='md:flex mr-4 text-[22px] font-bold my-2 hidden'>
            <li className='px-6'><Link to="/">Home</Link></li>
            <li className='px-6'><Link to="/about">About us</Link></li>
            <li className='px-6'><Link to='/products'>Products</Link></li>
            <li className='px-6'><Link to="/login"><span className='text-yellow-400'>Sign in</span></Link></li>
            <li className='px-4'><span className='text-yellow-400 cursor-pointer' onClick={handleLogOut}>Logout</span></li>

          </ul>
          <span className='sm:mr-4 mt-2 mr-3'><Link to='/cart'><FaShoppingCart className='text-2xl cursor-pointer' /></Link><i className='absolute top-1 text-xl font-semibold sm:right-[2.5%] right-[6.5%]'>{productCart.length}</i></span>

          {openMenu ? <div className='flex'>
            <ul className='md:flex  text-[22px] font-bold absolute top-0 right-0 w-[50%] h-full bg-[#151515] text-white z-10'>
              <li className='pl-2 relative left-10 top-52 py-8'><Link to="/">Home</Link></li>
              <li className='pl-2 relative left-10 top-52 py-8'><Link to="/about">About us</Link></li>
              <li className='pl-2 relative left-10 top-52 py-8'><Link to='/products'>Products</Link></li>
              <li className='pl-2 relative left-10 top-52 py-8'><Link to="/login"><span >Sign in</span></Link></li>
              <li className='pl-2 relative left-10 top-52 py-8'> <span >Logout</span></li>
              <div className='absolute top-0 right-0 mx-8 my-4 text-2xl cursor-pointer ' onClick={() => setOpenMenu(!openMenu)}><RxCross1 /></div>
            </ul>


          </div> : ''}

        </div>
      </div>

    </>
  )
}

export default Navbar



