import React, { useEffect, useState } from "react";
import { useAppContextUser } from "../store/Fetch/ContextUser";
import { fecthDatosUser } from "../store/Fetch/Fetch";

const PerfilUser =()=>{
const {store, actions} = useAppContextUser();
const{ userActual , setUserActual, Users , setUsers, userLogeado, setUserLogeado}=store
const [datos, setDatos]=useState([]);
useEffect(()=>{
    fecthDatosUser(setDatos)
 
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