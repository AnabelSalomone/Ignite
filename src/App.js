import { useEffect } from "react";
import useAPI from "./hooks/useAPI";
import { useDispatch } from "react-redux";
import { loadGames } from "./store/actions/GamesActions";

function App() {
  const dispatch = useDispatch();
  const {allGamesUrl, getDlcUrl} = useAPI();

  useEffect(() => {
    dispatch(loadGames(allGamesUrl));
  }, []);
  return (
    <div>
      <h1>Games</h1>
    </div>
  );
}

export default App;
