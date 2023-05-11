import React from "react";

const CardsFilms =({movie,  URL_IMAGE , selectMovie } )=>{

return(
    <>
   <div>
	<img src={`${URL_IMAGE + movie.poster_path}`} alt="" height={450} width="100%" onClick={()=> selectMovie(movie)}/>
	<h4 className="text-center">{movie.title}</h4>
    </div>
    </>
)


}

export default CardsFilms;