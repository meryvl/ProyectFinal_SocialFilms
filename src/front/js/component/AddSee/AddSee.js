
import React from "react";
import { useAppContextUser } from "../../store/ContextUser";

export const AddSee =({idFilm, idUsuario})=>{
    const{store, actions}= useAppContextUser()
    const {hanledSee}=actions
    
   
return(
    <>
 <button className="addSee" onClick={()=>{hanledSee(idFilm , idUsuario)}}>Add see</button>
    </>
)
}