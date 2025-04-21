import { NavLink } from "react-router";
import Hero from "@components/Hero";

function MedicalReminder() {
  return (
    <>
      <Hero size="min-h-screen">
        <h1 className="text-6xl font-bold">
          Medical <span className="font-molle text-7xl">Reminder</span>
        </h1>
        <p className="py-6">Wooops, il n'y a rien ici, on s'ennuie... </p>
        <button className="btn btn-primary">
          <NavLink to="/">Retourner vers l'accueil </NavLink>
        </button>
      </Hero>
    </>
  );
}

export default MedicalReminder;
