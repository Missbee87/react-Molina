import React, { useContext } from 'react';
import CartContext from '../../store/Cart-context';
import Bubble from '../Bubble/Bubble';
import './CartItem.css';


function CartItem({capacitacion}) {
    const cartCtx = useContext(CartContext);

  return (
    <>
        <div className='cart-item'>
            <div className='cart-img-container'>
                <img src={capacitacion?.imagen} alt="Imagen del producto" />
            </div>
            <p>{capacitacion?.nombre}</p>
            <p>${capacitacion?.precio}</p>
            
        </div>
        
        <div className='bubble-close'>
            <Bubble isButton onBubbleClick={() => cartCtx.removeProduct(capacitacion.id)}>X</Bubble>

        </div>
        <div className='bubble-quantity'>
            <Bubble>{capacitacion?.quantity}</Bubble>

        </div>
        
        </>
  )

}


    

export default CartItem