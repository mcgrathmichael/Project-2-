<<<<<<< HEAD
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Rules from "./pages/Rules";
import LeaderboardPage from "./pages/LeaderboardPage";
=======
import RulesPage from "./rules_page/RulesPage";
>>>>>>> b761501 (gameover pop up+rules page)

function App() {
  // Only show StopWatch after 5 seconds
  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/game" element={<Game />} />
          </Route>
        </Routes>
      </BrowserRouter>
=======
      <RulesPage />
>>>>>>> b761501 (gameover pop up+rules page)
    </div>
  );
}

export default App;
