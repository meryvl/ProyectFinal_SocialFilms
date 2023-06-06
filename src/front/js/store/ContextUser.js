import React, { createContext, useContext, useState, useEffect } from "react";
import { getSee, newSee } from "./Fetch/Fetch";
const AppContextUser = createContext();

const AppContextProviderUser = ({ children }) => {
  const [Users , setUsers] = useState([])
	const [userActual , setUserActual]=useState([])
	const [userLogeado, setUserLogeado] = useState(false)
  const [coments ,setComents] =useState([])
  const [see , setSee]=useState([])

  const hanledSee=(idFilm, idUsuario)=>{
    newSee(idFilm , idUsuario)
    getSee(setSee)
      }




const  store ={
    Users , setUsers,userActual , setUserActual,userLogeado, setUserLogeado,
    coments, setComents,
    see , setSee
}
const actions={
  hanledSee
}

  return (
    <AppContextUser.Provider value={{ store, actions }}>
      {children}
    </AppContextUser.Provider>
  );
};

export const useAppContextUser = () => useContext(AppContextUser);


export default AppContextProviderUser;