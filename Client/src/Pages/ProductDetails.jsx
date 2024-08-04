import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetails({addToCart}) {
    const {id} = useParams();
    const [allProduct, setAllProduct] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setAllProduct(res.data)
            })
            .catch(err => console.error(err))
    },[allProduct])

    const product = allProduct.find(product => product.id === parseInt(id));

    if (!product) {
        return ;
    }

    return (
        <>

            <div className=' flex justify-center items-center'>
                <div className=' md:w-[25%] w-[80%]  border rounded-lg flex flex-col  md:ml-11 ml-2 mt-[60px] h-auto' >
                    <img src={product.image} loading='lazy' className='md:w-[250px] w-[200px] h-[250px]  rounded-lg md:ml-[6rem] ml-[7rem]  mt-4' />

                    <div className='my-4 mx-6 pl-[15px] text-xl'>
                        <h1 className='font-bold my-4'>{product.title}</h1>
                        <p className='font-medium'>prize :{product.price}</p>

                        <div>
                            <button className='w-[70%]  my-8 p-2 ml-10 rounded-lg  text-xl font-semibold text-white bg-[#151515]' onClick={() => addToCart(product)} >Add To Cart</button>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default ProductDetails
