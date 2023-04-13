/* eslint-disable import/no-extraneous-dependencies */
import { Outlet, Link } from "react-router-dom";
import "../components/NavBar.scss";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Rules">Rules</Link>
          </li>
          <li>
            <Link to="/Leaderboard">Leaderboard</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
