import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/home" activeStyle>
            <i class="fi fi-rr-house-blank"></i>Home
          </NavLink>
          <NavLink to="/library" activeStyle>
            <i class="fi fi-rr-bookmark"></i>Library
          </NavLink>
          
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
