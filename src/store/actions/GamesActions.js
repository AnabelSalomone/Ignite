import axios from "axios";

export const loadGames = (finalUrl) => async (dispatch) => {
  const games = await axios.get(finalUrl);

  dispatch({
    type: "LOAD_GAMES",
    payload: { loadedGames: games },
  });
};
