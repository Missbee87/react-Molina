import React, { useState} from 'react';
import './ItemCount.css';


function ItemCount ({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);

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
    
    </div>
  )
}


export default ItemCount