import React, { useState } from "react";
import { AddSee } from "./AddSee/AddSee";
const ButtonsSee =({idFilm , idUsuario})=>{
    const [seeUser , setSeeUser]=useState([])

return(
<>
<img className="ok" src="https://static.vecteezy.com/system/resources/previews/002/736/131/original/check-ok-symbol-isolated-icon-free-vector.jpg"/> 
<AddSee  idFilm={idFilm}  idUsuario={idUsuario}/>

</>

)

}
export default ButtonsSee