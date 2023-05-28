import React from "react";
import { useAppContext } from "../../store/appContext";
import "../../component/Comentarios/Coment.css"
const Coment=()=>{
    const {actions, store}= useAppContext();
    const{coments ,setComents} = store;
const hanledAddComent =()=>{

}
    return(
    <>
    <div className="CardComent">
    <p>Comentarios</p>
    <labe>
        Escribe comentario:
    <textarea name="textarea" rows="5" cols="50" >Poner comentario de la película</textarea>
    </labe>
   
    <button>Añadir</button>
    </div>
    </>
)
}
export default Coment;