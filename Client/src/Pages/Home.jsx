import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import ProductAbout from '../Components/ProductAbout'
import Footer from '../Components/Footer'
import ProductCard from '../Components/ProductCard'
import axios from 'axios'


const Home = () => {
 const  [user , setUser] = useState([]);


  useEffect(()=>{
    const getData = async() =>{
      try {
        const response = await axios.get('/user')
        setUser(response.data);
        if(response.ok){
         window.location.href='/product'
        }
     } catch (error) {
       if(axios.isAxiosError(error)){
         redirect('/login');
       }
     }
    }
  
getData()  
  })

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