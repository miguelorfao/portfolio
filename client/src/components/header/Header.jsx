import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header({ children }) {
  const [toggled, setToggled] = useState(false);
  return (
    <div style={{ display: "flex", height: "100%", minHeight: "100vh" }}>
      <Sidebar
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="always"
        backgroundColor="black"
        width="210px"
      >
        <Menu>
          <MenuItem>
            <Link to="/Profile">Profile</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/Projects">Projects</Link>
          </MenuItem>

          <MenuItem>
            <Link to="/Contact">Contact</Link>
          </MenuItem>
        </Menu>
      </Sidebar>

      <main className="container vh-100">
        {" "}
        <div>
          <i
            class="fa-solid fa-bars fa-2x m-2 ms-3"
            onClick={() => setToggled(!toggled)}
          ></i>
        </div>{" "}
        {children}
      </main>
    </div>
  );
}

export default Header;
