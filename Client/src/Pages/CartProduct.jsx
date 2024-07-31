import React, { useEffect, useState } from 'react'
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

function CartProduct({ productCart }) {
  const [cartData, setCartData] = useState([])


  useEffect(() => {
    setCartData(productCart)
  }, [productCart])

  const newCartMinus = (i) => {
    const newCart = cartData.map((items, index) => {
      return i === index ? { ...items, quantity: items.quantity > 0 ? items.quantity - 1 : 0 } : items
    })
    setCartData(newCart)
  }

  const newCartPlus = (i) => {
    const newCart = cartData.map((items, index) => {
      return i === index ? { ...items, quantity: items.quantity + 1 } : items
    })
    setCartData(newCart)
  }
const deleteCart = (i) => {
  const newCart = cartData.filter((items, index) => i !== index)
  setCartData(newCart)
  }


  return (
    <>

      <div>
        <h1 className='text-3xl font-bold text-center my-10'>Cart Product</h1>
        <div className=' w-full pl-10 pt-10'>
          {
            cartData.map((product, i) => (
              <div key={i} className='md:flex md:ml-[10rem] ml-0 md:gap-x-3   mb-16'>
                <div className='mb-8 md:ml-0 ml-[14rem]'>
                  <img src={product.image} className='w-20 h-20' />
                </div>
                <div className='flex md:ml-2 ml-6 items-center '>
                  <h1 className='md:text-2xl text-xl font-bold mx-6'>{product.title}</h1>
                  <FaCircleMinus className='cursor-pointer text-xl'
                    onClick={() => newCartMinus(i)}
                  />
                  <p className='text-xl font-semibold mx-2'>{product.quantity}</p>
                  <FaCirclePlus className='cursor-pointer text-xl' onClick={() => newCartPlus(i)} />
                  <p className='text-xl font-bold mx-6'>Rs. {product.price * product.quantity}</p>
                </div>
                <div className='md:mt-10 mt-10  md:ml-0 ml-[14rem]' onClick={()=>deleteCart(i)}>
                  <button className='text-3xl ml-10 text-[#c93030]' ><MdDelete /></button>
                </div>
              </div>
            ))
          }
        </div>
        <div className='my-10 flex justify-end md:mr-[20rem] mr-[18rem] text-2xl font-bold'>
          Total. {
            cartData.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0).toFixed(2)
          }
        </div>

      </div>


    </>

  )
}

export default CartProduct

{/* <div>
<h1 className='text-4xl font-bold text-center my-6' >CartProducts</h1>
<div className=' py-10 border mx-auto w-[85%] rounded-3xl flex flex-col '>
  {
    cartData.map((products, i) => (
      <>
        <div key={i} className='flex gap-x-3  mx-10 my-10 items-center max-w-[80%]'>
          <img src={products.image} width={88} />
          <h1 className='text-xl font-semibold mx-3'>{products.title}</h1>
          <FaCircleMinus className='text-2xl cursor-pointer'
            onClick={() => {
              const newCartMinus = cartData.map((item, index) => {
                return i === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
              })
              setCartData(newCartMinus)
            }}
          />
          <h1 className='text-2xl font-semibold  '>{products.quantity}</h1>
          <FaCirclePlus className='text-2xl cursor-pointer'
            onClick={() => {
              const newCartPlus = cartData.map((item, index) => {
                return i === index ? { ...item, quantity: item.quantity + 1 } : item
              })
              setCartData(newCartPlus)
            }} />
          <h1 className='text-xl font-semibold mx-3'> Rs.{products.price.toFixed(1) * products.quantity}</h1>


          <div className='ml-10'>
            <button onClick={() => {
              const newCart = cartData.filter((item, index) => {
                return i !== index
              })
              setCartData(newCart)
            }}
              className='text-3xl ml-10 text-[#c93030]'
            ><MdDelete /></button>
          </div>
          
            <button className='w-[8%] ml-10 p-2 rounded-lg  text-xl font-semibold text-white bg-[#151515]' >Buy</button>
      

        </div>
      </>
    ))
  }</div>


<div className='my-10 flex justify-end mr-40 text-2xl font-bold'>
  Total. {
    cartData.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0).toFixed(2)
  }
</div>

</div> */}