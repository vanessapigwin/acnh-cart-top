import { NavLink } from "react-router-dom";
import "./navbar.css";
import cartlogo from "../assets/cart.png";

export default function MainNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" viewTransition>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/store" viewTransition>
            Store
          </NavLink>
        </li>
      </ul>
      <NavLink to="/cart" viewTransition>
        <img className="logo" src={cartlogo} />
      </NavLink>
    </nav>
  );
}
