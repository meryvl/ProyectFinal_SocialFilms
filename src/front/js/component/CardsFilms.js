import React, { useState } from "react";
import { Link } from "react-router-dom";

const CardsFilms =({movie,  URL_IMAGE , selectMovie } )=>{

const [see , setSee]=useState([])
const hanledSee=(id)=>{
setSee(prev => [...prev,id])
console.log(see)
}
const urlDetails = `detailsFilms/${movie.id}`;
return(
    <>
   <div>
    
	<img className="imgCards" src={`${URL_IMAGE + movie.poster_path}`} alt="" height={450} width="100%" onClick={()=> selectMovie(movie)}/>
	<button className="addSee" onClick={()=>{hanledSee(movie.id)}}>Add see</button>
    <h4 className="text-center">{movie.title}</h4>
    <p>{movie.release_date}</p>
    <p>{movie.vote_average}</p>
    <Link  to={urlDetails} className="btn btn-primary ">Details and Coment</Link>
    </div>
    </>
)


}

export default CardsFilms;