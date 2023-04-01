import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const {store, actions} = useContext(Context);
	const navigate = useNavigate();

	console.log(store.favorites);

	return (
		<nav className="navbar navbar-light mb-3 justify-content-between">
			<img className="ms-5" onClick={() => navigate("/")} src="https://www.muraldecal.com/en/img/as555-jpg/folder/products-listado-merchanthover/wall-stickers-star-wars-logo.jpg" style={{width: "100px", height: "100px"}}/>
			<div className="me-5">
			<div className="dropdown dropstart">
				<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites
				</button>
				<ul className="dropdown-menu">
					{store.favorites.length == 0 ? <li className="dropdown-item">Add a new favorite item!</li> : store.favorites.map((listItem, index)=>{ //pendiente del return, colocar la instruccion o funcion a su lado.
						return (<div key={index}>
							<Link className="" to={`/DetailedCard/${listItem.type}/${listItem.uid}`}>
									<li className="dropdown-item">{listItem.name}
										<i className="clear fa-solid fa-xmark ms-3 position-absolute end-0 me-4" onClick={()=>{
											//actions.deleteFavorite(index);
										}}></i>
									</li>	
							</Link>							
								</div>)
					})}
				</ul>
			</div>
			</div>
		</nav>
	);
};
