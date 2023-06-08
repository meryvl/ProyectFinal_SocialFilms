import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Stars from "../Stars";
import "../../component/CardFilms/CardsFilms.css";
import ButtonsSee from "../ButtonsSee";
import { token } from "../../servicios/Token";
import { useAppContextUser } from "../../store/ContextUser";
const CardsFilms =({movie,  URL_IMAGE , selectMovie } )=>{
const url_path=`${URL_IMAGE + movie.poster_path}`
const{store, actions}= useAppContextUser()


return(
    <>
   <div >
    <img className="imgvideo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEyrT_HNLMDNcogUhBObliy9jir6eZ1PejRFbXyH8EzKQXIHsyLaFzFQKYkYJedd-8Ol4&usqp=CAU"/>
	<img className="imgCards img-fluid" src={url_path} alt=""  width="100%" onClick={()=> selectMovie(movie)}/>
	{token.user ?
    <ButtonsSee idFilm={movie.id}  
    idUsuario={token.user}/> :"" }
    
    <p className="titleCard">{movie.title}</p>
    <div className="TextCard row">
    <p className="col-8 fecha">{movie.release_date}</p>
    <p className="col-4">{movie.vote_average}</p>

    </div>
    <div className="butonComent">
    <Link to={`/View/${movie.id}`} className="btn btn-primary butonComent ">Details and Coment</Link>
    </div>
    </div>
    </>
)


}

export default CardsFilms;