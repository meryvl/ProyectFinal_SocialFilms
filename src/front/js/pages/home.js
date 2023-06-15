import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { fetchTMDB } from "../store/Fetch/FetchTMDB";
import { useAppContext } from "../store/appContext";
import CardsFilms from "../component/CardFilms/CardsFilms";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerHome from "../component/home/BannerHome";
export const Home = () => {
	const {store, actions} = useAppContext();
	const {  
    API_KEY,
	  API_URL,
	  api_KEY,
	  IMAGE_PATH,
	  URL_IMAGE} = store
const [populars , setPopular] =useState([])
const [top, setTop]=useState([])
const urlPopular = API_URL+'/movie/popular'+api_KEY
const  top_rade=API_URL+'/movie/top_rated'+api_KEY
useEffect(()=>{
fetchTMDB(urlPopular,setPopular)
fetchTMDB(top_rade,setTop)

 },[])

 var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

	return (
<>
< div className="slider container">
<Slider {...settings}>
<div>

<div className="d-flex m-3">
<BannerHome item={populars} IMAGE_PATH={IMAGE_PATH} API_URL={API_URL} API_KEY={API_KEY}/>
</div>

</div>
<div></div>
<div></div>
<div></div>
    </Slider>
</div>
<div className="m-5">
<h3>Movies Popular</h3>
<Slider {...settings}>
      <div>
        <h3>
		<div className="d-flex">
		<div className="d-flex m-3">
{populars.map((popular)=>{
	return(<>
	<div key={popular.id} className="col-md-2 mb-3 styleCards" >
	<CardsFilms movie={popular}  URL_IMAGE={URL_IMAGE}  />
	</div>
	</>
	)
})}
</div>

</div></h3>
      </div>
      <div>
        <h3></h3>
      </div>
      <div>
        <h3></h3>
      </div>
      <div>
     
      </div>
    </Slider>
	</div>

	<div className="m-5">
	<h3>Top Rated</h3>
<Slider {...settings}>
      <div>
        <h3>
		<div className="d-flex m-3">
		<div className="d-flex m-3">
{top.map((popular)=>{
	return(<>
		<div key={popular.id} className="col-md-2 mb-3 styleCards" >
		<CardsFilms movie={popular}  URL_IMAGE={URL_IMAGE}   />
		</div>
		</>
	)
})}
</div>
</div></h3>
      </div>
      <div>
        <h3></h3>
      </div>
      <div>
        <h3></h3>
      </div>
      <div>
     
      </div>
    </Slider>
	</div>

</>
	);
};
