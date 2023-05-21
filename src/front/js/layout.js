import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import Login from "./pages/Login";
import { Single } from "./pages/single";
import CreateCuenta from "./pages/CreateCuenta";
import AppContextProvider from "./store/appContext";

import { Navbar1 } from "./component/navbar";
import { Footer } from "./component/footer";
import DetailsFilms from "./pages/DetailsFilms";
//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <AppContextProvider>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar1 />
                    <Routes>

                        <Route element={<Home />} path="/" />
                        <Route element={<Login/>} path="/login" />
                        <Route element={<CreateCuenta />} path="/createcuenta" />
                        <Route path="/detailsFilms/:id" element={<DetailsFilms />} />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
            </AppContextProvider>
        </div>
    );
};

export default Layout;
