import React, { useEffect, useState } from 'react'
import axios from 'axios'




const ProductCard = ({ addToCart }) => {

    const [productData, setProductData] = useState([]);

    const [cartData, setCartData] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=8')
            .then((res) => {
                setProductData(res.data)
            })
            .catch(err => console.log(err))
    })

   



    return (
        <>
            <h1 className='text-5xl font-bold text-left mx-[7rem] my-4 '>Products</h1>

            <div className='md:grid md:grid-cols-4 w-full px-4  '>

                {
                    productData.map((product, i) => (
                        <>

                            <div key={i}>
                                <div className=' w-[84%]  border rounded-lg flex  md:flex-col flex-row  ml-11  mt-[30px] h-auto' >
                                    <img src={product.image} loading='lazy' className='md:w-[250px] w-[200px] h-[250px]  rounded-lg md:ml-[5rem] ml-[2rem]  mt-4' />

                                    <div className='my-4 mx-6 pl-[15px] text-xl'>
                                        <h1 className='font-bold my-4'>{product.title}</h1>
                                        <p className='font-medium'>prize :{product.price}</p>

                                        <div>
                                            <button className='w-[70%]  my-8 p-2 rounded-lg  text-xl font-semibold text-white bg-[#151515]' onClick={() => addToCart(product)} >Add To Cart</button>
                                        </div>

                    

                                    </div>
                                </div>
                            </div>


                        </>

                    ))
                }

                <button className='mt-6 md:ml-[54rem] font-semibold bg-[#151515] text-white p-2 rounded-lg w-[30%] ml-[13rem]'><a href="/products">More</a></button>



            </div>



        </>
    )
}

export default ProductCard

