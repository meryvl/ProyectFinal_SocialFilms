import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (

		
		<nav className="navbar navbar-dark bg-dark">
			<div className="container">


				<Link to="/">
				<img className="imgNavbar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY0C12MLFdnR7hLSdHBdEE1liprPpkKiPHNA&usqp=CAU"/>
					<span className="navbar-brand mb-0 m-3 h1 letterIcon">Social Films</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Iniciar Sesion</button>
					</Link>
					</div>
					
			
			

 
			</div>
		</nav>
	);
};
