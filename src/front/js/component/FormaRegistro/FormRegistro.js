import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../../store/appContext";
import { getUser , register } from "../../store/Fetch/Fetch";
import "../../component/FormaRegistro/FormRegistro.css"
const FormRegistro =()=>{
    const {store, actions} = useAppContext();
const{ Users , setUsers}=store 

const [name, setName] = useState()
const [apellidos , setApellidos] = useState()
const [email , setEmail] = useState()
const [password , setpassword] = useState()
const [res,setRes]=useState([])


useEffect(()=>{
    getUser(setUsers)
},[])


const hanledCreateNewUser =(e,name, lastname , email , password)=>{
    e.preventDefault();
    
    register(name, lastname , email , password , setRes);
    setApellidos("")
    setEmail("")
    setName("")
    setpassword("")
      
}


return(<>
<div className="bodyPageInit">
<div className="form-register">


    <h4>Formulario Registro</h4>
    <input className="controls" type="text" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
    <input className="controls" type="text"  value={apellidos} placeholder="Last Name" onChange={(e)=>setApellidos(e.target.value)}/>
    <input className="controls" type="email"  value={email}  placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
    <input className="controls" type="password" value={password}  placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
    <input className="botons" type="submit" value="Registrar" onClick={(e)=>{hanledCreateNewUser(e , name , apellidos , email , password)}}/>
    <p>{res}</p>
    <p><Link to="/login">¿Ya tengo Cuenta?</Link></p>

         
</div>
</div>
</>
)

}
export default FormRegistro;