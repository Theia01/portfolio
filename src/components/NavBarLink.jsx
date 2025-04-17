import { NavLink } from "react-router";

function NavBarLink({ link, title }) {
  return (
    <>
      <li
        className="p-1"
        onClick={() => {
          document.getElementById("my-drawer-4")?.click();
        }}
      >
        <NavLink to={link}>{title}</NavLink>
      </li>
    </>
  );
}

export default NavBarLink;
