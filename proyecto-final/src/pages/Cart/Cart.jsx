import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import CartContext from '../../store/Cart-context';
import './Cart.css';
import carrito from '../../components/NavBar/assets/carrito.png';

function Cart() {
  const cartCtx = useContext(CartContext);

  return (
    <div className='cart'>
      {cartCtx.products.map(p => <CartItem capacitacion={p} key={p.id}/>)}
      {cartCtx.products.length !==0 ?
        <div className='total-container'>
          <h3>Precio Total :${cartCtx.getTotalPrice()}</h3>
          
          <button className='vaciar' onClick={() => cartCtx.clear()}>Vaciar carrito</button>
          <br />
          <button>
            <Link className='shop'  to='/'>Continuar comprando</Link>
          </button>
          <br />
          <br />
          <Link to='/checkout'>
          <button className='btn btn-info'>Finalizar compra</button>
          </Link>
          
        </div> :
        <>
        <img src={carrito} alt="" />
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