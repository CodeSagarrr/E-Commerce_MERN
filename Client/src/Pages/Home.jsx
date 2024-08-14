import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import ProductAbout from '../Components/ProductAbout'
import Footer from '../Components/Footer'
import ProductCard from '../Components/ProductCard'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


const Home = () => {
 const redirect = useNavigate()
 const  [user , setUser] = useState('');

  const getData = async() =>{
    try {
      const response = await axios.get('/user');
      console.log(response.data)
      setUser(response.data);
      if(response.ok){
       redirect('/')
      }
   } catch (error) {
     if(axios.isAxiosError(error)){
       redirect('/login');
     }
   }
  }


  useEffect(()=>{
    getData();
  },[])

  return (
    <div>
  
     <Banner/>
     <ProductAbout/>
     <ProductCard />
     <Footer/>
    </div>
  )
}

export default Home

// useEffect(() => {
//   axios.get('/user')
//     .then(res => {
//       setUser(res.data.user)
//       redirect('/')
//     })
//     .catch(err => console.log(err))
//     redirect('/login')
// }

// , [])