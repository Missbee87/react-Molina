import React from "react";
import "./NavBar.css";
import asg from "./assets/asg.jpg";
import CartWidget from "../CartWidget/CartWidget";
import {  NavLink} from "react-router-dom";




function NavBar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  
                    <ul className="navbar-nav">
                    <li><NavLink to ='/' className="nav"><img  className="logo"src={asg} alt="" /></NavLink></li>
                    <li><NavLink to ='/category/servicios' className="nav">Servicios</NavLink></li>
                    <li><NavLink to ='/category/cursos' className="nav">Cursos</NavLink></li>
                    <li><NavLink to ='/category/productos' className="nav" >Productos</NavLink></li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
            </nav>
       </div>
        
    );
}
export default NavBar;