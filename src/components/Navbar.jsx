import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        TN AIR
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/Tienda">Tienda</NavLink>
        </li>
        <li>
          <NavLink to="/servicios">Servicios</NavLink>
          </li>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
};