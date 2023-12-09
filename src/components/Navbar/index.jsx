import { NavLink, Outlet } from "react-router-dom";
import { Links, Wrap } from "./style";
import logo from "../../assets/images/logo.png";
import { data } from "../../utilities/navbar";
import search from "../../assets/icons/search.svg";
import user from "../../assets/icons/user.svg";
import cart from "../../assets/icons/cart.svg";

export default function Navbar() {
  return (
    <>
      <Wrap>
        <div className="container">
          <div className="image-container">
            <img src={logo} alt="logo" />
          </div>
          <Links>
            {data.map(({ id, title, path }) => (
              <NavLink key={id} to={path}>
                {title}
              </NavLink>
            ))}
          </Links>

          <div className="controllers">
            <img src={search} alt="search" />
            <img src={user} alt="user" />
            <img src={cart} alt="cart" />
          </div>
        </div>
      </Wrap>
      <Outlet />
    </>
  );
}
