import React, {useContext, useEffect, useState} from "react";
import "../../styles/info-cards.css";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const InfoCards = ({item, type}) => {

  const {store, actions} = useContext(Context);
  const [favorites, setFavorites] = useState(false);

  function addFavorite() {   
    setFavorites(true);
    actions.addFavorite(item, type)
  }

  function removeFavorite(itemName) {   
    setFavorites(false);
    actions.deleteFavorite(itemName)
  } 

  useEffect(() => {
    setFavorites(store.favorites.find((favItem, index) => {
      return favItem.name == item.name;
    })	)		
	}, [store.favorites]);
    
  /*if (favItem.type == type && favItem.uid == item.uid) {				 					
    setFavorites(true);
  } else {
    setFavorites(false);
  }
  })*/


    return (
      <div className="card col-3 m-3">          
          <img src={`https://starwars-visualguide.com/assets/img/${type == "people" ? "characters" : type}/${item.uid}.jpg`} className="card-img-top" alt="..."/> 
          <div className="card-body">            
              <h5 className="card-title">{item.name}</h5>
             <div className="d-flex justify-content-between">        
                <Link className="btn btn-primary" to={`/DetailedCard/${type}/${item.uid}`}>
                      <span href="#" className="">Learn more!</span>
                </Link>
                {!favorites ? <i className="far fa-heart like-black" onClick={() => {addFavorite()}}></i>
                : <i className="fas fa-heart like" onClick={() => {removeFavorite(item.name)}}/>}
              </div>
          </div>
      </div>
    )  
};