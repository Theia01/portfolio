import Container from "../components/Container";
import { IconInfo, IconArrowRight } from "../components/Icon";
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
      <p></p>
      <h2 className="text-xl font-bold mb-2">Description</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam luctus mi
        ut pretium dapibus. Aenean sit amet iaculis dui, in tincidunt diam.
        Etiam in nibh at tortor consequat efficitur vel quis diam. Quisque
        rhoncus odio aliquet euismod porttitor. Nunc molestie interdum sodales.
        Mauris finibus nisl ac mi ultricies, ut ultrices elit varius. Vestibulum
        congue nec odio a molestie. Nam imperdiet in arcu et semper. In ac
        accumsan tortor.
      </p>
    </Container>
  );
}

export default Hisy;
