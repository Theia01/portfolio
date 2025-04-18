import { NavLink } from "react-router";

function NavBarLink({ link, title, isMenuHamburger = false }) {
  return (
    <>
      <li
        className="p-1"
        onClick={
          isMenuHamburger &&
          (() => {
            document.getElementById("my-drawer-4")?.click();
          })
        }
      >
        <NavLink to={link}>{title}</NavLink>
      </li>
    </>
  );
}

export default NavBarLink;
