
// Component
import Hero from "@components/Hero.jsx";
import Container from "@components/Container.jsx"
import CardCreations from "@components/CardCreations.jsx"

// Icons
import {
  IconArrayDown,
} from "@components/Icons.jsx";

// Images
import imgHisy from "@img/hisy/screenshot_1.jpg";

function Creations() {
  const projects = [{
    title: "hisy",
    link: "/hisy",
    img: imgHisy,
    imgAlt: 'Project How I See You',
    description: "Une application mobile basé sur le challenge #HowISeeYou. Représenter une personne avec neuf photo.",
    languages: ["React Native"],
    others: ["Android"],
    github: '',
    site: '',
  },]

  return (
    <>
      <Hero>
        <h1 className="text-5xl font-bold">
          Rien de mieux qu'un tour d'horizon pour vous donner des idées
        </h1>
        <p className="py-6">
          Défilez vers le bas pour voir certains de mes travaux
        </p>
        <a href='#hisy' className="btn btn-ghost animate-bounce">
          <IconArrayDown />
        </a>
      </Hero>
      <Container size="max-w-2xl">
        {
          projects.map((project) => <CardCreations {...project} />)
        }
      </Container>
    </>
  );
}

export default Creations;
