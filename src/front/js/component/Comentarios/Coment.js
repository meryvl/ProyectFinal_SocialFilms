import React, { useEffect, useState } from "react";
import { useAppContextUser } from "../../store/ContextUser";
import "../../component/Comentarios/Coment.css"
import { getComents , newComent ,getComentsFilm} from "../../store/Fetch/Fetch";

const Coment=({idFilm})=>{
    const token=window.localStorage
    const {actions, store}= useAppContextUser();
    const{coments ,setComents} = store;
    const [listComents , setListComents]=useState([])
    const [listfilm , setlistFilm]=useState([])
const [ComentFilm, setComentFilm]=useState([])
    useEffect(()=>{
    getComents(setListComents)
    getComentsFilm(setComentFilm, idFilm)
    console.log(token)
},[])

const hanledAddComent=()=>{
newComent( token.user , coments , idFilm )
getComentsFilm(setComentFilm, idFilm)
}
    return(
    <>
    <div className="CardComent">
    <p>Comentarios</p>
    
    {listComents.length ? listComents.map((i)=>{
        return (<>
        <div className="cardComent">
        <div className="d-flex ">
        <p className="m-2">Usuario:</p>
        <p className="m-2">{i.usuario.name}</p>
        </div>
        <div className="d-flex">
        <p className="m-2">Comentario:</p>
        <p className="m-2">{i.text}</p>
        </div>
        </div>
        </>)}
        ): 
         <p>Todavia no hay comentarios en esta pelicula, sé el primero en dar tu opinion</p>
         }
    
    {token ? "No se puede escribir ninguna comentario mientras no estes logueado": <labe>Escribe comentario:</labe>}
        
   <div>
   <textarea value={coments} onChange={(e)=>setComents(e.target.value)} ></textarea>
   </div>
  
  
   <button onClick={()=>{hanledAddComent(token.user,coments, idFilm)}}>Añadir</button>
  

    </div>
   </> 
)
}
export default Coment;