import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { fetchTMDB } from "../store/Fetch/FetchTMDB";
import { useAppContext } from "../store/appContext";
export const Home = () => {
	const {store, actions} = useAppContext();
	const {  
	  API_KEY,
	  API_URL,
	  IMAGE_PATH,
	  URL_IMAGE} = store
const [popular , setPopular] =useState([])
const [top, setTop]=useState([])
const urlPopular = 'https://api.themoviedb.org/3/movie/popular?api_key=85acd1db7d013b618f9633e17890c3b8'
const  top_rade='https://api.themoviedb.org/3/movie/top_rated?api_key=85acd1db7d013b618f9633e17890c3b8'
useEffect(()=>{
fetchTMDB(urlPopular,setPopular)
fetchTMDB(top_rade,setTop)
 },[])
	return (
<>
<h3>Movies Popular</h3>
<div className="d-flex m-3">
{popular.map((popular)=>{
	return(
	<div className="m-1">	
	<img src={`${URL_IMAGE+popular.poster_path}`} width={200} height={200}/>
	<p>{popular.title}</p>
	</div>
	)
})}
</div>

<h3>Top Rated</h3>
<div className="d-flex m-3">
{top.map((popular)=>{
	return(
	<div className="m-1">	
	<img src={`${URL_IMAGE+popular.poster_path}`} width={200} height={200}/>
	<p>{popular.title}</p>
	</div>
	)
})}
</div>
</>
	);
};
