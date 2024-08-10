import React from 'react'

function EmailVerify() {
    return (
        <div className='w-full h-[100vh] bg-[#246b91] p-2'>
            <h1 className='text-4xl text-white font-bold text-center my-10'>Email Verify</h1>
            <div className='flex justify-center items-center flex-wrap '>
                <form className='md:w-[28vw] w-[80vw] h-[28vh] border rounded-3xl flex flex-col flex-wrap py-4 px-6'>
                    <label className='text-xl font-bold text-white mt-6'>Enter your Email</label>
                    <input className='w-[100%] h-[18%]  rounded-md p-2 mt-4 outline-none' type='text' placeholder='Email' name='email' required/>
                    <button className='w-[100%] text-center py-2 rounded-md mt-4 bg-[#0f0f0f] text-white outline-none'><a href='//emailverify/otpverify'>Next</a></button>
                </form>
            </div>
        </div>
    )
}

export default EmailVerify
