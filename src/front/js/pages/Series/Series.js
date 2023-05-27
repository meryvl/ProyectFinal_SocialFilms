import React, { useEffect, useState } from "react";
import { useAppContext } from "../../store/appContext";
import "../../pages/Series/Series.css";
const Series =()=>{
const [series , setSeries] = useState([])
const {store, actions} = useAppContext();
const { URL_IMAGE} = store
const fetchSeries =()=>{
return(
fetch("https://api.themoviedb.org/3/discover/tv?api_key=85acd1db7d013b618f9633e17890c3b8",)
.then(res=>res.json())
     .then(data => {console.log(data.results)
    setSeries(data.results)})
     .catch(err=> console.log(err))


)

}
useEffect(()=>{
fetchSeries()
},[])

return(<>
 <h1>Series</h1>
 <div className="container mt-3 ">
<div className="row">
{series.map((index)=>{
return(
    <>
    <div className="col-md-4 mb-3 CardSeries ">
    <img className="imgCardSeries img-fluid" src={`${URL_IMAGE + index.backdrop_path}`} alt="" height={450} width="100%"/>
    <h2>{index.name}</h2>
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