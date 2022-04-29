import React, { useState} from 'react';
import './ItemCount.css'


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
   
    <div>
        <button className="btn btn-primary m-2" onClick={handleSubstract}>-</button>
        <span className="boton">     {count}     </span>
        <button className="btn btn-primary m-2" onClick={handleAdd}>+</button>
        
            <button onClick={() => (count <= stock) && onAdd()} className="btn btn-primary m-6">
                Agregar 
            </button>
    
    </div>
  )
}


export default ItemCount