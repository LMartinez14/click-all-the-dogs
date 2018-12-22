import React from "react";
import "./dogCards.css";

// create the cards for the dogs.json array
const Card = props => (
   
   <div className="card" onClick={() => props.clickCounter(props.id)}>
      <div className="dogImage">
         <img alt={props.name} src={props.image} />
      </div>
   </div>

);

export default Card;