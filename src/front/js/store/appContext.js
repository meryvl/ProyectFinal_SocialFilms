import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const API_URL = "https://api.themoviedb.org/3"
	const API_KEY = "85acd1db7d013b618f9633e17890c3b8"
	const IMAGE_PATH= "https://image.tmdb.org/t/p/original"
	const URL_IMAGE= "https://image.tmdb.org/t/p/original"
	

	const [movies , setMovies]= useState([])
	const [searchKey , setSearchkey]= useState("")
	const [trailer , setTrailer] = useState(null)
	const [movie , setMovie] = useState({title: "Loging Movies"})
	const [playing , setPlaying] = useState(false);
	const [Users , setUsers] = useState([])


	const [userLogeado, setUserLogeado] = useState(false)

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


console.log(movies)
 
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
 
const  store ={
  movie,
  movies,
  setMovie,
  setMovies,
  searchKey,
  setSearchkey,
  trailer , setTrailer,
	movie ,
	playing , setPlaying,
  API_KEY,
  API_URL,
  IMAGE_PATH,
  URL_IMAGE,
  Users,
  setUsers,
  userLogeado, setUserLogeado
}
const actions={
  fetchMovies,
  searchMovies,
  fetchMovie,
  selectMovie
}

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);


export default AppContextProvider;