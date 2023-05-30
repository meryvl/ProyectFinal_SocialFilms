import React, { createContext, useContext, useState, useEffect } from "react";
const AppContextUser = createContext();

const AppContextProviderUser = ({ children }) => {
    const [Users , setUsers] = useState([])
	const [userActual , setUserActual]=useState([])
	const [userLogeado, setUserLogeado] = useState(false)
    const [coments ,setComents] =useState([])




const  store ={
    Users , setUsers,userActual , setUserActual,userLogeado, setUserLogeado,
    coments, setComents
}
const actions={
  
}

  return (
    <AppContextUser.Provider value={{ store, actions }}>
      {children}
    </AppContextUser.Provider>
  );
};

export const useAppContextUser = () => useContext(AppContextUser);


export default AppContextProviderUser;