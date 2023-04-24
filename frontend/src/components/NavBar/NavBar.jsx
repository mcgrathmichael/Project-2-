/* eslint-disable import/no-extraneous-dependencies */
import { Outlet, NavLink } from "react-router-dom";
import "./NavBar.scss";
import logo from "../../assets/mmlogo.png";
import { pullAll } from "lodash";

function NavBar() {
  return (
    <>
      <nav>
        <img src={logo} className="logo" alt="mmlogo" />
        <ul>
          <li>
            <NavLink
              to= {{ 
                pathname : "/", 
              // className={({ isActive, isPending }) =>
              // isPending ? "pending" : isActive ? "active" : ""}  
              
              }}
           >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="Rules">Rules</NavLink>
          </li>
          <li>
            <NavLink to = {{
              pathname:"/Leaderboard",
              
            }}
            >Leaderboard </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default NavBar;
