import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
const CreateCuenta =()=>{
const [name, setName] = useState()
const [apellidos , setApellidos] = useState()
const [email , setEmail] = useState()
const [password , setpassword] = useState()
const [User , setUser] = useState([])

const getUser =()=>{
    return(
		fetch('https://3001-meryvl-proyectfinalsoci-7aa3zrb52dd.ws-eu97.gitpod.io/users')
		.then((res) => res.json())
		.then((res) =>{
			console.log("Perfect!!",res)
            setUser(res)
            console.log(User)
		})
		.catch(eror =>console.log(eror))
	)
}
useEffect(()=>{
    getUser()
},[])

const register = (name, lastname , email , password) => {
   return(
    fetch('https://3001-meryvl-proyectfinalsoci-7aa3zrb52dd.ws-eu97.gitpod.io/new',{
        method:'POST',
        body:JSON.stringify({name, lastname , email , password}),
        headers:{
            "Content-Type": "application/json",
            
        }
    })
    .then((res) =>{
    getUser()
    console.log(User)
        
    })
    .catch(eror =>console.log(eror))
)}

  ;


const hanledCreateNewUser =(e,name, lastname , email , password)=>{
    e.preventDefault();
    
    register(name, lastname , email , password);
    setApellidos("")
    setEmail("")
    setName("")
    setpassword("")
      
}


return(<>
<div className="bodyPage">
<div className="form-register">


    <h4>Formulario Registro</h4>
    <input className="controls" type="text" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
    <input className="controls" type="text"  value={apellidos} placeholder="Last Name" onChange={(e)=>setApellidos(e.target.value)}/>
    <input className="controls" type="email"  value={email}  placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
    <input className="controls" type="password" value={password}  placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
    <input className="botons" type="submit" value="Registrar" onClick={(e)=>{hanledCreateNewUser(e , name , apellidos , email , password)}}/>
    <p><Link to="/login">¿Ya tengo Cuenta?</Link></p>

         
</div>
</div>
</>
)

}
export default CreateCuenta;
