import { useEffect, useState } from "react";
import React from "react";
import { useAppContextUser } from "../../store/ContextUser";
import { getSee } from "../../store/Fetch/Fetch";
export const AddSee =(id)=>{
    
    const [see , setSee]=useState([])
    const [classAdd ,setClass]=("addSee")
   
    const hanledSee=(id)=>{
        setSee(id)
        console.log(see)
        
        }

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