import { NavLink } from "react-router";

function Error404() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold">
              Page <span className="font-molle text-7xl">404</span>
            </h1>
            <p className="py-6">Wooops, il n'y a rien ici, on s'ennuie... </p>
            <button className="btn btn-primary">
              <NavLink to="/">Retourner vers l'accueil </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error404;
