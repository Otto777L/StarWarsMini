import React, {useContext} from "react";
import "../../styles/info-cards.css";
import { Context } from "../store/appContext";
import { DetailedCard } from "../views/DetailedCard";
import { Link, useParams } from "react-router-dom";

export const InfoCards = ({item, type}) => {
  
  const {store, actions} = useContext(Context);
  
    return (
      <div className="card col-3 m-3">
          <img src={`https://starwars-visualguide.com/assets/img/${type}/${item.uid}.jpg`} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <Link className="btn btn-primary" to={`/DetailedCard/${type}/${item.uid}`}>
                    <span href="#" className="">Learn more!</span>
              </Link>
          </div>
      </div>
    )  
};