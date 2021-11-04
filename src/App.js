import { useEffect } from "react";
import { finalUrl } from "./utils/api";
import { useDispatch } from "react-redux";
import { loadGames } from "./store/actions/GamesActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames(finalUrl));
  }, []);
  return <h1>Games</h1>;
}

export default App;
