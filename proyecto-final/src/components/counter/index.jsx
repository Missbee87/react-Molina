import React, { useState} from 'react';
import './counter.css'


function Counter ({stock, initial}) {
    const [count, setCount] = useState(0);

    function handleAdd(){
        if(count < stock)
        setCount(count + 1)
    }

    function handleSubstract(){
        if(count > initial)
        setCount(count - 1)
    }
  return (
   
    <div className="container">
        <button className="btn btn-primary m-2" onClick={handleSubstract}>-</button>
        <span className="boton">     {count}     </span>
        <button className="btn btn-primary m-2" onClick={handleAdd}>+</button>
    <div>
    
        <button className="btn btn-primary m-6">
            Agregar 
        </button>
    </div>
    </div>
  )
}


export default Counter