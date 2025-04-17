// Component
import { NavLink } from "react-router";
import Card from "../components/Card.jsx";
import Container from "../components/Container.jsx";
import Hero from "../components/Hero.jsx";

// Icons
import { IconGithub, IconLinkedin, IconMail } from "../components/Icon.jsx";

function Home() {
  return (
    <>
      <header>
        <Hero>
          <h1 className="text-5xl font-bold">
            Enchanté ! Je suis <span className="text-primary">Axelle</span>,
          </h1>
          <p className="py-6">
            Je maquette et dévellope des applications pour vous rendre la vie
            plus <span className="font-bold">facile</span>.
          </p>
          <div className="flex justify-center pb-6 sm:space-x-4 space-x-5">
            <IconGithub />
            <IconLinkedin />
            <IconMail />
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
        <h1 className="text-xl font-bold mb-2">
          Les services que je vous propose en travaillant ensemble 🤝
        </h1>
        <p>
          Eius et voluptatem qui voluptatem. Perspiciatis numquam possimus eos
          recusandae. Iste asperiores ut aperiam molestias omnis omnis. Placeat
          ut sequi doloribus delectus. Consectetur dolor omnis minima voluptas
          voluptatibus molestiae delectus voluptatibus.
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 pt-5">
          <Card
            title="Visuel Graphique"
            text="Optio velit ratione voluptatem qui repellat quis. Suscipit voluptatem officia."
          />
          <Card
            title="Site vitrine, e-commerce"
            text="Optio velit ratione voluptatem qui repellat quis. Suscipit voluptatem."
          />
          <Card
            title="Application Mobile"
            text="Aliquid saepe repudiandae qui placeat atque atione voluptatem qui repellat quis. "
          />
          <Card
            title="Optimisation SEO"
            text="Olorem blanditiis omnis. Qui deleniti dignissimos doloremque incidunt dicta suscipit aspernatur tenetur."
          />
        </div>
      </Container>
    </>
  );
}

export default Home;
