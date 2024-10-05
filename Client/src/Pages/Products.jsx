import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'

import axios from 'axios'
import { Link } from 'react-router-dom'




function Products() {

  const [allProduct, setAllProduct] = useState([])




  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setAllProduct(res.data)
      })
      .catch(err => console.error(err))
  }, [allProduct])





  return (
    <>
      <div>
        <h1 className='text-4xl font-bold text-center sm:mx-[7rem] mx-[5rem] my-10 '>All Products</h1>

        <div className='sm:grid sm:grid-cols-3 w-full '>

          {
            allProduct.map((product, i) => (
              <>

                <div key={i}>
                  <Link to={`/products/${product.id}`}><div className=' sm:w-[96%] w-[96%]  border rounded-lg flex  sm:flex-col flex-col  sm:ml-3 ml-1.5  mt-[30px] h-auto cursor-pointer' >
                    <img src={product.image} loading='lazy' className='sm:w-[250px] w-[200px] h-[250px]  rounded-lg sm:ml-[4rem] ml-[5rem]  mt-4' />

                    <div className='my-4 sm:mx-6 mx-10  pl-[15px] text-xl'>
                      <h1 className='font-bold my-4'>{product.title}</h1>
                      <p className='font-medium'>prize :{product.price}</p>

                      <div>
                        <button className='w-[70%]  my-8 p-2 rounded-lg  text-xl font-semibold text-white bg-[#151515]' >Add To Cart</button>
                      </div>
                    </div>
                  </div></Link>
                </div>


              </>


            ))
          }

        </div>
        <Footer />
      </div>
    </>
  )
}

export default Products
