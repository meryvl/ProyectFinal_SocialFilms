import React, { useState } from "react";
import axios from "axios";
import YouTube from 'react-youtube';
const BannerHome=({item , IMAGE_PATH , API_URL, API_KEY})=>{
    const [play , setplay]=useState(false)
    const [trailer , setTrailer]=useState([])
    console.log(trailer)
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
       
        }
   
   
    const onTrailer=(id)=>{
    fetchMovie(id)
    setplay(true)

   }


    return(<>
    {item.map((item)=>{
	return(<>
    <div className='col-12 m-3'>
        <div className='coverImage' style={{
                backgroundImage: `url("${IMAGE_PATH}${item.backdrop_path}")`,
              }}>
	    
        {play ==true ? (
            <>
                  <YouTube
                    videoId={trailer.key}
                    className="reproductor container"
                    containerClassName={"youtube-container amru"}
                    opts={{
                      width: "100%",
                      height: "100%",
                      playerVars: {
                        autoplay: 1,
                        controls: 0,
                        cc_load_policy: 0,
                        fs: 0,
                        iv_load_policy: 0,
                        modestbranding: 0,
                        rel: 0,
                        showinfo: 0,
                      },
                    }}
                  />
                  <button onClick={() => setplay(false)} className="boton">
                    Close
                  </button>
                </> )
        
        : ( 
        <>
        <h5>{item.title}</h5>
        <button onClick={() => onTrailer(item.id)}>Ver Trailer</button>
        </>
        )
        }
        
         </div>
    </div>
    
	</>
	)
})}
    </>)
}
export default BannerHome;