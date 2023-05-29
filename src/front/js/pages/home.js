import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { fetchTMDB } from "../store/Fetch/FetchTMDB";
import { useAppContext } from "../store/appContext";
import CardsFilms from "../component/CardFilms/CardsFilms";
export const Home = () => {
	const {store, actions} = useAppContext();
	const {  
	  API_URL,
	  api_KEY,
	  IMAGE_PATH,
	  URL_IMAGE} = store
const [popular , setPopular] =useState([])
const [top, setTop]=useState([])
const urlPopular = API_URL+'/movie/popular'+api_KEY
const  top_rade=API_URL+'/movie/top_rated'+api_KEY
useEffect(()=>{
fetchTMDB(urlPopular,setPopular)
fetchTMDB(top_rade,setTop)
 },[])
	return (
<>
<h3>Movies Popular</h3>
<div className="d-flex m-3">
{popular.map((popular)=>{
	return(<>
	<div key={popular.id} className="col-md-2 mb-3 styleCards">
	<CardsFilms movie={popular}  URL_IMAGE={URL_IMAGE}  selectMovie />
	</div>
	</>
	)
})}
</div>

<h3>Top Rated</h3>
<div className="d-flex m-3">
{top.map((popular)=>{
	return(<>
		<div key={popular.id} className="col-md-2 mb-3 styleCards">
		<CardsFilms movie={popular}  URL_IMAGE={URL_IMAGE}  selectMovie />
		</div>
		</>
	)
})}
</div>
</>
	);
};
