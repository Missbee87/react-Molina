import React from 'react'
import capacitaciones from '../data/capacitaciones'
import './item.css'
import {Col, Card} from "react-bootstrap"
import Counter from '../counter'



function Item( {capacitaciones}) {
  return (
    
    <>
  <div className="container">
    <div className="row">
    <Col className="col-md-3">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={capacitaciones.imagen} />
        <Card.Body>
          <Card.Title>{capacitaciones.nombre}</Card.Title>
          <Card.Text>${capacitaciones.precio}</Card.Text>
          <Counter stock={5} initial={0}/>
        </Card.Body>
      </Card>
    </Col>
    </div>
  </div>
     </>       
 
        
        
  )
}

export default Item




        
        






