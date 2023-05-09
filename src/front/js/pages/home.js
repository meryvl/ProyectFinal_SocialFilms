import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import axios from "axios";
import YouTube from 'react-youtube';
import ButtonSearch from "../component/ButtonSearch";
export const Home = () => {
	const { store, actions } = useContext(Context);
	const API_URL = "https://api.themoviedb.org/3"
	const API_KEY = "85acd1db7d013b618f9633e17890c3b8"
	const IMAGE_PATH= "https://image.tmdb.org/t/p/original"
	const URL_IMAGE= "https://image.tmdb.org/t/p/original"
	

	const [movies , setMovies]= useState([])
	const [searchKey , setSearchkey]= useState("")
	const [trailer , setTrailer] = useState(null)
	const [movie , setMovie] = useState({title: "Loging Movies"})
	const [playing , setPlaying] = useState(false);
 
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


	return (
		<div >
		<ButtonSearch  setSearchkey={setSearchkey}  searchMovies={searchMovies} />
		{/*Aqui va el banner*/ }
		<div>
        <main>
		
          {movie ? (
            <div
              className="viewtrailer"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${movie.backdrop_path}")`,
              }}
            >
				
              {playing ? (
                <>
                  <YouTube
                    videoId={trailer.key}
                    className="reproductor container"
                    containerClassName={"youtube-container amru"}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button onClick={() => setPlaying(false)} className="boton">
                    Close
                  </button>
                </>
              ) : (
                <div className="container">
                  <div className="">
                    {trailer ? (
                      <button
                        className="boton"
                        onClick={() => setPlaying(true)}
                        type="button"
                      >
                        Play Trailer
                      </button>
                    ) : (
                      "Sorry, no trailer available"
                    )}
                    <h1 className="text-white">{movie.title}</h1>
                    <p className="text-white">{movie.overview}</p>
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </main>
      </div>




		
		{/*contenedor donde iran las peliculas*/ }
			<div className="container mt-3">
				<div className="row">
					{movies.map((movie)=>{
						return (<div key={movie.id} className="col-md-4 mb-3" onClick={()=> selectMovie(movie)}>
							<img src={`${URL_IMAGE + movie.poster_path}`} alt="" height={300} width="100%"/>
							<h4 className="text-center">{movie.title}</h4>
						</div>)

					})}
				</div>

			</div>
		
		</div>
	);
};
