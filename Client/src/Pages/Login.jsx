import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link} from 'react-router-dom'

function Login() {
  const [userLogin, setUserLogin] = useState({ username: '', password: '', })

  const handleLoginChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userRes = await axios.post('/user/login', userLogin)
      if (userRes.data.msg === 'user are login') {
        toast.success(userRes.data.msg)
        setUserLogin({ username: '', password: '', })
      } else {
        toast.error(userRes.data.msg)
      }
    } catch (error) {
      toast.error(error.data.msg)
    }
  }




  return (
    <>
      <div className='flex w-full justify-center items-center h-[90vh] bg-[#246b91]'>
        <div className='sm:w-[32%] w-[100%] sm:mx-10 mx-2 h-[65vh] border  rounded-3xl '>
          <h1 className='text-4xl font-bold mt-10 text-center text-white'>Login</h1>
          <form className='flex flex-col justify-center h-[66%] sm:w-[90%] w-[100%] sm:mx-12 mx-4  '>
            <label className='font-bold text-xl mt-5 mb-1 text-white'>Username</label>
            <input className='w-[90%] h-[10%]  rounded-md p-2 outline-none' type='text' placeholder='Name' name='username' onChange={handleLoginChange}  required />
            <label className='font-bold text-xl mt-5 mb-1 text-white'>Password</label>
            <input className='w-[90%] h-[10%]  rounded-md p-2  outline-none' type='password' placeholder='Password' name='password' onChange={handleLoginChange} required />
            <Link to='/emailVerify' className='text-white font-bold text-xl my-3 '>Forgot Password ?</Link>
            <button className='w-[90%] h-[10%] rounded-md mt-2 bg-[#0f0f0f] text-white text20old outline-none' onClick={handleLogin} required>Login</button>

          </form>
          <ToastContainer />
          <div className=' flex w-full  sm:ml-36 ml-12'>
            <p className='text-white font-bold md:text-xl text-[18px]'>Create an account !</p> 
            <Link to='/signup'><p className='text-white font-bold text-xl ml-2'>Sign Up</p></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
