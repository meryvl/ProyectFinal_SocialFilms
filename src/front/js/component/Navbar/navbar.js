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
			<i className="fa-solid fa-rectangle-list m-3" id="btn-iconlist"></i>
			</label>
			<Navbar.Brand  className="navMenu " id="navMenu">
			
			
			<Nav.Link className="linkText" href="/">
			Peliculas
			</Nav.Link>
			
			<Nav.Link className="linkText" href="/Series">
			Series
			</Nav.Link>
			<Nav.Link className="linkText" href="/login">
			Other
			</Nav.Link>
			
        </Navbar.Brand >

			<Navbar.Brand  className="justify-content-end">
			<Nav.Link className="letterSesion" href="/login">
			<img className="iconSesion"/>
			Iniciar Sesion
			</Nav.Link>
        </Navbar.Brand >
   
      </Navbar>
		
					
	);
};
