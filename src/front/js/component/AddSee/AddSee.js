import { useState } from "react";
import React from "react";

export const AddSee =(id)=>{
    const [see , setSee]=useState([])
    
    const hanledSee=(id)=>{
        setSee(id)
        console.log(see)
        }
return(
    <>
    <button className="addSee" onClick={()=>{hanledSee(id)}}>Add see</button>
    </>
)
}