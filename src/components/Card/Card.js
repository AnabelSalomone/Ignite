import React from "react";
import "./Card.css";

const Card = ({ game }) => {
  console.log(game.backgroundImage);
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img className="card-image" src={game.background_image} />
      </div>
      <h2 className="card-title">{game.name}</h2>
      <div className="card-rating">{game.rating}</div>
    </div>
  );
};

export default Card;
