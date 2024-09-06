import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import About from'./pages/About';
import MyOrder from'./pages/MyOrder';
import { CartProvider } from './components/ContextReducer';
import Cart from './pages/Cart';
import CartModal from './CartModal';
function App(){
  return (
   <>
   <CartProvider>
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/MyOrder' element={<MyOrder/>}/>
    <Route path='/Cart' element={<Cart/>}/>
   </Routes> 
   </BrowserRouter>
   </CartProvider>
   </>
  );
}

export default App;

