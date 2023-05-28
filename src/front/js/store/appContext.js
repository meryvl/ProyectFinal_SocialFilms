import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const API_URL = "https://api.themoviedb.org/3"
	const API_KEY = "85acd1db7d013b618f9633e17890c3b8"
	const IMAGE_PATH= "https://image.tmdb.org/t/p/original"
	const URL_IMAGE= "https://image.tmdb.org/t/p/original"
	const URL_BACK_API="https://3001-meryvl-proyectfinalsoci-yjm6wjttprk.ws-eu97.gitpod.io"

	const [coments ,setComents] =useState([])
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
 


const log = async (email, password) => {
	const resp = await fetch(`https://3001-meryvl-proyectfinalsoci-yjm6wjttprk.ws-eu97.gitpod.io/login`, { 
		 method: "POST",
		 headers: { "Content-Type": "application/json" },
		 body: JSON.stringify({ email: email, password: password }) 
	})
  
	if(!resp.ok) throw Error("There was a problem in the login request")
  
	if(resp.status === 401){
		 throw("Invalid credentials")
	}
	else if(resp.status === 400){
		 throw ("Invalid email or password format")
	}
	const data = await resp.json()
	// save your token in the localStorage
   //also you should set your user into the store using the setStore function
	localStorage.setItem("jwt-token", data.token);
  
	return data
  }

  const getMyTasks = async (email, password) => {
	// retrieve token form localStorage
	const token = localStorage.getItem('jwt-token');
  
	const resp = await fetch(`https://3001-meryvl-authenticationsy-xqz8br0syug.ws-eu97.gitpod.io/protected`, {
	   method: 'GET',
	   headers: { 
		 "Content-Type": "application/json",
		 "Authorization": 'Bearer '+token // ⬅⬅⬅ authorization token
	   } 
	})
	if(!resp.ok){
	  throw Error("There was a problem in the login request")
	} 
  
	else if(resp.status === 403){
		throw Error("Missing or invalid token");
	}
   
  
	const data = await resp.json();
	console.log("This is the data you requested", data);
	return data
  
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
  userLogeado, setUserLogeado,
  coments ,setComents
}
const actions={
  fetchMovies,
  searchMovies,
  fetchMovie,
  selectMovie,
  log,
  getMyTasks

}

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);


export default AppContextProvider;