import React, { useState,useContext } from 'react';
import CartContext from '../../store/Cart-context';
import { addDoc, collection, getFirestore} from 'firebase/firestore';
import { Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import { clear } from '@testing-library/user-event/dist/clear';


const Checkout = () => {

    const {products, getTotalPrice, clear }= useContext(CartContext)
    const [Loading, SetLoading] = useState (false);
    const [orderID, setOrderID] = useState()

    const [buyer, setBuyer] = useState({
        Nombre:'',
        Telefono:'',
        Email:''
    })

    const {Nombre, Telefono, Email } = buyer

    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name] : e.target.value
        }))
    }
    
    const generateOrder = async(data) => {
        SetLoading(true)
        const db = getFirestore()
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col,data)
            setOrderID (order.id)
            clear()
            SetLoading(false)
        }catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const dia = new Date()
        const items = products.map(e=> {return {id:e.id, title:e.nombre, price:e.precio, cantidad: e.quantity}})
        const total = getTotalPrice()
        const data = {buyer,items,dia,total}
        console.log("data", data)
        generateOrder(data)
        
    }

  return (
    <>
   <h1>Finalizando compra</h1>
   <hr />
   {Loading? <Spinner/> 
        : (!orderID &&<div>
                <h4>Completar datos:</h4>
                    <br />   
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="text"
                        name='Nombre'
                        placeholder='Nombre'
                        value={Nombre}
                        onChange={handleInputChange}
                        required
                        />
                        <br />
                        <input 
                        type="number"
                        name='Telefono'
                        placeholder='Telefono'
                        value={Telefono}
                        onChange={handleInputChange}
                        required
                        />
                        <br />
                        <input type="email"
                        name='Email'
                        placeholder='Email'
                        value={Email}
                        onChange={handleInputChange}
                        required
                        />
                        <br /> <br />
                        <input 
                        type="submit" 
                        value="Finalizar compra" 
                        className='btn btn-success'
                        />
                
                    </form>
                </div>)
                }
                <div>
                {
                    orderID&&(
                        <div>
                            <h4>Compra finalizada con éxito</h4>
                            <h4>{`Su código de compra es: ${orderID}`}</h4>
                            <Link to="/"><h5>Realizar otra compra </h5></Link>
                        </div>
                    )
                }
                </div>
    
    
    </>
  )
}

export default Checkout