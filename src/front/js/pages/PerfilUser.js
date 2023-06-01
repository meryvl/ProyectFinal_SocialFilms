import React, { useEffect, useState } from "react";
import { useAppContextUser } from "../store/ContextUser";
import { fecthDatosUser, getSee } from "../store/Fetch/Fetch";
import { Backend_URL } from "../store/Fetch/Fetch";
const PerfilUser =()=>{
const {store, actions} = useAppContextUser();
const{ userActual , setUserActual, Users , setUsers, userLogeado, setUserLogeado, listSee , setListSee}=store
const [datos, setDatos]=useState([]);
useEffect(()=>{
    const fecthDatosUser =async (setDatos)=>{
        const res = await fetch(Backend_URL+`/user/`+userActual)
        const data = await res.json();
        console.log(data);
        setDatos(data);
      }
      fecthDatosUser(setDatos)
    getSee(setListSee)
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