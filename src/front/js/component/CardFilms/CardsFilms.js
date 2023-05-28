import React, { useState } from "react";
import { Link } from "react-router-dom";
import Stars from "../Stars";
import "../../component/CardFilms/CardsFilms.css";
const CardsFilms =({movie,  URL_IMAGE , selectMovie } )=>{

const [see , setSee]=useState([])
const hanledSee=(id)=>{
setSee(id)
console.log(see)
}

return(
    <>
   <div>
    
	<img className="imgCards img-fluid" src={`${URL_IMAGE + movie.poster_path}`} alt="" height={450} width="100%" onClick={()=> selectMovie(movie)}/>
	<button className="addSee" onClick={()=>{hanledSee(movie.id)}}>Add see</button>
    <div className="TextCard row">
    <h4 className="text-center title">{movie.title}</h4>
    <p className="col-8 fecha">{movie.release_date}</p>
    <p className="col-4">{movie.vote_average}</p>
    <Stars />
    </div>
    <div className="butonComent">
    <Link to={`/View/${movie.id}`} className="btn btn-primary butonComent ">Details and Coment</Link>
    </div>
    </div>
    </>
)


}

export default CardsFilms;