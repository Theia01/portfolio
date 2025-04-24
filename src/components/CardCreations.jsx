import { NavLink, Link } from "react-router";

// Icons
import {
  IconGithub,
  IconOpenProject,
} from "@components/Icons.jsx";

function CardCreations({ title, link, description, img, imgLeft = false, languages = [], others = [], github = '', site = '' }) {
  const imgReverse = imgLeft ? 'sm:flex-row-reverse' : 'sm:flex-row' ; 

  return (
    <div id="hisy" className={`card card-side bg-base-100 shadow-sm max-sm:flex-col-reverse ${imgReverse} mb-8 `}>
      <div className="card-body">
        <h2 className="card-title capitalize">{title}</h2>
        <p>
          {description}
        </p>
        <div>
          {!!languages?.length && languages.map((language, i) => <div key={i} className="badge badge-primary mr-1">{language}</div>)}
        </div>
        <div>
          {!!others?.length && others.map((other, i) => <div key={i} className="badge badge-neutral mr-1">{other}</div>)}
        </div>
        <div className="card-actions justify-end">
          {
            github && <Link target="_blank" to={github} className="btn btn-ghost">
              <IconGithub />
            </Link>
          }
          {
            site && <Link target="_blank" to={site} className="btn btn-ghost">
              <IconOpenProject />
            </Link>
          }
          <NavLink to={`/creations${link}`} className="btn btn-primary">
            En apprendre plus
          </NavLink>
        </div>
      </div>
      <figure className="sm:max-w-50 sm:max-h-70 max-h-60 rounded-t-lg rounded-b-none sm:rounded-t-none sm:rounded-r-lg ">
        <img src={img} alt={`Projet ${title}`} />
      </figure>
    </div>
  );
}

export default CardCreations;
