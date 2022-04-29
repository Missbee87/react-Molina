import React from 'react'
import './item.css'
import {Card} from "react-bootstrap"
import ItemCount from '../ItemCount/ItemCount'



function Item( {capacitaciones}) {
  return (
  <>
        <div class="col-md-3 col"> 
          <Card style={{height:"100%"}}>
            <Card.Img className="imagen" variant="top" src={capacitaciones.imagen} />
            <Card.Body>
              <Card.Title>{capacitaciones.nombre}</Card.Title>
              <Card.Text>${capacitaciones.precio}</Card.Text>
              <ItemCount stock={5} initial={0}/>
            </Card.Body>
          </Card>
        </div>
      </>       
    )
}

export default Item




        
        






