import React, { Component } from 'react'
import './Box.css';

export class Box extends Component {
  render() {
    return (
      
      <div className="box">{this.props.titulo}</div>


      
    )
  }
}


export default Box;
