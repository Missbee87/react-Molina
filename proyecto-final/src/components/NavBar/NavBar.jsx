import React from "react";
import "./NavBar.css";
import asg from "./assets/asg.jpg";
import CartWidget from "../CartWidget";




function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <img  class="logo"src={asg} alt="" />
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link"href="#">Servicios</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Quienes Somos</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Capacitaciones</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Contacto</a>
                    </li>
                    
                </ul>
                <CartWidget />
                </div>
            </div>
            </nav>

           
        </div>
        
    );




}
export default NavBar;