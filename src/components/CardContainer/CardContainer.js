import React from "react";
import Card from "../Card/Card";
import "./CardContainer.css";

const CardContainer = ({ games }) => {
  return (
    <div className="card-container-container">
      {games && games.length > 0 && games.map((game) => <Card game={game} />)}
    </div>
  );
};

export default CardContainer;
