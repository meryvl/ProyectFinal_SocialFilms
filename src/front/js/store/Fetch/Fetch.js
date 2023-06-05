export const Backend_URL = process.env.BACKEND_URL || "";
import { token } from "../../servicios/Token";
export const getUser =(setState)=>{
    return(
		fetch(Backend_URL+'/users', {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(resp => {
              console.log(resp.ok); // will be true if the response is successfull
              return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
          })
          .then(data => {
            console.log(data); //this will print on the console the exact object received from the server
            setState(data);
            
          })
          .catch(error => {console.log(error);}));  //Error handling
      };

     
     
   



      export const register = async(name, lastname , email , password ,setRes) => {
        const resp = await fetch(Backend_URL+'/new',{ 
          method: "POST",
          headers: { "Content-Type": "application/json" },
                   body:JSON.stringify({
                    name:name, 
                    lastname: lastname ,
                    email: email ,
                    password: password}),
               }) 
               if(!resp.ok){
                setRes("There was a problem in the login request")
                throw Error("There was a problem in the login request")
              } 
              else if(resp.status === 400){
                setRes("Invalid credentials")
                   throw ("Invalid email or password format")   
              }
            setRes("registro ok")
            getUser()
            }


export const fecthDatosUser =async (setDatos)=>{
  const res = await fetch(Backend_URL+`/user/`+token.user)
  const data = await res.json();
  console.log(data);
  setDatos(data);
}


export const getComents=(setState)=>{
  return(
		fetch(Backend_URL+'/Coments', {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then((res) =>res.json())
    .then((data)=>{console.log(data)
    setState(data)})
    .catch(eror =>console.log(eror))
    )}


      export const getComentsFilm=(setState,idFilm)=>{
        return(
          fetch(Backend_URL+'/Coments/'+idFilm, {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json"
                  }
                })
                .then((res) =>res.json())
    .then((data)=>{console.log(data)
    setState(data)})
    .catch(eror =>console.log(eror))
        )};
      

export const newComent=(idUsuario,text, idFilm)=>{
  return(
    fetch(Backend_URL+'/newComent',{
        method:'POST',
        body:JSON.stringify({idUsuario:idUsuario, text:text , idFilm :idFilm}),
        headers:{
            "Content-Type": "application/json",
            
        }
    })
    .then((res) =>{
       console.log(res)
    
        
    })
    .catch(eror =>console.log(eror))
)}



export const getSee=(setState)=>{
  return(
		fetch(Backend_URL+'/listSee', {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
          .then(resp => {
              console.log(resp.ok); // will be true if the response is successfull
              return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
          })
          .then(data => {
            console.log(data); //this will print on the console the exact object received from the server
            setState(data);
            
          })
          .catch(error => {console.log(error);}));  //Error handling
      };

export const newSee = async(idFilm, nameFilm,urlApi,idUsuario) => {
  const resp = await fetch(Backend_URL+'/newSee',{ 
    method: "POST",
    headers: { "Content-Type": "application/json" },
             body:JSON.stringify({
              idFilm: idFilm,
              nameFilm: nameFilm,
              urlApi: urlApi,
              idUsuario: idUsuario}),
         }) 
         if(!resp.ok){
          
          throw Error("There was a problem in the login request")
        } 
        else if(resp.status === 400){
         
             throw ("Invalid email or password format")   
        }
      
      getSee()
      }




