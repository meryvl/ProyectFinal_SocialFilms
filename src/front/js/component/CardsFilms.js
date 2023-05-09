import React from "react";
const CardsFilms =({movie, movietitle } )=>{

return(
    <>
    <div key={movie.id} className="col-md-4 mb-3">
	<img src={`${URL_IMAGE + movie.poster_path}`} alt="" height={300} width="100%"/>
	<h4 className="text-center">{movietitle}</h4>
    </div>
    </>
)


}

export default CardsFilms;