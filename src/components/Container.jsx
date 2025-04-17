function Container({ children, size = "max-w-4xl" }) {
  return (
    <div className="grid place-items-center py-15">
      <div className={`${size} px-8`}>{children}</div>
    </div>
  );
}

export default Container;
