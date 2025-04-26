import { useEffect } from "react";

// Component
import { NavLink, Link } from "react-router";
import CardHome from "@components/CardHome.jsx";
import Container from "@components/Container.jsx";
import ContainerSection from "../components/ContainerSection";
import Hero from "@components/Hero.jsx";

// Icons
import { IconGithub, IconLinkedin, IconMail } from "@components/Icons.jsx";

function Home() {
  const services = [
    {
      title: "Visuel Graphique",
      text: "Optio velit ratione voluptatem qui repellat quis. Suscipit voluptatem officia.",
    },
    {
      title: "Site vitrine, e-commerce",
      text: "Optio velit ratione voluptatem qui repellat quis. Suscipit voluptatem.",
    },
    {
      title: "Application Mobile",
      text: "Aliquid saepe repudiandae qui placeat atque atione voluptatem qui repellat quis.",
    },
    {
      title: "Optimisation SEO",
      text: "Olorem blanditiis omnis. Qui deleniti dignissimos doloremque incidunt dicta suscipit aspernatur tenetur.",
    },
  ];

  // bug component Link in react rooter doesnt redirect with #
  useEffect(() => {
    if (/contact/.test(window.location.pathname)) {
      document.getElementById("contact").scrollIntoView();
    }
  });

  return (
    <>
      <header>
        <Hero>
          <h1 className="text-5xl font-bold">
            Enchantée ! Je suis <span className="text-primary">Axelle</span>,
          </h1>
          <p className="py-6">
            Je maquette et dévellope des applications pour vous rendre la vie
            plus <span className="font-bold">facile</span>.
          </p>
          <div className="flex justify-center pb-6 space-x-1">
            <Link className="btn btn-ghost" to="https://github.com/theia01">
              <IconGithub />
            </Link>
            <Link
              className="btn btn-ghost"
              to="https://www.linkedin.com/in/axelle-guinaudeau-2b4036172/"
            >
              <IconLinkedin />
            </Link>
            <a
              className="btn btn-ghost"
              href="mailto:axelle.guinaudeau.pro@gmail.com"
            >
              <IconMail />
            </a>
          </div>
          <NavLink
            to="/creations"
            className="btn btn-primary sm:transition sm:delay-150 sm:duration-300 sm:ease-in-out sm:hover:scale-110"
          >
            Voir mes créations
          </NavLink>
        </Hero>
      </header>
      <Container>
        <ContainerSection title="Les services que je vous propose en travaillant ensemble 🤝">
          <p>
            De formation dévellopeuse web, avec diverses expérience en
            entreprise, j'ai su acquérir de nombreux champs d'expertises pour
            vous aider à concrétiser vos idées.
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 pt-5">
            {services.map((service, i) => (
              <CardHome key={i} {...service} />
            ))}
          </div>
        </ContainerSection>
        <ContainerSection id="contact" title="Contactez-moi ✨">
          <p id="contact">
            Un projet en tête ? Je serai ravie de vous accompagner !
          </p>
          <div className="flex items-center pt-2">
            <Link
              className="btn btn-ghost"
              to="https://www.linkedin.com/in/axelle-guinaudeau-2b4036172/"
              viewTransition
            >
              <IconLinkedin />{" "}
            </Link>
            <p className="font-normal text-sm">
              https://www.linkedin.com/in/axelle-guinaudeau-2b4036172/
            </p>
          </div>
          <div className="flex items-center pt-2">
            <a
              className="btn btn-ghost"
              href="mailto:axelle.guinaudeau.pro@gmail.com"
            >
              <IconMail />
            </a>
            <p className="font-normal text-sm">
              axelle.guinaudeau.pro@gmail.com
            </p>
          </div>
        </ContainerSection>
      </Container>
    </>
  );
}

export default Home;
