import React from "react";
import { Link } from "react-router-dom";
const CreateCuenta =()=>{
return(<>
<div className="bodyPage">
<div className="form-register">


    <h4>Formulario Registro</h4>
    <input class="controls" type="text" name="nombres" id="nombres" placeholder="Name"/>
    <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Last Name"/>
    <input class="controls" type="email" name="correo" id="correo" placeholder="Email"/>
    <input class="controls" type="password" name="password" id="password" placeholder="Password" />
    <input class="botons" type="submit" value="Registrar"/>
    <p><Link to="/login">¿Ya tengo Cuenta?</Link></p>

         
</div>
</div>
</>
)

}
export default CreateCuenta;
