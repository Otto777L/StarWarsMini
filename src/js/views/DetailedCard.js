import React, {useEffect, useState} from "react";
import "../../styles/detailed-card.css";

export const DetailedCard = (item, type) => {

    console.log(item);
    
    return (
        <div className="card col-3 m-3">
            <img src={`https://starwars-visualguide.com/assets/img/${type}/${item.uid}.jpg`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
            </div>
		</div>)
}