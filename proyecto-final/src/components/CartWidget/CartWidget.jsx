import React, { useContext } from 'react';
import {  NavLink } from 'react-router-dom';
import CartContext from '../../store/Cart-context';
import './carWidget.css';
import carrito from '../NavBar/assets/carrito.png';


const CartWidget = () => {
  const { getCartQuantity} = useContext(CartContext);
  return(
  <>
    <NavLink to='/cart'>
      <img className='carrito'src={carrito} alt="logo" />
      
      <span className='cantidad'>{getCartQuantity()}</span>
     
    </NavLink>
    
      
    
    
</>
  )
}


export default CartWidget



    
      
    