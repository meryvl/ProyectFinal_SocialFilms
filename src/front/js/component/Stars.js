import React, {useState} from "react";
import { FaStar} from "react-icons/fa"

const  Starts = () => {
  
  const [valueStar , setValueStar]= useState(null);
  const [hover , setHover] = useState(null);
  return (<div>
Calificacion :
{
  //la clase array recoje 5 estrellas 
    [... new Array(5)].map((star, index)=>{
      const starValue = index + 1;
        return ( 
        <label>
        <input type="radio" name="valueStar" value={starValue} onClick={()=> setValueStar(starValue)}/>
        <FaStar className="star" size={15} color={starValue <=( hover || valueStar) ? "D6234A": "#616A6B "}
        onMouseEnter={()=> setHover(starValue)}
        onMouseLeave={()=> setHover(null)}
        />

        </label>
        
        )
       
        })
}
<p>{valueStar}</p>
  </div>)
 
};

export default Starts;