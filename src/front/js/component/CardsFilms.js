import React, { useState } from "react";

const CardsFilms =({movie,  URL_IMAGE , selectMovie } )=>{

const [see , setSee]=useState([])
const hanledSee=(id)=>{

setSee(prev => [...prev,id])
console.log(see)
}
return(
    <>
   <div>
    
	<img className="imgCards" src={`${URL_IMAGE + movie.poster_path}`} alt="" height={450} width="100%" onClick={()=> selectMovie(movie)}/>
	<button className="addSee" onClick={()=>{hanledSee(movie.id)}}>Add see</button>
    <h4 className="text-center">{movie.title}</h4>
    <p>{movie.release_date}</p>
    <p>{movie.vote_average}</p>
    </div>
    </>
)


}

export default CardsFilms;