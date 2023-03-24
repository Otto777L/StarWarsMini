import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3 justify-content-between">
				<img className="ms-5" src="https://www.muraldecal.com/en/img/as555-jpg/folder/products-listado-merchanthover/wall-stickers-star-wars-logo.jpg" style={{width: "100px", height: "100px"}}/>
			<div className="me-5">
					<button className="btn btn-primary">Favorites</button>
			</div>
		</nav>
	);
};
