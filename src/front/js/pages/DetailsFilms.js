import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const DetailsFilms=()=>{
const {id} = useParams();
const urlMovie= `https://api.themoviedb.org/3/movie/${id}?api_key=85acd1db7d013b618f9633e17890c3b8`
const [detailMovie , setDetailMovie] = useState([])
const [coment , setComent] = useState()
useEffect(()=>{
    fetch(urlMovie)
    .then(res=>res.json())
    .then(res => {
        setDetailMovie(res)
        console.log(detailMovie)
    }).catch(err=> console.log(err))
    
    },[])

    const params= useParams();
    console.log("PARAMS:", params)
    return(
        <>
        <h4 className="text-center">{detailMovie.title}</h4>



        </>
    )

}
export default DetailsFilms;