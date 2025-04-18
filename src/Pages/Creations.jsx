// Component
import Hero from "../components/Hero.jsx";
import Container from "../components/Container.jsx";

// Icons
import {
  IconArrayDown,
  IconGithub,
  IconOpenProject,
} from "../components/Icon.jsx";

// Images
import imgHisy from "../assets/img/project/hisy/screenshot_1.jpg";
import { NavLink } from "react-router";

function Creations() {
  return (
    <>
      <Hero>
        <h1 className="text-5xl font-bold">
          Rien de mieux qu'un tour d'horizon pour vous donner des idées
        </h1>
        <p className="py-6">
          Défilez vers le bas pour voir certains de mes travaux
        </p>
        <button className="btn btn-ghost animate-bounce">
          <IconArrayDown />
        </button>
      </Hero>
      <Container size="max-w-2xl">
        <div className="card card-side bg-base-100 shadow-sm sm:flex-row flex-col-reverse">
          <div className="card-body">
            <h2 className="card-title">Hisy</h2>
            <p>
              {" "}
              Une application mobile basé sur le challenge #HowISeeYou.
              Représenter une personne avec neuf photo.
            </p>
            <div className="badge badge-primary">React Native</div>
            <div className="badge badge-neutral">Android</div>
            <div className="card-actions justify-end">
              <button className="btn btn-ghost">
                <IconGithub />
              </button>
              <button className="btn btn-ghost">
                <IconOpenProject />
              </button>
              <NavLink to="/creations/hisy" className="btn btn-primary">
                En apprendre plus
              </NavLink>
            </div>
          </div>
          <figure className="sm:max-w-50 sm:max-h-70 max-h-60 rounded-t-lg rounded-b-none sm:rounded-t-none sm:rounded-r-lg ">
            <img src={imgHisy} alt="Project How I See You" />
          </figure>
        </div>
      </Container>
    </>
  );
}

export default Creations;
