import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link} from 'react-router-dom'
const SignUp = () => {

  const [userData, setUserData] = useState({ username: '', email: '', password: '', })



  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const handleSign = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/user/signup', userData)
      if (res.data.msg === 'user sign up successfully') {
        toast.success(res.data.msg)
        setUserData({ username: '', email: '', password: '', })
      }else {
        toast.error(res.data.msg)
      }


    } catch (error) {
      console.log(error)
    }
  }



  return (
    <>
      <div className='flex flex-wrap w-full justify-center items-center h-[90vh] bg-[#246b91]'>
        <div className='sm:w-[48%] w-[100%] sm:mx-10 mx-2 h-[65vh] border my-10 rounded-3xl '>
          <h1 className='text-4xl font-bold mt-8 text-center text-white'>Sign Up</h1>
          <form className='flex flex-col justify-center h-[70%] sm:w-[90%] w-[100%] sm:mx-12 mx-4 sm:my-4 my-1 '>
            <label className='font-bold text-xl mt-5 mb-1 text-white'>Username</label>
            <input className='w-[90%] h-[10%]  rounded-md p-2 outline-none' type='text' placeholder='Name' name='username' onChange={handleChange} />
            <label className='font-bold text-xl mt-5 mb-1 text-white'>Email</label>
            <input className='w-[90%] h-[10%]  rounded-md p-2  outline-none' type='text' placeholder='Email' name='email' onChange={handleChange} />
            <label className='font-bold text-xl mt-5 mb-1 text-white'>Password</label>
            <input className='w-[90%] h-[10%]  rounded-md p-2  outline-none' type='password' placeholder='Password' name='password' onChange={handleChange} />
            <button className='w-[90%] h-[10%] rounded-md mt-10 bg-[#0f0f0f] text-white text20old outline-none' onClick={handleSign}>Sign Up</button>
          </form>
          <ToastContainer />
          <div className=' flex w-[97%] my-4 sm:ml-24 ml-8'>
           
            <p className='text-white font-bold sm:text-xl text-[18px]'>Already have an account ?</p>
            <Link to="/login"> <p className='text-white font-bold text-xl ml-2 cursor-pointer'>Login</p></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
