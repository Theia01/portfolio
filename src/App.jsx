import "./App.css";

function App() {
  return (
    <>
      <nav>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl logo-app pt-1">Axelle.G</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li className="p-1">
                <a>Créations Web & Mobile</a>
              </li>
              <li className="p-1">
                <a>Mon parcours</a>
              </li>
              <li className="p-1">
                <a>Contact</a>
              </li>
              <li>
                <button className="btn btn-square btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-5 w-5 stroke-current"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>{" "}
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold">
                Enchanté ! Je suis <span className="text-primary">Axelle</span>,
              </h1>
              <p className="py-6">
                Je maquette et dévellope des applications pour vous rendre la
                vie plus <span className="font-bold">facile</span>.
              </p>
              <button className="btn btn-primary">Voir mes créations</button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
