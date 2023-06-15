import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/xnoUtils/scrollToTop";
import { BackendURL } from "./component/xnoUtils/ackendURL";
import { Films } from "./pages/films";
import { Home } from "./pages/home";
import Login from "./pages/Login";
import CreateCuenta from "./pages/CreateCuenta";
import AppContextProvider from "./store/appContext";
import AppContextProviderUser from "./store/ContextUser";
import { Navbar1 } from "./component/Navbar/navbar";
import { Footer } from "./component/footer";
import DetailsFilms from "./pages/DetailsFilms";
import DetailSeries from "./pages/DetailSeries";
import PerfilUser from "./pages/PerfilUser";
import Series from "./pages/Series/Series";
//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <AppContextProviderUser>
            <AppContextProvider>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar1 />
                    <Routes>

                        <Route element={<Home />} path="/" />
                        <Route element={<Films />} path="/Films" />
                        <Route element={<Login/>} path="/login" />
                        <Route element={<CreateCuenta />} path="/createcuenta" />
                        <Route element={<Series />} path="/Series" />
                        <Route path="/View/:id" element={<DetailsFilms />} />
                        <Route path="/Ver/:id" element={<DetailSeries/>} />
                        <Route element={<PerfilUser />}  path="/perfilUsuario" />
                       
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
            </AppContextProvider>
            </AppContextProviderUser>
        </div>
    );
};

export default Layout;
