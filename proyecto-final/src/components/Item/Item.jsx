import React from 'react';
import './item.css';
import {Card} from "react-bootstrap";
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


function Item( {capacitaciones}) {
  return (
  <>
  <div className="col-md-4 col"> 
    <Card style={{height:"100%"}}>
      <Card.Img className="imagen" variant="top" src={capacitaciones.imagen} />
      <Card.Body>
        <Card.Title>{capacitaciones.nombre}</Card.Title>
        <Card.Text>${capacitaciones.precio}</Card.Text>
        <Link className="link" to={'/item/' + capacitaciones?.id}>Ver detalle</Link>
        <ItemCount stock={5} initial={0}/>
      </Card.Body>
    </Card>
  </div>
  </>       
  )
}

export default Item




        
        






