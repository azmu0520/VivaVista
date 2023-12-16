import { NavLink, Outlet } from "react-router-dom";
import { AntModal, Links, Wrap } from "./style";
import logo from "../../assets/images/logo.png";
import { data } from "../../utilities/navbar";
import search from "../../assets/icons/search.svg";
import user from "../../assets/icons/user.svg";
import cart from "../../assets/icons/cart.svg";
import { useState } from "react";

export default function Navbar() {
  const [modal, setModal] = useState(false);
  const handleCancel = () => setModal(false);
  return (
    <>
      <Wrap>
        <AntModal
          title="ACCOUNT SETTINGS"
          open={modal}
          onCancel={handleCancel}
          footer={null}
        >
          <ul className="modal_account">
            <li>
              <NavLink to="/account" onClick={handleCancel}>
                My Account
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" onClick={handleCancel}>
                Forgot Password
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" onClick={handleCancel}>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" onClick={handleCancel}>
                Login
              </NavLink>
            </li>
          </ul>
        </AntModal>
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
            <img src={user} alt="user" onClick={() => setModal(true)} />
            <img src={cart} alt="cart" />
          </div>
        </div>
      </Wrap>
      <Outlet />
    </>
  );
}
