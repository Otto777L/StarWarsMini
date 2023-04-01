import React, {useContext, useEffect, useState} from "react";
import "../../styles/info-cards.css";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const InfoCards = ({item, type}) => {

  const {store, actions} = useContext(Context);
  const [favorites, setFavorites] = useState(false);

  function addFavorite() {   
    setFavorites(true) 
    actions.addFavorite(item, type)
  }

  function removeFavorite() {   
    setFavorites(false) 
    //actions.deleteFavorite(item, type)
  } 

  useEffect(() => {
    store.favorites.map((favItem, index) => {
			if (favItem.type == type && favItem.uid == item.uid) {				 					
				setFavorites(true);
			} else {
        setFavorites(false);
      }
			})
	}, []);
    
    return (
      <div className="card col-3 m-3">          
          <img src={`https://starwars-visualguide.com/assets/img/${type == "people" ? "characters" : type}/${item.uid}.jpg`} className="card-img-top" alt="..."/> 
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center"> 
              <h5 className="card-title">{item.name}</h5>
              {!favorites ? <img src="https://cdn-icons-png.flaticon.com/512/833/833300.png" onClick={() => {addFavorite()}} className="card-img-top like" alt="..."/> 
              : <img src="https://cdn-icons-png.flaticon.com/512/833/833472.png" onClick={() => {removeFavorite()}} className="card-img-top like" alt="..."/> }              
            </div>
              <Link className="btn btn-primary" to={`/DetailedCard/${type}/${item.uid}`}>
                    <span href="#" className="">Learn more!</span>
              </Link>
          </div>
      </div>
    )  
};