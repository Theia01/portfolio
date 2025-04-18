function Carousel({ imgs }) {
  const itemsCarousel = imgs.map((img, i) => (
    <div key={i} className="carousel-item md:w-full">
      <img src={img} className="md:w-full max-md:max-h-120" alt="" />
    </div>
  ));

  return <div className="carousel rounded-box md:w-64">{itemsCarousel}</div>;
}

export default Carousel;
