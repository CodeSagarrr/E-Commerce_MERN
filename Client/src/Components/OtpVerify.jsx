import React from 'react'



function OtpVerify() {
  return (
    <>
        <div className='w-full h-[100vh] bg-[#246b91] p-2'>
            <h1 className='text-4xl text-white font-bold text-center my-10'>OTP</h1>
            <div className='flex justify-center items-center flex-wrap'>
                <form className='md:w-[28vw] w-[80vw] h-[28vh] border rounded-3xl flex flex-col flex-wrap px-6 py-4'>
                    <label className='text-xl font-bold text-white mt-6'>Enter your OTP</label>
                    <input className='w-[100%] h-[18%]  rounded-md p-2 mt-4 outline-none' type='number' placeholder='OTP' name='text' required />
                    <button className='w-[100%] text-center py-2 rounded-md mt-4 bg-[#0f0f0f] text-white outline-none'><a href='/emailverify/otpverify/resetpassword'>Next</a></button>
                    <p className='text-xl font-semibold text-[#ffffff] my-2 text-center'>OTP sent your gmail !</p>
                </form>
            </div>
        </div>
    </>
  )
}

export default OtpVerify
