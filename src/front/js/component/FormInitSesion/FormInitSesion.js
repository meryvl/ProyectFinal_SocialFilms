import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppContextUser } from "../../store/ContextUser";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../store/Fetch/Fetch";
import { Backend_URL } from "../../store/Fetch/Fetch";

import "../../component/FormInitSesion/InitSesion.css"

const FormInitSesion =()=>{
  const navigate = useNavigate();
  const {store, actions} = useAppContextUser();
  const{ userActual , setUserActual, Users , setUsers, userLogeado, setUserLogeado}=store
  
  const [email , setEmail]= useState();
  const [password , setPassword] =useState();
  const [res , setRes] =useState("")
  const token= window.localStorage
  

useEffect(()=>{
    getUser(setUsers)
},[])

const log = async (email, password) => {
  const resp = await fetch(Backend_URL+`/login`, { 
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ email:email, password:password }) 
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
  const data = await resp.json()
  // save your token in the localStorage
 //also you should set your user into the store using the setStore function
  localStorage.setItem("jwt-token", data.token , data.user_id);
  localStorage.setItem("user",data.user_id);

 console.log(data)
  return data
}

  const hanledLogin=(e , email , password)=>{
    e.preventDefault();
    log(email,password) 
   
  }
    

  

return(<>

<div className="bodyPage">
<div class="inFormBackground">
    <div class="circle"></div>
    <div class="circle"></div>
    <div class="inLoginForm">
      <form className="form">
        <div class="title">
          <h3>Iniciar Sesion</h3>
        </div>
        <div class="inputGroup">
          <label for="email">Email</label>
           <input type="text" placeholder="Enter Email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div class="inputGroup">
          <label for="password">Password</label>
          <input type="password" placeholder="Enter Password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <p className="m-3">{res}</p>
        <button className="submitForm" onClick={(e)=>{hanledLogin(e, email, password)}}>Log In</button>
       <Link to="/createcuenta" className="create">Create cuenta</Link>
        <div class="social">
          <div class="go"><i class="fab fa-google"></i></div>
          <div class="fb"><i class="fab fa-facebook"></i></div>
          <div class="tw"><i class="fab fa-twitter"></i></div>
        </div>
      </form>
    </div>
  </div>
  
  </div>

</>)

}
export default FormInitSesion;