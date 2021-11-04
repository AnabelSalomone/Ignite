// THE STATE CANNOT BE MODIFIED DIRECTLY
//Reducers are functions that take the current state and an action as arguments,
//and return a new state result. In other words, (state, action) => newState

//By convention we typically call it initialState
const initialState = {
  games: [],
  otherStuff: [],
};

export const exampleGamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EXAMPLE_FETCH_GAMES":
      return { ...state };
    case "EXAMPLE_LOAD_GAMES":
      return { ...state, games: action.payload };
    //etc...
    default:
      return { ...state };
  }
};
