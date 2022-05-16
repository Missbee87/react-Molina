import React, { useContext, useState} from 'react';
import './ItemCount.css';
import CartContext from '../../store/Cart-context';
import {Link} from 'react-router-dom';


function ItemCount ({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);
    const cartCtx = useContext (CartContext);
    const { getCartQuantity} = useContext(CartContext);
    function handleAdd(){
        if(count < stock)
        setCount(count + 1)
    }

    function handleSubstract(){
        if(count > initial)
        setCount(count - 1)
    }
    
    
  return (
   
    <div className='item-count-container'>
        <div>
            <button  onClick={handleSubstract}>-</button>
            <input  readOnly value={count} />
            <button  onClick={handleAdd}>+</button>
        </div>
        
        <button onClick={() => (count <= stock) && onAdd(count)} className="btn btn-primary m-6">
            Agregar al carrito 
        </button>
        {cartCtx.products.length > 0 &&
            <button onClick={() => console.log(CartContext)}>
                <Link to='/cart'>
                  Ir al carrito ({ cartCtx.getCartQuantity()} items)
                </Link>
            </button>
        }
       
      
    
    </div>
  )
}


export default ItemCount