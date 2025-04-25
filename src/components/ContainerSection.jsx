function ContainerSection({ children, title = "", subtitle = "" }) {
  return (
    <div className="pb-10">
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
      {children}
    </div>
  );
}

export default ContainerSection;
