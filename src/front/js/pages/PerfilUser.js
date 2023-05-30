import React, { useEffect, useState } from "react";
import { useAppContext } from "../store/appContext";
import { Backend_URL } from "../store/Fetch/Fetch";
const PerfilUser =()=>{
const {store, actions} = useAppContext();
const{ userActual , setUserActual, Users , setUsers, userLogeado, setUserLogeado}=store
const [datos, setDatos]=useState([]);
const Storagetoken= window.localStorage;
console.log(Storagetoken.user)
const fecthDatos =async ()=>{
    const res = await fetch(Backend_URL+`/user/`+Storagetoken.user)
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
    <h1>{datos.name}</h1>
    </>
)
}

export default PerfilUser;