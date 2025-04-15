import Card from "./components/Card.jsx";
import NavBar from "./components/NavBar.jsx";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
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
      <article>
        <h1>Les services que je vous propose en travaillant ensemble 🤝</h1>
        <Card title="UX/UI" text="improve" />
      </article>
    </>
  );
}

export default App;
