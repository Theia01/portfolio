import { NavLink } from "react-router";
import Hero from "../components/Hero";

function Error404() {
  return (
    <>
      <Hero size="min-h-screen">
        <h1 className="text-6xl font-bold">
          Page <span className="font-molle text-7xl">404</span>
        </h1>
        <p className="py-6">Wooops, il n'y a rien ici, on s'ennuie... </p>
        <button className="btn btn-primary">
          <NavLink to="/">Retourner vers l'accueil </NavLink>
        </button>
      </Hero>
    </>
  );
}

export default Error404;
