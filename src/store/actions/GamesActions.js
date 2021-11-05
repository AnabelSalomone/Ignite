import axios from "axios";

export const loadGames = (finalUrl) => async (dispatch) => {
  const games = await axios.get(finalUrl);

  dispatch({
    type: "LOAD_GAMES",
    payload: { loadedGames: games },
  });
};

export const loadDlcForGame = (finalUrl) => async (dispatch) => {
  const dlc = await axios(finalUrl);

  dispatch({
    type: "LOAD_DLC_FOR_GAME",
    payload: { dlc: dlc },
  });
};
