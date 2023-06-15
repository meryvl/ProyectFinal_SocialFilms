import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useAppContext } from "../store/appContext";
import Coment from "../component/Comentarios/Coment";
import { AddSee } from "../component/AddSee/AddSee";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const DetailsFilms=()=>{
    const {store, actions} = useAppContext();
const {API_URL,api_KEY,IMAGE_PATH,URL_IMAGE} = store
    const { id } = useParams();
const urlMovie= `${API_URL}/movie/${id}+${api_KEY}`
const urlcredits=`https://api.themoviedb.org/3/movie/${id}/credits?api_key=85acd1db7d013b618f9633e17890c3b8`
const [detailMovie , setDetailMovie] = useState([])
const [genres , setGenres] = useState([])
const [production , setProduction]=useState([])
const [credits , setCredits]=useState([])
useEffect(()=>{
    fetch(urlMovie)
    .then(res=>res.json())
    .then(res => {
        setDetailMovie(res)
        setGenres(res.genres)
        setProduction(res.production_companies)
    }).catch(err=> console.log(err))
    fetch(urlcredits).then(res=>res.json())
    .then(res => {setCredits(res.cast)}).catch(err=> console.log(err))
    },[])
   
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    const params= useParams();
    console.log("PARAMS:", params)
    return(
        <>
        <div className="CardDetails m-5 ">
        <div
             className="backgroundImage"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${detailMovie.backdrop_path}")`,
              }}
            >
                <div className="container">
        <img className="imgDetails m-3" src={`${URL_IMAGE + detailMovie.poster_path}`} alt="" height={300} width={300} />
       
        <div className="m-5">
        <h4 className="text-center">{detailMovie.title}</h4><p>{}</p>
        <p>{detailMovie.original_language}</p>
        <p>{detailMovie.adult == false ? " " : detailMovie.adult }</p>
        <p className="fs-6">{detailMovie.overview}</p>
        <div className="row">
        {genres.map((res)=>{
            return(<>
            <p className="col-3 genres">{res.name}</p>  
            </>
            )
        })}
        </div> 
        </div>
        </div>
        </div>
        <Slider {...settings}>
<div>
        <div className="d-flex">
       {credits.map((credit)=>{
        return(<>
        <div className="text-center m-2">
            <img src={`${URL_IMAGE+credit.profile_path}`} alt="" height={150} width={150}/>
         <p>{credit.name}</p>
         <p>{credit.character}</p>
        
         </div>
        </>
           
        )
       })}
        </div>
</div>
<div></div>
<div></div>
<div></div>
<div></div>

</Slider>
        <Coment idFilm={id}/>
        </div>
        </>
    )

}
export default DetailsFilms;