//Cabecera para la mayoría de las páginas
import React from "react";
import Logo from "../img/GuacamayaBlanco.png";
import "../styles/Header.css"; //para importar el archivo css

function Header () {
    return(
        <header>
            <img src={Logo} alt="Logo" className="logo" /> 
            <p className="preservación" >Asociación Pro Conservación <br />de la Lapa Roja</p>
        </header>
    )
}

export default Header;