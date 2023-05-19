import React, { useEffect, useState } from "react";
import { useAppContext } from "../store/appContext";

const GenreFilms =()=>{
const {store , actions} =useAppContext();

const [genrs , setGenrs] = useState([])
const [selectedGens , setSelecte]=useState([])
const fetchUrls = (url ,setState)=>{
    return (fetch(url)
     .then(res=>res.json())
     .then(res => {console.log(res.genres)
    setState(res.genres)
})
     .catch(err=> console.log(err) )
    )
   }


   
useEffect(()=>{

    fetchUrls("https://api.themoviedb.org/3/genre/movie/list?api_key=85acd1db7d013b618f9633e17890c3b8",setGenrs)
},[])

const api_url="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&?api_key=85acd1db7d013b618f9633e17890c3b8"
const hanledGenrs=( id)=>{
   const idSelect ={
    id
   }
   setSelecte(idSelect)
   console.log(selectedGens)

    return (fetch(api_url+'&with_genres='+selectedGens)
     .then(res=>res.json())
     .then(data => {console.log(data.results)

})
     .catch(err=> console.log(err) )
    )
   

   
}

return(
<>
<div className="styleList">
<div className="container">
<ul className="row ">
{genrs.map((genre)=>{
   return( <div className="col-2 taks" onClick={()=>{hanledGenrs( genre.id)}}><a href="#" >{genre.name}</a></div>)
})}

</ul>
</div>
</div>
</>

)

}

export default GenreFilms