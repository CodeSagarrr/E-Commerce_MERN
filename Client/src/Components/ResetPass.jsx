import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPass() {
  const [password, setPassword] = useState({ password: '' });
  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value })
  }

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/user/resetpassword', password)
      if (res.data.msg === 'password reset successfully') {
        toast.success(res.data.msg)
        setPassword({ password: '' })
        setTimeout(() => {
          window.location.href = '/login'
        }, 2000)
      } else {
        toast.error(res.data.msg)
      }
    } catch (error) {
      console.error(error)
    }

  }
  return (
    <div className='w-full h-[100vh] bg-[#246b91] p-2'>
      <h1 className='text-4xl text-white font-bold text-center my-10'>Reset Password</h1>
      <div className='flex justify-center items-center flex-wrap'>
        <form className='md:w-[28vw] w-[80vw] h-[28vh] border rounded-3xl flex flex-col flex-wrap px-6 py-4'>
          <label className='text-xl font-bold text-white mt-6'> Reset Password</label>
          <input className='w-[100%] h-[18%]  rounded-md p-2 mt-4 outline-none' type='text' placeholder='Reset Password' name='password' required onChange={handlePasswordChange} />
          <button className='w-[100%] text-center py-2 rounded-md mt-4 bg-[#0f0f0f] text-white outline-none'
            onClick={handleResetPassword}>Reset</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default ResetPass
