
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import SignUp from './Pages/SignUp'
import { useEffect, useState } from 'react'
import Login from './Pages/Login'
import CartProduct from './Pages/CartProduct'
import ProductDetails from './Pages/ProductDetails'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [serverData, setServerData] = useState([])


  useEffect(() => {
    axios.get('/user')
      .then((res) => {
        setServerData(res.data)
      })
      .catch(err => console.log(err))
  })

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
      setProductCart([...productCart, {...productItem , quantity:1}]);
      toast.success('product added')
  }



  return (
    <>

      <Router>
          <Navbar productCart={productCart} />
          <ToastContainer />
          <Routes>
            <Route path='/' element={<><Home addToCart={addToCart} /></>} />
            <Route path='/about' element={<><About /></>} />
            <Route path='/products' element={<><Products addToCart={addToCart} /></>} />
            <Route path='/products/:id' element={<><ProductDetails addToCart={addToCart} /></>} />
            <Route path='/signup' element={<><SignUp /></>} />
            <Route path='/login' element={<><Login /></>} />
            <Route path='/cart' element={<><CartProduct productCart={productCart} /></>} />
          </Routes>
      </Router>


    </>
  )
}

export default App
