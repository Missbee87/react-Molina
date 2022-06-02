import React, { useContext, useState} from 'react';
import './ItemCount.css';
import CartContext from '../../store/Cart-context';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';


function ItemCount ({stock, initial, onAdd}) {
    const [count, setCount] = useState(initial);
    const cartCtx = useContext (CartContext);
    function pluralizeWord(singularWord, pluralWord) {
        return count > 1 ? pluralWord : singularWord;
    }


  const handleAdd = () => {
        if(count < stock) {
        setCount(count + 1)
    } else {
        const Toast = Swal.mixin({
            toast: true,
            background: '#DBE887',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: false,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter' , Swal.stopTimer)
                toast.addEventListener('mouseleave' , Swal.resumeTimer)
            }
        })
        Toast.fire({
            icon: 'error',
            title: 'No hay suficiente stock'
        })

    }
}
const handleOnAdd = () => {
    const Toast = Swal.mixin ({
        toast: true,
        background: '#DBE887',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }

    })
    Toast.fire({
        icon: 'success',
        title: `${count} unidades ${pluralizeWord("agregada", "agregadas")} al carrito`
    })
    onAdd(count);
    setCount(initial);
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

           
       <button onClick={handleOnAdd}className="btn btn-primary m-6" >Agregar al carrito</button>
      
       

        {cartCtx.products.length > 0 &&
            <button onClick={() => console.log(CartContext)}>
                <Link to='/cart'>
                  Ir al carrito ({ cartCtx.getCartQuantity() } items)
                </Link>
            </button>
        }
       
      
    
    </div>
  )
}


export default ItemCount