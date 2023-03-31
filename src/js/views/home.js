import React, {useEffect, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { InfoCards } from "../component/InfoCards";

export const Home = () => {

	const [charList, setCharList] = useState();// en la izquierda esta la variable y la derecha es la funcion que la modifica!
	const [planetsList, setPlanetsList] = useState();
	const [vehicleList, setVehicleList] = useState();

		/*startList: Inicia la lista (siempre debe existir un elemento, hay condicionales para 
		mostrar vacia la lista mientras solo tenga el elemento inicial con el que se creó)*/

	const getData = async () => {
		try {
			const responseChar = fetch('https://www.swapi.tech/api/people');
			const responsePlanet = fetch('https://www.swapi.tech/api/planets');
			const responseVehicle = fetch('https://www.swapi.tech/api/vehicles');
			let [characters, planets, vehicles] = await Promise.all([responseChar, responsePlanet, responseVehicle]);
			if (characters.ok) {				
				let body = await characters.json(); // con let solo existe dentro de este pedazo de codigo, buscar hoisting
				setCharList(body.results);
			}
			if (planets.ok) {
				let body = await planets.json();	
				setPlanetsList(body.results);
			}
			if (vehicles.ok) {
				let body = await vehicles.json();
				setVehicleList(body.results)
			}
		} catch (error) {
			
		}
	}

	useEffect(() => {
		getData();
	  }, []);
	
	
	return (<div className="ms-5">
				<h1>Characters</h1>
				<div className="container">
					<div className="d-flex flex-nowrap overflow-auto row">					
							{charList && charList.map((character, index)=>{
							return <InfoCards key={index} item={character} type="people"/>
							})}
					</div>
				</div>
				<h1>Planets</h1>
				<div className="container">
					<div className="d-flex flex-nowrap overflow-auto row">					
							{planetsList && planetsList.map((planet, index)=>{
							return <InfoCards key={index} item={planet} type="planets"/>
							})}
					</div>
				</div>				
				<h1>Vehicles</h1>
				<div className="container">
					<div className="d-flex flex-nowrap overflow-auto row">					
							{vehicleList && vehicleList.map((vehicle, index)=>{
							return <InfoCards key={index} item={vehicle} type="vehicles"/>
							})}
					</div>
				</div>
			</div>)
};
