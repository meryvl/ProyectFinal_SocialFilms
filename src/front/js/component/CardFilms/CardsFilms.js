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
const urlDetails =`detailsFilms/${movie.id}`;
return(
    <>
   <div>
    
	<img className="imgCards img-fluid" src={`${URL_IMAGE + movie.poster_path}`} alt="" height={450} width="100%" onClick={()=> selectMovie(movie)}/>
	<button className="addSee" onClick={()=>{hanledSee(movie.id)}}>Add see</button>
    <div className="TextCard row">
    <h4 className="text-center">{movie.title}</h4>
    <p className="col-8 ">{movie.release_date}</p>
    <p className="col-4">{movie.vote_average}</p>
    <Stars />
    </div>
    <div className="butonComent">
    <Link to={urlDetails} className="btn btn-primary  ">Details and Coment</Link>
    </div>
    </div>
    </>
)


}

export default CardsFilms;