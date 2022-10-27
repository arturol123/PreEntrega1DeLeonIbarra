import React from "react";
import '../Componente/NavBar.css';


function NavBar (){
    return(
        <nav>
            <ul className="Navigator">
                <li><a href="">Nosotros</a></li>
                <li><a href="">Promociones</a></li>
                <li><a href="">Ubicaciones</a></li>
                <li><a href="">Envios a Domicilio</a></li>
            </ul>
        </nav>
    )
}


export default NavBar;