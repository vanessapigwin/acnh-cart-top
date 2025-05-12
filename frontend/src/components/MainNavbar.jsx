import { NavLink } from "react-router-dom";
import "./navbar.css";
import cartlogo from "../assets/cart.png";
import { useLocation } from "react-router-dom";

function NavContent({ content }) {
  let location = useLocation();
  const pathname = location.pathname;
  const textStyle = {
    color: pathname === "/" ? "#ffffff" : "#3f3f3f",
    textDecoration: pathname === "/" ? " #ffffff" : " #3f3f3f",
  };

  return <span style={textStyle}>{content}</span>;
}

function NavImg({ img }) {
  let location = useLocation();
  const pathname = location.pathname;
  const imgStyle = {
    filter: pathname === "/" ? "" : "invert(0.7)",
  };

  return <img className="logo" style={imgStyle} src={img} />;
}

export default function MainNavbar() {
  return (
    <nav>
      <div className="navcontent">
        <ul>
          <li>
            <NavLink to="/" viewTransition>
              <NavContent content="Home" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/store" viewTransition>
              <NavContent content="Store" />
            </NavLink>
          </li>
        </ul>
        <NavLink to="/cart" viewTransition>
          <NavImg img={cartlogo} />
        </NavLink>
      </div>
    </nav>
  );
}
