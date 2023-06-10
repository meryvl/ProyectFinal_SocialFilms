import React, { useEffect, useState } from "react";
import { AddSee } from "./AddSee/AddSee";
import { get } from "../store/Fetch/Fetch";
const ButtonsSee =({idFilm , idUsuario})=>{
    const [seeUser , setSeeUser]=useState([])
    const [isSee , setisSee]=useState([])
   
   
    useEffect(()=>{
    get(setSeeUser,'/listSee/'+idUsuario)   
    console.log(seeUser)
},[])
return(
<>
 <img className="ok" src="https://static.vecteezy.com/system/resources/previews/002/736/131/original/check-ok-symbol-isolated-icon-free-vector.jpg"/> 
 <AddSee  idFilm={idFilm}  idUsuario={idUsuario}/>



</>

)

}
export default ButtonsSee