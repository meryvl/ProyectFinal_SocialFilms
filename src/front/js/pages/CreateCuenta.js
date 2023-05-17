import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
const CreateCuenta =()=>{
const [name, setName] = useState()
const [apellidos , setApellidos] = useState()
const [email , setEmail] = useState()
const [password , setpassword] = useState()
const [newUser , setNewUser] = useState([])

const register = async (name , lastname ,email, password) => {
    const resp = await fetch(
        `https://3001-meryvl-proyectfinalsoci-9x5yy65jciv.ws-eu97.gitpod.io/new`,
        {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name , lastname ,email, password}),
        }
    );
  
    if (!resp.ok) throw Error("There was a problem in the login request");
  
    if (resp.status === 401) {
        throw "Invalid credentials";
    } else if (resp.status === 400) {
        throw "Invalid email or password format";
    }
  
    const data = await resp.json();
  
    return data;
  };


const hanledCreateNewUser =(e,name, lastname , email , password)=>{
    e.preventDefault();
    register(name , lastname ,email, password);
    setApellidos("")
    setEmail("")
    setName("")
    setpassword("")
      
}


return(<>
<div className="bodyPage">
<div className="form-register">


    <h4>Formulario Registro</h4>
    <input class="controls" type="text" name="nombres" value={name} id="nombres" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
    <input class="controls" type="text" name="apellidos"  value={apellidos} id="apellidos" placeholder="Last Name" onChange={(e)=>setApellidos(e.target.value)}/>
    <input class="controls" type="email" name="correo" value={email} id="correo" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
    <input class="controls" type="password" name="password" value={password} id="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
    <input class="botons" type="submit" value="Registrar" onClick={(e)=>{hanledCreateNewUser(e , name , apellidos , email , password)}}/>
    <p><Link to="/login">¿Ya tengo Cuenta?</Link></p>

         
</div>
</div>
</>
)

}
export default CreateCuenta;
