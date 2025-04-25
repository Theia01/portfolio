// Components
import Container from "@components/Container";
import ContainerSection from "../components/ContainerSection";
import Carousel from "@components/Carousel";
import { IconInfo, IconArrowRight, IconArrowLeft } from "@components/Icons.jsx";

// Img project
import imgIntroSlide1 from "@img/hisy/hisy_step_1.png";
import imgIntroSlide2 from "@img/hisy/hisy_step_2.png";
import imgIntroSlide3 from "@img/hisy/hisy_step_3.png";
import imgImgInitial from "@img/hisy/hisy_initial.png";
import imgImgLang from "@img/hisy/hisy_lang.png";
import imgImgCrop from "@img/hisy/hisy_crop.png";
import imgImgNotif2 from "@img/hisy/hisy_notif_2.png";
import imgImgComplete from "@img/hisy/hisy_completed.png";

function Hisy() {
  const imgs_intro_caroussel = [imgIntroSlide1, imgIntroSlide2, imgIntroSlide3];
  const imgs_functioning = [
    imgImgInitial,
    imgImgLang,
    imgImgCrop,
    imgImgNotif2,
    imgImgComplete,
  ];

  let paraphEndFunctioning = (
    <p>
      Au fur et à mesure de la construction de votre image, des petites
      notifications apparaîtront pour encourager l'utilisateur à terminer son
      image. A la fin de celle-ci, une explosion de confetti apparaîtra sur
      l'écran. De plus les bouton "Télécharger" et "Partager" se débloqueront.
      <br />
      <br />
      Le partage est l'élément le plus important puisque l'utilisateur à créer
      cette image pour montrer sa perception à quelqu'un. Des options
      supplémentaire lui seront fourni tel que l'ajout de bordure ou non sur
      l'image.
    </p>
  );

  return (
    <Container>
      <h1 className="text-5xl font-bold pb-6">Hisy</h1>
      <div className="sm:grid sm:grid-cols-2 sm:gap-4 pb-20">
        <div>
          <p className="pb-4">
            Avez-vous déjà voulu montrer à vos amis comment vous les percevez à
            travers différentes facettes de leur personnalité ?
            <br />
            Avec Hisy, cette expérience unique est à portée de main. Notre
            application vous permet de créer et partager une vision complète de
            vos amis à travers une série de neuf catégories soigneusement
            sélectionnées.
          </p>
          <div className="max-sm:hidden max-w-3xs ml-auto">
            <IconArrowRight />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semi-bold pb-4">
              Découvrez par vous même !
            </h2>
            <p className="pb-2">
              Hisy offre une expérience unique pour célébrer l'unicité de chacun
              de vos amis. Téléchargez l'application dès aujourd'hui et plongez
              dans l'aventure "Hisy" !
            </p>
          </div>
          <div>
            <div role="alert" className="alert alert-info my-4">
              <IconInfo />
              <span>
                Il sera peut être nécessaire d'autoriser l'installation
                d'application de source inconnu sur votre téléphone.
              </span>
            </div>
            <a className="btn btn-primary" href="/portfolio/hisy.apk" download>
              Télécharger l'appplication Android
            </a>
          </div>
        </div>
      </div>
      <ContainerSection
        title="Description"
        subtitle="#howiseeyou #howiseemyself #howweseeeachother"
      >
        <p>
          Hisy est une application inspirée de la tendance virale #HowISeeYou,
          qui signifie littéralement "Comment je te vois". Elle permet de
          partager notre perception d'une personne à travers neuf catégories
          visuelles soigneusement choisies. En quelques images, exprimez comment
          vous voyez vos amis — ou vous-même — de manière créative et
          authentique.
        </p>
        <br />
        <p>
          Ce concept simple mais puissant génère un contenu hautement engageant,
          personnel et partageable, favorisant une forte viralité sur les
          réseaux sociaux. L'utilisateur peut également se décrire lui-même via
          #HowISeeMyself, renforçant l'aspect introspectif et interactif de
          l’expérience.
        </p>
        <br />
        <p>
          Les catégories sont prédéfinies pour guider la création, mais
          l'approche reste ouverte pour permettre des déclinaisons créatives,
          notamment par la communauté.
        </p>
      </ContainerSection>
      <ContainerSection title="Fonctionnement">
        <div className="md:grid md:grid-cols-3 md:grid-rows-3 md:gap-4">
          <div className="md:col-span-2 row-span-1 pb-6">
            <p>
              En plongeant dans l'application, vous serez guidé par une slide
              d'introduction rappelant les principes clés d’Hisy. Vous pouvez
              aussi sélectionner votre langue préférée dès le départ grâce au
              bouton en haut à droite.
            </p>
            <p>
              <br />
              Une fois à l’intérieur, plusieurs sections sont là pour vous
              accompagner dans la création de votre image. L’outil central est
              un cadre interactif situé au milieu de l’écran, où vous pouvez
              ajouter vos images et les redimensionner facilement selon vos
              envies.
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
      </ContainerSection>
    </Container>
  );
}

export default Hisy;
