import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { getUser } from "../store/Fetch";
const Login =()=>{
  const navigate = useNavigate();
  const {store, actions} = useAppContext();
  const{ Users , setUsers, userLogeado, setUserLogeado}=store
  const [email , setEmail]= useState();
  const [password , setPassword] =useState();
  
  
useEffect(()=>{
    getUser(setUsers)
},[])


  const hanledLogin=(e , email , password)=>{
    e.preventDefault();
   Users.map((user)=>{

    if(user.email == email ){
      setUserLogeado("true")
      navigate("/perfilUsuario")
      setEmail("")
      setPassword("")
    }
    else{
      console.log("No existe ese usuario")
    }
   

   })
    
     

  }


return(<>

<div className="bodyPage">
<div className="inFormBackground">
    <div className="circle"></div>
    <div className="circle"></div>
    <div className="inLoginForm">
      <form className="form">
        <div className="title">
          <h3>Login Here</h3>
        </div>
        <div className="inputGroup">
          <label>Email</label>
          <input type="text" placeholder="Enter Email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className="inputGroup">
          <label>Password</label>
          <input type="password" placeholder="Enter Password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button className="submitForm" onClick={(e)=>{hanledLogin(e, email, password)}}>Log In</button>
       <Link to="/createcuenta" className="create">Create cuenta</Link>
      
      </form>
    </div>
  </div>
  </div>
</>)

}
export default Login;