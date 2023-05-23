import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import axios from "axios";

import ButtonSearch from "../component/ButtonSearch";
import { useAppContext } from "../store/appContext";

import CardsFilms from "../component/CardsFilms";
import Banner from "../component/Banner";
import GenreFilms from "../component/GenreFilms";

export const Home = () => {
const {store, actions} = useAppContext();
const { movies, setMovie, setMovies, searchKey, setSearchkey, trailer , setTrailer, movie , playing , setPlaying, 
  API_KEY,
  API_URL,
  IMAGE_PATH,
  URL_IMAGE} = store


	//funcion de peticion de api

 const fetchMovies = async( searchKey) =>{
	const type = searchKey ? "search" : "discover"
	//se le hace la peticion  con lka url con el typo que seria lo que estamos buscando
	const {data : {results} ,
}= await axios.get(`${API_URL}/${type}/movie`, {
	//Enviamos un encabezado o parametro con la key  para verificar que tenemos la sesion y lo que estamos buscando 
	params :{
	api_key:API_KEY,
	query: searchKey,
},
});
setMovies(results)
//la primera posicion del resultado 
setMovie(results[0])

if(results.length){
	await fetchMovie(results[0].id)
}
}

const searchMovies =(e)=>{
	e.preventDefault();
	fetchMovies(searchKey)
}
 
useEffect(()=>{
fetchMovies();
},[])

const fetchMovie = async(id)=>{
const {data} = await axios.get (`${API_URL}/movie/${id}`, {
	params : {
		api_key: API_KEY,
		append_to_response: "videos"
	}
})

if(data.videos && data.videos.results){
	const trailer = data.videos.results.find((vid)=> vid.name === "Official Trailer"
	)
	setTrailer(trailer ? trailer : data.videos.results[0])
}
setMovie(data)
}

const selectMovie = async(movie)=>{
	fetchMovie(movie.id)
	setMovie(movie)
	window.scrollTo(0,0)
}
const [action, setAction]=useState(false)
const startStop =()=>{
	if(action == false){
		setAction(true)
	}else if(action == true){
		setAction(false)
	}

}
	return (
<>
<div className="styleBar">
<a href="#"  onClick={startStop}>Buscar por genero</a>
{action == true ? <GenreFilms /> : ""}
<ButtonSearch  setSearchkey={setSearchkey}  searchMovies={searchMovies} />
</div>	
		<div >
		
		{/*Aqui va el banner*/ }
		<div>
    <Banner IMAGE_PATH={IMAGE_PATH} movie={movie}  trailer={trailer} setPlaying={setPlaying} playing={playing}/>    
    </div>

		{/*contenedor donde iran las peliculas*/ }
			<div className="container mt-3 ">
				<div className="row">
					{movies.map((movie)=>{
						return ( <div key={movie.id} className="col-md-2 mb-3 styleCards">
              <CardsFilms  movie={movie}  URL_IMAGE={ URL_IMAGE}  selectMovie={selectMovie}/>
              
						</div>)

					})}
				</div>

			</div>
		
		</div>
		</>
	);
};
