import Container from "../components/Container";
import Carousel from "../components/Carousel";
import { IconInfo, IconArrowRight, IconArrowLeft } from "../components/Icon";

// Img project
import imgIntroSlide1 from "../assets/img/project/hisy/hisy_step_1.png";
import imgIntroSlide2 from "../assets/img/project/hisy/hisy_step_2.png";
import imgIntroSlide3 from "../assets/img/project/hisy/hisy_step_3.png";
import imgImgInitial from "../assets/img/project/hisy/hisy_initial.png";
import imgImgLang from "../assets/img/project/hisy/hisy_lang.png";
import imgImgCrop from "../assets/img/project/hisy/hisy_crop.png";
import imgImgNotif2 from "../assets/img/project/hisy/hisy_notif_2.png";
import imgImgNotif4 from "../assets/img/project/hisy/hisy_notif_4.png";
import imgImgComplete from "../assets/img/project/hisy/hisy_completed.png";

function Hisy() {
  const imgs_intro_caroussel = [imgIntroSlide1, imgIntroSlide2, imgIntroSlide3];
  const imgs_functioning = [
    imgImgInitial,
    imgImgLang,
    imgImgCrop,
    imgImgNotif2,
    imgImgNotif4,
    imgImgComplete,
  ];

  let paraphEndFunctioning = (
    <p>
      In sed vehicula nisi. Donec lorem purus, laoreet sed dictum vitae, tempor
      sed ligula. Duis orci velit, vulputate eu viverra vel, placerat sit amet
      magna. Nunc non placerat dui, quis dignissim magna. Cras sollicitudin,
      lectus et ultricies euismod, ante arcu tincidunt ligula, non ultricies
      orci massa et elit.
      <br />
      <br />
      Vestibulum quam purus, maximus at lacinia eget, porttitor at ex. Donec
      condimentum pellentesque nunc, nec facilisis arcu.Vestibulum mauris dui,
      lobortis varius orci eget, vulputate porttitor neque. Integer efficitur
      metus mi, sit amet fringilla nulla vehicula quis.
    </p>
  );

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
        <h2 className="text-xl font-bold mb-2">Fonctionnement</h2>
        <div className="md:grid md:grid-cols-3 md:grid-rows-3 md:gap-4">
          <div className="md:col-span-2 row-span-1 pb-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              luctus mi ut pretium dapibus. Aenean sit amet iaculis dui, in
              tincidunt diam. Etiam in nibh at tortor consequat efficitur vel
              quis diam. Quisque rhoncus odio aliquet euismod porttitor. Nunc
              molestie interdum sodales. Mauris finibus nisl ac mi ultricies, ut
              ultrices elit varius. Vestibulum congue nec odio a molestie. Nam
              imperdiet in arcu et semper. In ac accumsan tortor.
            </p>
            <p>
              <br />
              Donec eget erat ut lectus volutpat gravida. Vestibulum interdum
              eleifend risus non viverra.
            </p>
          </div>
          <div className="md:col-span-1 md:row-span-2">
            <Carousel imgs={imgs_intro_caroussel} />
          </div>
          <div className="block md:hidden max-md:py-6">
            {paraphEndFunctioning}
          </div>
          <div className="md:col-span-1 md:row-span-2">
            <Carousel imgs={imgs_functioning} />
          </div>
          <div className="max-md:hidden md:col-span-1 md:row-span-1">
            <IconArrowLeft />
          </div>
          <div className="max-md:hidden md:col-span-2 md:row-span-1 pl-5">
            {paraphEndFunctioning}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hisy;
