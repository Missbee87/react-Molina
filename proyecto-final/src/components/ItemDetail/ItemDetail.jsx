import React, { useContext} from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import {Link} from 'react-router-dom';
import CartContext from '../../store/Cart-context';




function ItemDetail( {capacitacion}) {
  
  const cartCtx = useContext(CartContext);


  function addHandler (quantityToAdd) {
    cartCtx.addProduct({quantity: quantityToAdd, ...capacitacion});
  }
  return (
  <>
  
      <div className="item-detail">
        <div className="left">
          <div className='img-detail-container'>
            <img src={capacitacion?.imagen} alt="imagen del producto" />
          </div>
        </div>
        <div className="right">
          <div className='info-container'>
            <h1>{capacitacion?.nombre}</h1>
            <p>{capacitacion?.descripcion}</p>
            <p className="precio">${capacitacion?.precio}</p>
            
            <div className='count-container'>
           
              <ItemCount stock={5} initial={0} onAdd= {addHandler}/>
              <button className="botonera" onClick={() => console.log(cartCtx.products)}> Imprimir carrito</button>
              <button className="botonera" onClick={() => cartCtx.removeProduct(capacitacion.id)}>Remove product</button>
              <button className="botonera" onClick={() => cartCtx.clear()}> Clear</button>
              <button className="botonera" onClick={() => console.log(cartCtx.isInCart(capacitacion.id))}> Is in cart</button>
              <button className="botonera" onClick={() => console.log(cartCtx.getCartQuantity())}> Quantity</button>
              {cartCtx.products.length &&
              <button onClick={() => console.log(CartContext)}>
                <Link to='/cart'>
                  Terminar compra ({ cartCtx.getCartQuantity()} capacitaciones)
                </Link>
                </button>
                }

            </div>
          </div>
        </div>
      </div>
    
  </>       
    )
}

export default ItemDetail




        
        






