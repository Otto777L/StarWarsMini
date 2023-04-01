import React, {useContext} from "react";
import "../../styles/detailed-card.css";
import { Context } from "../store/appContext";

export const CardDescription = ({type}) => {
    
    const {store, actions} = useContext(Context);
    
    return (
        <div className="p-5 col-md-5 col-5">
            {type == "people" ? 
                <div className="about-text">
                    <h2><strong> {store.details.properties == undefined ? "" : store.details.properties.name} </strong></h2>
                    <h4> Gender: {store.details.properties == undefined ? "" : store.details.properties.gender}</h4>
                    <h4> Height: {store.details.properties == undefined ? "" : store.details.properties.height}cm</h4>
                    <h4> Hair-color: {store.details.properties == undefined ? "" : store.details.properties.hair_color}</h4>
                    <h4> Eye-Color: {store.details.properties == undefined ? "" : store.details.properties.eye_color}</h4>
                    <h4> Skin-Color: {store.details.properties == undefined ? "" : store.details.properties.skin_color}</h4>                        
                </div> : type == "planets" ? 
                    <div className="about-text">
                        <h2><strong> {store.details.properties == undefined ? "" : store.details.properties.name} </strong></h2>
                        <h4> Diameter: {store.details.properties == undefined ? "" : store.details.properties.diameter}</h4>
                        <h4> Gravity: {store.details.properties == undefined ? "" : store.details.properties.gravity}</h4>
                        <h4> Population: {store.details.properties == undefined ? "" : store.details.properties.population} approx.</h4>
                        <h4> Climate: {store.details.properties == undefined ? "" : store.details.properties.climate}</h4>
                        <h4> Terrain: {store.details.properties == undefined ? "" : store.details.properties.terrain}</h4>                        
                    </div> : type == "vehicles" ? 
                        <div className="about-text ms-3">
                            <h2><strong> {store.details.properties == undefined ? "" : store.details.properties.name} </strong></h2>
                            <h4> Model: {store.details.properties == undefined ? "" : store.details.properties.model}</h4>
                            <h4> Vehicle Class: {store.details.properties == undefined ? "" : store.details.properties.vehicle_class}</h4>
                            <h4> Cost: {store.details.properties == undefined ? "" : store.details.properties.cost_in_credits} credits</h4>
                            <h4> Passengers: {store.details.properties == undefined ? "" : store.details.properties.passengers}</h4>
                            <h4> Crew: {store.details.properties == undefined ? "" : store.details.properties.crew}</h4>                        
                        </div> : <h2><strong> Loading error: Incorrect type </strong></h2>
            }
            
        </div>
    )
}