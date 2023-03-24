import React, {useEffect, useState} from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { InfoCards } from "../component/InfoCards";

export const Home = () => {

	const [charList, setCharList] = useState(null);// en la izquierda esta la variable y la derecha es la funcion que la modifica!
	const [planetsList, setPlanetsList] = useState({});
	const [vehicleList, setVehicleList] = useState({});

		/*startList: Inicia la lista (siempre debe existir un elemento, hay condicionales para 
		mostrar vacia la lista mientras solo tenga el elemento inicial con el que se creó)*/

	const getCharData = () => {
		fetch('https://www.swapi.tech/api/people', {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
		})
		.then(resp => {
			//console.log(resp.ok); // will be true if the response is successfull
			//console.log(resp.status); // the status code = 200 or code = 400 etc.        
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			//here is were your code should start after the fetch finishes
			//console.log("Data puf");
			//console.log(data); //this will print on the console the exact object received from the server
			console.log(data);
			setCharList(data);
		})
		.catch(error => {
			//error handling
			console.log(error);
		});
	}

	const getPlanetsData = () => {
		fetch('https://www.swapi.tech/api/planets', {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
		})
		.then(resp => {
			//console.log(resp.ok); // will be true if the response is successfull
			//console.log(resp.status); // the status code = 200 or code = 400 etc.        
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			//here is were your code should start after the fetch finishes
			//console.log("Data puf");
			console.log(data); //this will print on the console the exact object received from the server
			setPlanetsList(data);
		})
		.catch(error => {
			//error handling
			console.log(error);
		});
	}

	const getVehiclesData = () => {
		fetch('https://www.swapi.tech/api/vehicle', {
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
		})
		.then(resp => {
			//console.log(resp.ok); // will be true if the response is successfull
			//console.log(resp.status); // the status code = 200 or code = 400 etc.        
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			//here is were your code should start after the fetch finishes
			//console.log("Data puf");
			//console.log(data); //this will print on the console the exact object received from the server
			console.log(data);
			setVehicleList(data);
		})
		.catch(error => {
			//error handling
			console.log(error);
		});
	}

	useEffect(() => {
		getCharData();
		getPlanetsData();
		getVehiclesData;
	  }, []);
	
	
	return (<div className="ms-5">
				<h1>Characters</h1>
				<div className="container">
					<div className="d-flex flex-nowrap overflow-auto row">					
							{charList && charList.results.map((character, index)=>{
							return <InfoCards key={index} item={character} type="characters"/>
							})}
					</div>
				</div>
			</div>)
};
