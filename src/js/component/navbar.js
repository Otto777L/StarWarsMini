import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {

	const navigate = useNavigate();

	return (
		<nav className="navbar navbar-light mb-3 justify-content-between">
			<img className="ms-5" onClick={() => navigate("/")} src="https://www.muraldecal.com/en/img/as555-jpg/folder/products-listado-merchanthover/wall-stickers-star-wars-logo.jpg" style={{width: "100px", height: "100px"}}/>
			<div className="me-5">
			<div className="dropdown dropstart">
				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul>
			</div>
			</div>
		</nav>
	);
};
