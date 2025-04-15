import Card from "./components/Card.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
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
      <div className="grid place-items-center pt-15">
        <div className="max-w-2xl px-8">
          <h1 className="text-xl font-bold mb-2">
            Les services que je vous propose en travaillant ensemble 🤝
          </h1>
          <p>
            Eius et voluptatem qui voluptatem. Perspiciatis numquam possimus eos
            recusandae. Iste asperiores ut aperiam molestias omnis omnis.
            Placeat ut sequi doloribus delectus. Consectetur dolor omnis minima
            voluptas voluptatibus molestiae delectus voluptatibus.
          </p>
          <div className="flex pt-4 space-x-2">
            <Card title="UX/UI" text="Lorem ipsum " />
            <Card title="Visuel Graphique" text="improve" />
            <Card title="Site vitrine, e-commerce" text="improve" />
            <Card title="Application Mobile" text="improve" />
            <Card title="Optimisation SEO" text="improve" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
