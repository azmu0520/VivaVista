import React, { useState } from 'react';
import { Wrap, Nav, Rest } from './style';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { data } from '../../utilits/sidebar';

const Navbar = () => {
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  return (
    <Wrap>
      <Nav menu={menu}>
        <Nav.Logo_Wrap onClick={() => setMenu(!menu)}>
          <Nav.Logo />
          <Nav.Logo_Text menu={menu}>Webbrain Academy</Nav.Logo_Text>
        </Nav.Logo_Wrap>
        <Nav.Links>
          {data.map(({ id, title, path, Icon }) => (
            <NavLink key={id} to={path}>
              <Nav.Link active={(location.pathname == path).toString()}>
                <Icon className='nav__icon' />
                <Nav.Link_Text
                  menu={menu}
                  active={(location.pathname == path).toString()}
                >
                  {title}
                </Nav.Link_Text>
              </Nav.Link>
            </NavLink>
          ))}
        </Nav.Links>
      </Nav>
      <Rest>
        <Outlet />
      </Rest>
    </Wrap>
  );
};

export default Navbar;
