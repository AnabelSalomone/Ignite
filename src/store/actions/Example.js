import axios from "axios";

// ACTION: object that has a type and that describes what you want to do
// I wanna fetch the games. Dispatch sends the type to the reducer so
// it modifies the data

/*EXAMPLE*/
const exampleGames = () => {
  return { type: "EXAMPLE_GAMES" };
};

//You can also send date so the action applies with a certain information
/*EXAMPLE*/
const exampleSearchGame = (game) => {
  return {
    type: "EXAMPLE_SEARCH_GAME",
    payload: game,
  };
};

// REDUX THUNK: asynchronous fetching of data
export const exampleLoadGames = (evantualActionPayload) => async (dispatch) => {
  //calls an API
  const games = await axios.get(`https://example.com/${eventualActionPayload}`);
  dispatch({
    type: "EXAMPE_LOAD_GAME",
    payload: games,
  });
};
