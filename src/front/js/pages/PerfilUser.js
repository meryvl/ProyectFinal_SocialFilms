import React, { useEffect, useState } from "react";
import { useAppContext } from "../store/appContext";
import { Backend_URL } from "../store/Fetch/Fetch";
const PerfilUser =()=>{
const {store, actions} = useAppContext();
const{ userActual , setUserActual, Users , setUsers, userLogeado, setUserLogeado}=store
const [datos, setDatos]=useState([]);

console.log(window.localStorage)
const fecthDatos =async ()=>{
    const res = await fetch(Backend_URL+`/user/`+userActual.user_id)
    const data = await res.json();
    console.log(data);
    setDatos(data);
}
useEffect(()=>{
    fecthDatos()
},[])
return(
    <>
    <h1>Perfil de Usuario</h1>
    {userLogeado== true? "hola":""}
    <h1>{userActual.user_id}</h1>
    </>
)
}

export default PerfilUser;