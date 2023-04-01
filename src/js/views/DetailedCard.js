import React, {useEffect, useState, useContext} from "react";
import "../../styles/detailed-card.css";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { CardDescription } from "../component/CardDescription";

export const DetailedCard = () => {

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
                    <CardDescription type={params.type} ></CardDescription>                    
                </div>
            </div>)
}