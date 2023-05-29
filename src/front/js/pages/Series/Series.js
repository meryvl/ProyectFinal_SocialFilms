import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAppContext } from "../../store/appContext";
import "../../pages/Series/Series.css";
import ButtonSearch from "../../component/ButtonSearch";
import Banner from "../../component/Banner/Banner";
const Series =()=>{
const [series , setSeries] = useState([])
const [serie , setSerie]= useState([])
const {store, actions} = useAppContext();
const { searchKey, setSearchkey, trailer , setTrailer, playing , setPlaying, 
  API_KEY,
  API_URL,
  IMAGE_PATH,
  URL_IMAGE} = store


  const fetchSeries = async(searchKey) =>{
	const type = searchKey ? "search" : "discover"
	//se le hace la peticion  con lka url con el typo que seria lo que estamos buscando
	const {data : {results} ,
}= await axios.get(`${API_URL}/${type}/tv`, {
	//Enviamos un encabezado o parametro con la key  para verificar que tenemos la sesion y lo que estamos buscando 
	params :{
	api_key:API_KEY,
	query: searchKey,
},
});
setSeries(results)
//la primera posicion del resultado 
setSerie(results[0])

if(results.length){
	await fetchSerie(results[0].id)
}
}
const fetchSerie = async(id)=>{
  const {data} = await axios.get (`${API_URL}/tv/${id}`, {
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
  setSerie(data)
  }
  
  const selectSerie = async(serie)=>{
    fetchSerie(serie.id)
    setSerie(serie)
    window.scrollTo(0,0)
  }

  const searchMovies =(e)=>{
    e.preventDefault();
    fetchSeries(searchKey)
  }
useEffect(()=>{
fetchSeries()
},[])

return(<>

 <h1>Series</h1>
 <ButtonSearch  setSearchkey={setSearchkey}  searchMovies={searchMovies} />
 <Banner IMAGE_PATH={IMAGE_PATH} movie={serie}  trailer={trailer} setPlaying={setPlaying} playing={playing}/> 
 <div className="container mt-3 ">
<div className="row">
{series.map((serie)=>{
return(
    <>
  
    <div className="col-4 mb-2 CardSeries " key={serie.id} >
    <img className="imgCardSeries img-fluid" src={`${URL_IMAGE + serie.poster_path}`} alt="" height={450} width="100%" onClick={()=> selectSerie(serie)}/>
    <h3 className="NameTV">{serie.name}</h3>
    </div>
  
    </>
    
)
})}
  </div>
    </div>
</>   
)
}
export default Series;