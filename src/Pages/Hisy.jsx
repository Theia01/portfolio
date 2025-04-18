import Container from "../components/Container";
import { IconInfo, IconArrowRight } from "../components/Icon";

// Img project
import imgIntroSlide1 from "../assets/img/project/hisy/hisy_step_1.png";
import imgIntroSlide2 from "../assets/img/project/hisy/hisy_step_2.png";
import imgIntroSlide3 from "../assets/img/project/hisy/hisy_step_3.png";

function Hisy() {
  return (
    <Container>
      <h1 className="text-5xl font-bold pb-6">Hisy</h1>
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 pb-20">
        <div>
          <p className="pb-4">
            Pellentesque mattis mauris sed lacinia tincidunt. Morbi sit amet
            finibus urna. Suspendisse interdum id sem vel interdum. Sed et
            sodales enim, sed interdum massa. Donec malesuada massa urna
          </p>
          <div className="max-sm:hidden max-w-3xs ml-auto lg:relative lg:-top-6">
            <IconArrowRight />
          </div>
        </div>
        <div>
          <div>
            <h2 className="text-xl font-semi-bold pb-4">
              Découvrez par vous même !
            </h2>
            <p className="pb-2">
              Etiam in nibh at tortor consequat efficitur vel quis diam. Quisque
              rhoncus odio aliquet euismod porttitor.
            </p>
          </div>
          <div>
            <div role="alert" className="alert alert-info my-4">
              <IconInfo />
              <span>
                Il sera peut être nécessaire d'autoriser l'installation
                d'application inconnu sur votre téléphone.
              </span>
            </div>
            <a className="btn btn-primary" href="/portfolio/hisy.apk" download>
              Télécharger l'appplication Android
            </a>
          </div>
        </div>
      </div>
      <div className="pb-10">
        <h2 className="text-xl font-bold mb-2">Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus
          mi ut pretium dapibus. Aenean sit amet iaculis dui, in tincidunt diam.
          Etiam in nibh at tortor consequat efficitur vel quis diam. Quisque
          rhoncus odio aliquet euismod porttitor. Nunc molestie interdum
          sodales. Mauris finibus nisl ac mi ultricies, ut ultrices elit varius.
          Vestibulum congue nec odio a molestie. Nam imperdiet in arcu et
          semper. In ac accumsan tortor.
        </p>
      </div>
      <div className="pb-10">
        <h2 className="text-xl font-bold mb-2">Introduction slider</h2>
        <div className="flex space-x-4 max-md:flex-col">
          <p className="md:w-64 grow pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            luctus mi ut pretium dapibus. Aenean sit amet iaculis dui, in
            tincidunt diam. Etiam in nibh at tortor consequat efficitur vel quis
            diam. Quisque rhoncus odio aliquet euismod porttitor. Nunc molestie
            interdum sodales. Mauris finibus nisl ac mi ultricies, ut ultrices
            elit varius. Vestibulum congue nec odio a molestie. Nam imperdiet in
            arcu et semper. In ac accumsan tortor.
          </p>

          <div className="carousel rounded-box md:w-64">
            <div className="carousel-item md:w-full">
              <img
                src={imgIntroSlide1}
                className="md:w-full max-md:max-h-120"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item md:w-full">
              <img
                src={imgIntroSlide2}
                className="md:w-full max-md:max-h-120"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item md:w-full">
              <img
                src={imgIntroSlide3}
                className="md:w-full max-md:max-h-120"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hisy;
