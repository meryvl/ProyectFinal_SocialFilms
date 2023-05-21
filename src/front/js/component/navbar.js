import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ButtonSearch from "./ButtonSearch";
export const Navbar1 = () => {

	return (

		<Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">
		  <img className="imgNavbar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY0C12MLFdnR7hLSdHBdEE1liprPpkKiPHNA&usqp=CAU"/>
			<span className="navbar-brand mb-0 m-3 h1 letterIcon">Social Films</span>
			</Navbar.Brand> 
			
			<Navbar.Brand  className="justify-content-end">
			<Nav.Link href="/login">
			Iniciar Sesion
			</Nav.Link>
        </Navbar.Brand >
        </Container>
      </Navbar>
		
					
	);
};
