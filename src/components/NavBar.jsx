import { NavLink } from "react-router";
import NavBarLink from "./NavBarLink.jsx";
import { IconMenuHamburger } from "../components/Icon.jsx";

function NavBar() {
  const links = [
    {
      link: "/",
      title: "Accueil",
    },
    {
      link: "/creations",
      title: "Créations Web & Mobile",
    },
    {
      link: "/parcours",
      title: "Mon parcours",
    },
    {
      link: "/",
      title: "Contact",
    },
  ];

  // Création de la navBarLinks en fonction si c'est pour le menu web ou mobile
  function createNavBarLinks(isMenuHamburger = false) {
    return links.map((item, i) => (
      <NavBarLink
        key={i}
        link={item.link}
        title={item.title}
        isMenuHamburger={isMenuHamburger}
      />
    ));
  }

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
            {createNavBarLinks()}
          </ul>
          <div className="drawer drawer-end min-md:hidden">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
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
                {createNavBarLinks(true)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
