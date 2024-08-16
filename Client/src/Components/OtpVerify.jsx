import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function OtpVerify() {
  const [ userOtp ,setUserOtp] = useState({otp:''});

  const handleOtpChange = (e)=>{
    setUserOtp({...userOtp,[e.target.name]:e.target.value});
  }

  const handleOtpBtn = async(e)=>{
    e.preventDefault();
    try {
     const otpRes = await axios.post('/user/otpverify',userOtp);
     console.log(otpRes.data.msg)
      if(otpRes.data.msg.trim() === 'OTP are verified'){
        toast.success(otpRes.data.msg)
        setUserOtp({otp:''})
        setTimeout(()=>{
          window.location.href = '/emailverify/otpverify/resetpassword'
        }, 3000)
      } else {
        toast.error(otpRes.data.msg)
      }
  
    } catch (error) {
      if(axios.isAxiosError(error)) {
        toast.error('Error occured',error.message);
        console.log(error)
      }
    }
  }

  return (
    <>
      <div className='w-full h-[100vh] bg-[#246b91] p-2'>
        <h1 className='text-4xl text-white font-bold text-center my-10'>OTP</h1>
        <div className='flex justify-center items-center flex-wrap'>
          <form className='md:w-[28vw] w-[80vw] h-[28vh] border rounded-3xl flex flex-col flex-wrap px-6 py-4'>
            <label className='text-xl font-bold text-white mt-6'>Enter your OTP</label>
            <input className='w-[100%] h-[18%]  rounded-md p-2 mt-4 outline-none' type='text' name='otp'  placeholder='OTP'
            onChange={handleOtpChange}/>
            <button className='w-[100%] text-center py-2 rounded-md mt-4 bg-[#0f0f0f] text-white outline-none'
             onClick={handleOtpBtn} >Next</button>
            <p className='text-xl font-semibold text-[#ffffff] my-2 text-center md:block hidden'>OTP sent your gmail !</p>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default OtpVerify
