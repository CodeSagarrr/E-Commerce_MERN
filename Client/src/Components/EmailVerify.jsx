import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EmailVerify() {
    const [emailVerify , setEmailVerify] =useState({email:''})

    const handleChange = (e) => {
        setEmailVerify({...emailVerify,[e.target.name]: e.target.value});
    };

    const handleSubmitEmail = async(e) =>{
        e.preventDefault();
        try {
            const emailRes = await axios.post('/user/emailVerify',emailVerify);
            if(emailRes.data.msg === 'OTP sent successfully'){
                toast.success(emailRes.data.msg)
                setEmailVerify({email:''})
                setTimeout(()=>{
                    window.location.href = '/emailverify/otpverify'
                }, 2000)
            }else{
                toast.error(emailRes.data.msg)
                console.log(error)
            }
           
        } catch (error) {
            if(axios.isAxiosError(error)){
                toast.error('Error occured')
                console.log(error)
            }
        }
    }
    return (
        <div className='w-full h-[100vh] bg-[#246b91] p-2'>
            <h1 className='text-4xl text-white font-bold text-center my-10'>Email Verify</h1>
            <div className='flex justify-center items-center flex-wrap '>
                <form className='md:w-[28vw] w-[80vw] h-[28vh] border rounded-3xl flex flex-col flex-wrap py-4 px-6'>
                    <label className='text-xl font-bold text-white mt-6'>Enter your Email</label>
                    <input className='w-[100%] h-[18%]  rounded-md p-2 mt-4 outline-none' type='email' placeholder='Email' name='email' required onChange={handleChange}/>
                    <button className='w-[100%] text-center py-2 rounded-md mt-4 bg-[#0f0f0f] text-white outline-none' onClick={handleSubmitEmail}>Next</button>
                </form>
                <ToastContainer/>
            </div>
        </div>
    )
}

export default EmailVerify
