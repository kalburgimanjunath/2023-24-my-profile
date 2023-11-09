import "./styles.css";
import { Header, Footer, Sidebar, Widgets, Cards } from "./components/index";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/index";
import { About } from "./about";
import { AboutPage, Products, Articles, Contact } from "./pages/index";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/articles"
          element={<Articles title="articles" profile={About[0]} />}
        />
        <Route
          path="/projects"
          element={<Products title="projects" profile={About[0]} />}
        />
        <Route
          path="/contact"
          element={<Contact title="contact" profile={About[0]} />}
        />
        <Route path="/about" element={<AboutPage profile={About[0]} />} />
        <Route path="/" exact element={<Home profile={About[0]} />} />
      </Routes>
      <Footer />
    </div>
  );
}
