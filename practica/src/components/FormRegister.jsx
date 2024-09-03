//Componente para el formulario de registrarse
import React from "react";

import "../styles/FormRegister.css";

function FormRegister() {
    return(
        <form className="form">

        <div className="datosForm">
          <label>Nombre Completo:</label>
          <input type="nombre" className="input" />
        </div>

        <div className="datosForm">
          <label>Email:</label>
          <input type="email" className="input" />
        </div>

        <div className="datosForm">
          <label>Contraseña:</label>
          <input type="password" className="input" />
        </div>
        
        <button type="submit" className="button">Registrarse</button>
      </form>
    )
}

export default FormRegister;