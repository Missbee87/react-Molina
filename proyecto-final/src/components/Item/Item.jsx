import React, { useContext } from 'react';
import './item.css';
import {Card} from "react-bootstrap";
import { Link } from 'react-router-dom';
import Bubble from '../Bubble/Bubble';
import CartContext from '../../store/Cart-context';


function Item( {capacitaciones}) {
  const cartCtx = useContext(CartContext);
  return (
  <>
  <div className="col-md-4 col"> 
    <Card style={{height:"100%"}}>
      <Card.Img className="imagen" variant="top" src={capacitaciones.imagen} />
      <Card.Body>
        <Card.Title>{capacitaciones.nombre}</Card.Title>
        <Card.Text>${capacitaciones.precio}</Card.Text>
        <Link className="link" to={'/item/' + capacitaciones?.id}>Ver detalle</Link>
        <div className='bubble-add'>
         
          <Bubble isButton onBubbleClick={ () => cartCtx.addProduct({quantity: 1, ...capacitaciones})}>+</Bubble>

        </div>
      </Card.Body>
    </Card>
  </div>
  </>       
  )
}

export default Item




        
        






