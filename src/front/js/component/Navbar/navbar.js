import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
import "../../component/Navbar/navbar.css";
export const Navbar1 = () => {

	return (

		<Navbar variant="dark">
    
          <Navbar.Brand className="logoWeb" href="/">
		  <img className="imgNavbar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY0C12MLFdnR7hLSdHBdEE1liprPpkKiPHNA&usqp=CAU"/>
			<span className="navbar-brand mb-0 m-3 h1 letterIcon">Social Films</span>
			</Navbar.Brand> 
			<input type="checkbox" id="check"/>
			<label for="check" className="checkbtn">
			<i class="fa-sharp fa-solid fa-rectangle-list" id="btn-iconlist"></i>
			
			</label>
			<Navbar.Brand  className="navMenu " id="navMenu">
			<Nav.Link className="linkText" href="/">
			Home
			</Nav.Link>
			
			<Nav.Link className="linkText" href="/Films">
			Peliculas
			</Nav.Link>
			
			<Nav.Link className="linkText" href="/Series">
			Series
			</Nav.Link>
			
			
        </Navbar.Brand >

			<Navbar.Brand  className="justify-content-end">
			<Nav.Link href="/login" className="LinkSesion">
			
			<p  className="letterSesion">Iniciar Sesion</p>
			</Nav.Link>
        </Navbar.Brand >
   
      </Navbar>
		
					
	);
};
