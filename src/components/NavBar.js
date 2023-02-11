import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      {/*{code here}*/}
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="actors">Acotrs</NavLink>
      <NavLink to="home">Home</NavLink>
    </div>
  )
}

export default NavBar;
