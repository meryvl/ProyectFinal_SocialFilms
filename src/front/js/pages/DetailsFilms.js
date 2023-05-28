import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useAppContext } from "../store/appContext";

const DetailsFilms=()=>{
    const {store, actions} = useAppContext();
const { URL_IMAGE} = store
    const { id } = useParams();
const urlMovie= `https://api.themoviedb.org/3/movie/${id}?api_key=85acd1db7d013b618f9633e17890c3b8`
const [detailMovie , setDetailMovie] = useState([])
const [genres , setGenres] = useState([])
const [production , setProduction]=useState([])
const [coment , setComent] = useState()
useEffect(()=>{
    fetch(urlMovie)
    .then(res=>res.json())
    .then(res => {
        setDetailMovie(res)
        setGenres(res.genres)
        production(res.production_companies)
    }).catch(err=> console.log(err))
    
    },[])

    const params= useParams();
    console.log("PARAMS:", params)
    return(
        <>
        <div className="CardDetails m-5">
        <img className="imgDetails" src={`${URL_IMAGE + detailMovie.poster_path}`} alt="" height={450} width={400} />
        <h4 className="text-center">{detailMovie.title}</h4><p>{}</p>
        <p>{detailMovie.original_language}</p>
        <p>{detailMovie.overview}</p>
       
        
        <div className="row">
        {genres.map((res)=>{
            return(<>
            <p className="col-3">{res.name}</p>  
            </>
            )
        })}
        </div>
        </div>
        </>
    )

}
export default DetailsFilms;