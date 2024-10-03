
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import SignUp from './Pages/SignUp'
import { useEffect, useState } from 'react'
import Login from './Pages/Login.jsx'
import CartProduct from './Pages/CartProduct'
import ProductDetails from './Pages/ProductDetails'
import EmailVerify from './Components/EmailVerify'
import OtpVerify from './Components/OtpVerify'
import ResetPass from './Components/ResetPass'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';




function App() {


  const [productCart, setProductCart] = useState([]);
  const [products , setProducts] = useState([]);

  useEffect(()=>{
    const saveProduct = localStorage.getItem('products')
    if(saveProduct){
      setProducts(JSON.parse(saveProduct))
    }
  },[])
  useEffect(()=>{
    localStorage.setItem('products',JSON.stringify(products))
  },[products])

  const addToCart = (productItem) => {
      setProducts([...products, productItem])
      toast.success('product added')
      setProductCart([...productCart, {...productItem , quantity:1}]);
      
  }



  return (
    <>

      <Router>
          <Navbar productCart={productCart} />
          <ToastContainer />
          <Routes>
            <Route exact path='/' element={<Home  />} />
            <Route exact path='/about' element={<><About /></>} />
            <Route exact path='/products' element={<><Products addToCart={addToCart} /></>} />
            <Route  exact path='/products/:id' element={<><ProductDetails addToCart={addToCart} /></>} />
            <Route exact path='/signup' element={<><SignUp /></>} />
            <Route exact path='/login' element={<><Login /></>} />
            <Route exact path='/cart' element={<><CartProduct productCart={productCart} /></>} />
            <Route exact path='/emailverify' element={<><EmailVerify/></>} />
            <Route exact path='/emailverify/otpverify' element={<>< OtpVerify/></>} />
            <Route exact path='/emailverify/otpverify/resetpassword' element={<><ResetPass/></>} />
          </Routes>
      </Router>


    </>
  )
}

export default App
