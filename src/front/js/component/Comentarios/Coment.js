import React, { useEffect, useState } from "react";
import { useAppContextUser } from "../../store/ContextUser";
import "../../component/Comentarios/Coment.css"
import { getComents , newComent ,getComentsFilm} from "../../store/Fetch/Fetch";

const Coment=({idFilm})=>{
    const token=window.localStorage
    const {actions, store}= useAppContextUser();
    const{coments ,setComents} = store;
    const [listComents , setListComents]=useState([])
    const [newComentario , setComentario]=useState([])

useEffect(()=>{
    getComents(setComentario)
    getComentsFilm(setListComents, idFilm)
},[])
console.log(token)
const hanledAddComent=()=>{
newComent( token.user , coments , idFilm )
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