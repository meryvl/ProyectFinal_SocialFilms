import { useEffect, useState } from "react";
import React from "react";
import { useAppContextUser } from "../../store/ContextUser";
import { getSee , newSee } from "../../store/Fetch/Fetch";
import { token } from "../../servicios/Token";
export const AddSee =(id, nameFilm, url)=>{
    
    const [see , setSee]=useState([])
    const [listSee, setlistSee]=useState([])
   
    const hanledSee=(id, nameFilm, url)=>{
        setSee(id)
        console.log(see)
        newSee(id , nameFilm, url , token.user)
        }
useEffect(()=>{
console.log(see)
getSee(setlistSee)
},[])
return(
    <>
    {see.length < 1 ?
 <button className="addSee" onClick={()=>{hanledSee(id)}}>Add see</button>
 :
 <img className="ok" src="https://static.vecteezy.com/system/resources/previews/002/736/131/original/check-ok-symbol-isolated-icon-free-vector.jpg"/>  
}
   
    </>
)
}