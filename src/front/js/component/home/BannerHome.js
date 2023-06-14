import React from "react";
const BannerHome=({item , IMAGE_PATH})=>{
    return(<>
    {item.map((item)=>{
	return(<>
    <div className='col-12 m-3'>
        <div className='coverImage' style={{
                backgroundImage: `url("${IMAGE_PATH}${item.backdrop_path}")`,
              }}>
	    <h5>{item.title}</h5>
        
        <button>Ver Trailer</button>
         </div>
    </div>
    
	</>
	)
})}
    </>)
}
export default BannerHome;