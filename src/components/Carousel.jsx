function Carousel({ imgs }) {
  const hash = (Math.random() + 1).toString(36).substring(5);

  const itemsCarousel = imgs.map((img, i) => (
    <div key={i} id={`${hash}-${i}`} className="carousel-item md:w-full">
      <img src={img} className="md:w-full max-md:max-h-120" alt="" />
    </div>
  ));
  const linksImg = imgs.map((img, i) => (
    <a key={i} href={`#${hash}-${i}`} className="btn btn-xs">
      {i + 1}
    </a>
  ));

  return (
    <>
      <div className="carousel rounded-box md:w-64">{itemsCarousel}</div>
      <div className="max-md:hidden flex justify-center space-x-1 mt-1">
        {linksImg}
      </div>
    </>
  );
}

export default Carousel;
