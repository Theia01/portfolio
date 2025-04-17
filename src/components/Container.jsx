function Container({ children }) {
  return (
    <div className="grid place-items-center py-15">
      <div className="max-w-4xl px-8">{children}</div>
    </div>
  );
}

export default Container;
