import React, { useEffect, useState } from "react";
import { useAppContextUser } from "../../store/ContextUser";
import "../../component/Comentarios/Coment.css"
import { getComents , newComent } from "../../store/Fetch/Fetch";
import { token } from "../../servicios/Token";
const Coment=({idFilm})=>{
    const {actions, store}= useAppContextUser();
    const{coments ,setComents} = store;
    const [listComents , setListComents]=useState([])

useEffect(()=>{
    getComents(listComents)
},[])
const hanledAddComent=()=>{

newComent(token.user , coments , idFilm )
}
    return(
    <>
    <div className="CardComent">
    <p>Comentarios</p>
    <labe>
        Escribe comentario:
    <div>
    <textarea value={coments} onChange={(e)=>setComents(e.target.value)} ></textarea>
    </div>
    </labe>
   
    <button onClick={()=>{hanledAddComent(token.user,coments, idFilm)}}>Añadir</button>
    </div>
    </>
)
}
export default Coment;