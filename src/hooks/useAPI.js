import { useState } from "react";

const useAPI = () => {
  const base_url = "https://api.rawg.io/api/games";
  const date = new Date().toISOString().slice(0, 10);
  const endUrl = `?key=${process.env.REACT_APP_API_KEY}&dates=2019-09-01,${date}`;
  const parameters = "&ordering=-rating";

  const allGamesUrl = base_url + endUrl + parameters;

  // GET DLC
  const [baseGame, setBaseGame] = useState("");

  const getDlcUrl = () => {
    if (baseGame.length === 0) {
      throw Error("Tried to get DLC URL but no base game was passed");
    } else {
      return `${base_url}/${baseGame}${endUrl}${parameters}`;
    }
  };

  return { getDlcUrl, allGamesUrl, setBaseGame };
};

export default useAPI;
