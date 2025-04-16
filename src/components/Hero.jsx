function Hero({ children, size = "py-30" }) {
  return (
    <div className={"hero bg-base-200 " + size}>
      <div className="hero-content text-center">
        <div className="max-w-2xl">{children}</div>
      </div>
    </div>
  );
}

export default Hero;
