//Cabecera para la mayoría de las páginas
import React from "react";
import Logo from "../img/Asoprolapa_logo.png";
import "../styles/Header.css"; //para importar el archivo css

function Header () {
    return(
        <header>
            <img src={Logo} alt="Logo" className="logo" /> 
            <h1>ASOPROLAPA</h1>
            <p>Preservación y enriquecimiento ecológico de la Península de Nicoya</p>
        </header>
    )
}

export default Header;