import {
    LoginPage,
    SignupPage,
    HomePage,
    CartPage,
    ProductDetailsPage,
    ShopPage,
    CheckoutPage   
} from '../pages';
import { Navigate, Route,Routes } from 'react-router-dom';


function Routers() {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='home'/>} />
        <Route path='/home' element={<HomePage/>} />
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/shop/:id' element={<ProductDetailsPage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/checkout' element={<CheckoutPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignupPage/>} />
    </Routes>
  )
}

export default Routers;