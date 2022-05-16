import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import CartContext from '../../store/Cart-context';
import './Cart.css';

function Cart() {
  const cartCtx = useContext(CartContext);

  return (
    <div className='cart'>
      {cartCtx.products.map(p => <CartItem capacitacion={p} key={p.id}/>)}
      {cartCtx.products.length !==0 ?
        <div className='total-container'>
          <h3>Precio Total :${cartCtx.getTotalPrice()}</h3>
          <button>Terminar compra</button>
          <button onClick={() => cartCtx.clear()}>Vaciar carrito</button>
          <button>
            <Link className='shop'  to='/'>Continuar comprando</Link>
          </button>
        </div> :
        <>
        <h2>No hay productos en el carrito</h2>
        
        <button className='button-brown'>
          <Link to='/'>Ir al inicio</Link>
        </button>
        </>
          }
      </div>
  )
}


export default Cart