import { NavLink } from "react-router";

function NavBarLinks() {
  return (
    <>
      <li className="p-1">
        <NavLink to="/creations">Créations Web & Mobile</NavLink>
      </li>
      <li className="p-1">
        <NavLink to="/parcours">Mon parcours</NavLink>
      </li>
      <li className="p-1">
        <NavLink to="/">Contact</NavLink>
      </li>
    </>
  );
}

export default NavBarLinks;
