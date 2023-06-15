
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useAppContext } from "../store/appContext";
const DetailSeries=()=>{
    const { id } = useParams();
    const params= useParams();
    console.log("PARAMS:", params)
    const {store, actions} = useAppContext();
    const {API_URL,api_KEY,IMAGE_PATH,URL_IMAGE} = store
    const urlserie= `${API_URL}/tv/${id}+${api_KEY}`
    const [detailSerie , setDetailSerie] = useState([])
    useEffect(()=>{
        fetch(urlserie)
        .then(res=>res.json())
        .then(res => {
            setDetailSerie(res)
            
        }).catch(err=> console.log(err))
        
        },[])
       
        return(
            <>
            <div className="CardDetails m-5 ">
        <div
             className="backgroundImage"
              style={{
                backgroundImage: `url("${IMAGE_PATH}${detailSerie.backdrop_path}")`,
              }}
            >
                <div className="container">
        <img className="imgDetails m-3" src={`${URL_IMAGE + detailSerie.poster_path}`} alt="" height={300} width={300} />
        <div className="m-5">
        <h4 className="text-center">{detailSerie.name}</h4><p>{}</p>
        <p className="fs-6">{detailSerie.overview}</p>
        </div>
        </div>

            </div> 
            </div>
            
            </>
        )


}
export default DetailSeries;