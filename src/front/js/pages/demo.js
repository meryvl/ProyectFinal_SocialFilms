import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";



export const Demo = () => {


	return (
		<div className="container">
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
