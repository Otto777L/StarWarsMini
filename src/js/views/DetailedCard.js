import React, {useEffect, useState, useContext} from "react";
import "../../styles/detailed-card.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const DetailedCard = (item, type) => {

    const params = useParams(); // esto guarda los datos de la ruta por defecto
    const {store, actions} = useContext(Context);

    useEffect(() => {
        actions.getInfoDetails(params.id, params.type); // asi se consulta el params
    }, []);

    console.log(store.details);
    
    return (            
            <div className="container">
                <div className="row">
                    <div className="p-1 col-lg-5 col-md-5 col-5">
                        <img src={`https://starwars-visualguide.com/assets/img/${params.type == "people" ? "characters" : params.type}/${params.id}.jpg`} alt="..."/>
                    </div>
                    <div className="p-5 col-md-5 col-5">
                        <div className="about-text">
                        <h2><strong> {store.details.properties == undefined ? "" : store.details.properties.name} </strong></h2>
                        <h4> Gender: </h4>
                        <h4> Hair-color: </h4>
                        <h4> Eye-Color: </h4>
                        </div>
                    </div>
                </div>
            </div>)
}