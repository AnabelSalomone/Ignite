import { useEffect } from "react";
import useAPI from "./hooks/useAPI";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "./store/actions/GamesActions";
import CardContainer from "./components/CardContainer/CardContainer";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { allGamesUrl } = useAPI();

  const games = useSelector((state) => state.games.games);

  useEffect(() => {
    dispatch(loadGames(allGamesUrl));
  }, [allGamesUrl, dispatch]);

  return (
    <div className="app-root">
      <h1>Games</h1>
      <div className="container">
        <CardContainer games={games} />
      </div>
    </div>
  );
}

export default App;
