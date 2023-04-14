/* eslint-disable import/no-extraneous-dependencies */
import { Outlet, Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="Rules">Rules</Link>
          </li>
          <li>
            <Link to="Leaderboard">Leaderboard</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
