import { NavLink } from "react-router";

function NavBarLink({ link, title, isMenuHamburger = false }) {
  return (
    <>
      <li
        className="p-1"
        onClick={
          // Problème sur menu ouvrant qui ne se retire pas une fois le lien cliquer
          // De base le composant daisy.ui esperait un rechargement de la page pour disparaître
          // mais ici nous ne rechargons que l'intérieur des pages, donc on force la disparition
          // du drawer-slide du menu ouvrant en cliquant sur la checkbox
          // Il ne doit être fais seulement en mobile car sinon en mode web, l'overlay apparait
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
