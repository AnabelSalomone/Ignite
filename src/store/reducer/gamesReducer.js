const initialState = {
  games: [],
};

export const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_GAMES":
      return { ...state, games: action.payload.loadedGames.data.results };
    case "LOAD_DLC_FOR_GAME":
      return {...state, dlc: action.payload.dlc}
    default:
      return { ...state };
  }
};
