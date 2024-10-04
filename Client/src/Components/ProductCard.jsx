import React, { useEffect, useState } from 'react'
import axios from 'axios'




const ProductCard = () => {

    const [productData, setProductData] = useState([]);

    const [cartData, setCartData] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=8')
            .then((res) => {
                setProductData(res.data)
            })
            .catch(err => console.log(err))
    },[productData])

   



    return (
        <>
            <h1 className='text-5xl font-bold text-left sm:mx-[7rem] mx-[7rem] my-4 '>Products</h1>

            <div className='sm:grid md:grid-cols-3 w-full px-4  '>

                {
                    productData.map((product, i) => (
                        <>

                            <div key={i}>
                                <div className=' cursor-pointer sm:w-[95%] w-[90%]  border rounded-lg flex  sm:flex-col flex-col  sm:ml-2.5  ml-4 mt-[30px] h-auto' >
                                    <img src={product.image} loading='lazy' className='sm:w-[250px] w-[200px] h-[250px]  rounded-lg sm:ml-[4rem] ml-[3rem]  mt-4' />

                                    <div className='my-4 sm:mx-6 mx-10 pl-[15px] text-xl'>
                                        <h1 className='font-bold my-4'>{product.title}</h1>
                                        <p className='font-medium'>prize :{product.price}</p>

                                        <div>
                                            <button className='w-[70%]  my-8 p-2 rounded-lg  text-xl font-semibold text-white bg-[#151515]' >Add To Cart</button>
                                        </div>

                    

                                    </div>
                                </div>
                            </div>


                        </>

                    ))
                }

            </div>
            <button className='mt-6 sm:ml-[33rem] font-semibold bg-[#151515] text-white p-2 rounded-lg sm:w-[18%] w-[33%] ml-[7rem]'><a href="/products">More</a></button>


        </>
    )
}

export default ProductCard

