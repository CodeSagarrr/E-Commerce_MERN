let images = [
    {
        "id": 1,
        "img":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtlR1wU4n2_R7KZzQtangwpzZTy_VsM1lRfw&s'
    },
    {
        "id": 2,
        "img":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGBidONWATInmcgHegYSqPDl9Bv0mikESUw&s'
    },
    {
        "id": 3,
        "img":'https://www.beyours.in/cdn/shop/files/knitshirt-desktop-banner.jpg?v=1692259606&width=1500'
    },
    {
        "id": 4,
        "img":'https://www.pegai.com/cdn/shop/collections/Bag_Collection_Banner_Washed_Edit_ebb17ae7-3af3-461c-85b1-4eea4c50318b.jpg?v=1668098423'
    }
]

export default images;


// import React, { useState, useEffect } from 'react';
// import Footer from '../Components/Footer';
// import axios from 'axios';
// import Cart from './Cart'; // import Cart component

// function Products() {
//   const [allProduct, setAllProduct] = useState([]);
//   const [cart, setCart] = useState([]); // initialize empty cart

//   useEffect(() => {
//     axios.get('https://fakestoreapi.com/products')
//       .then((res) => {
//         setAllProduct(res.data);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   const addToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]); // add product to cart
//   };

//   return (
//     <div>
//       <h1 className='text-4xl font-bold text-center mx-[7rem] my-10 '>All Products</h1>

//       <div className='md:grid md:grid-cols-4 w-full px-4  '>
//         {
//           allProduct.map((product, i) => (
//             <div key={i}>
//               <div className=' w-[84%]  border rounded-lg flex  md:flex-col flex-row  ml-11  mt-[30px] h-auto'>
//                 <img src={product.image} loading='lazy' className='md:w-[250px] w-[200px] h-[250px]  rounded-lg md:ml-[5rem] ml-[2rem]  mt-4' />

//                 <div className='my-4 mx-6 pl-[15px] text-xl'>
//                   <h1 className='font-bold my-4'>{product.title}</h1>
//                   <p className='font-medium'>prize :{product.price}</p>

//                   <div>
//                     <button className='w-[70%]  my-8 p-2 rounded-lg  text-xl font-semibold text-white bg-[#151515]' onClick={() => addToCart(product)}>Add To Cart</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))
//         }
//       </div>

//       <Cart cart={cart} /> {/* render Cart component */}
//       <Footer />
//     </div>
//   );
// }

// export default Products;