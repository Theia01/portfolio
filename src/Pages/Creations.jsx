// Component
import Hero from "../components/Hero.jsx";

// Icons
import {
  IconArrayDown,
  IconGithub,
  IconOpenProject,
} from "../components/Icon.jsx";

// Images
import imgHisy from "../assets/img/project/hisy/screenshot_1.jpg";

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
        <button className="btn btn-ghost">
          <IconArrayDown />
        </button>
      </Hero>
      <div className="grid place-items-center py-15">
        <div className="max-w-2xl px-8">
          <div className="card lg:card-side bg-base-100 shadow-sm">
            <div className="card-body">
              <h2 className="card-title">Hisy</h2>
              <p>
                Une application mobile basé sur le challenge #HowISeeYou.
                Représenter une personne avec neuf photo.
              </p>
              <div className="badge badge-primary">React Native</div>
              <div className="badge badge-neutral">Android</div>
              <div className="card-actions">
                <button className="btn btn-ghost">
                  <IconGithub />
                </button>
                <button className="btn btn-ghost">
                  <IconOpenProject />
                </button>
              </div>
            </div>
            <figure className="max-w-50">
              <img src={imgHisy} alt="Hisy" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default Creations;
