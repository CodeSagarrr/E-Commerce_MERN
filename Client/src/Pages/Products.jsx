import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'

import axios from 'axios'




function Products({addToCart}) {

  const [allProduct, setAllProduct] = useState([])
 



  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setAllProduct(res.data)
      })
      .catch(err => console.error(err))
  })


 
   

  return (
    <>
    <div>
      <h1 className='text-4xl font-bold text-center mx-[7rem] my-10 '>All Products</h1>

      <div className='md:grid md:grid-cols-4 w-full px-4  '>

        {
          allProduct.map((product, i) => (
            <>

              <div key={i}>
                <div className=' w-[84%]  border rounded-lg flex  md:flex-col flex-row  ml-11  mt-[30px] h-auto' >
                  <img src={product.image} loading='lazy' className='md:w-[250px] w-[200px] h-[250px]  rounded-lg md:ml-[5rem] ml-[2rem]  mt-4' />

                  <div className='my-4 mx-6 pl-[15px] text-xl'>
                    <h1 className='font-bold my-4'>{product.title}</h1>
                    <p className='font-medium'>prize :{product.price}</p>

                    <div>
                      <button className='w-[70%]  my-8 p-2 rounded-lg  text-xl font-semibold text-white bg-[#151515]' onClick={()=>addToCart(product)}>Add To Cart</button>
                    </div>
                  </div>
                </div>
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
