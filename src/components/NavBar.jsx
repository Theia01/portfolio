import { NavLink } from "react-router";
import NavBarLinks from "./NavBarLinks.jsx";
import { IconMenuHamburger } from "../components/Icon.jsx";

function NavBar() {
  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <NavLink to="/">
            <div className="btn btn-ghost text-2xl font-molle pt-1">
              Axelle.G
            </div>
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 max-md:hidden">
            <NavBarLinks />
          </ul>
          <div className="drawer drawer-end min-md:hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button">
                <IconMenuHamburger />
              </label>
            </div>
            <div className="drawer-side z-10">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <NavBarLinks />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
