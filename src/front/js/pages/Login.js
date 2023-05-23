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
  const [res , setRes] =useState("")
  
useEffect(()=>{
    getUser(setUsers)
},[])

const log = async (email, password) => {
  const resp = await fetch(`https://3001-meryvl-proyectfinalsoci-yjm6wjttprk.ws-eu97.gitpod.io/login`, { 
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ email: email, password: password }) 
  })

  if(!resp.ok){
    setRes("There was a problem in the login request")
    throw Error("There was a problem in the login request")

  } 

  if(resp.status === 401){
    setRes("Invalid credentials")
       throw("Invalid credentials")
       
  }
  else if(resp.status === 400){
    setRes("Invalid credentials")
       throw ("Invalid email or password format")
       
  }

  setUserLogeado("true")
  navigate("/perfilUsuario")
  setEmail("")
  setPassword("")
  const data = await resp.json()
  // save your token in the localStorage
 //also you should set your user into the store using the setStore function
  localStorage.setItem("jwt-token", data.token);

  return data
}
  const hanledLogin=(e , email , password)=>{
    e.preventDefault();
    log(email,password)
      
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
        <p className="m-3">{res}</p>
        <button className="submitForm" onClick={(e)=>{hanledLogin(e, email, password)}}>Log In</button>
       <Link to="/createcuenta" className="create">Create cuenta</Link>
      
      </form>
    </div>
  </div>
  </div>
</>)

}
export default Login;