import "./styles.css";
import { Header, Footer, Sidebar, Widgets, Cards } from "./components/index";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/index";
import { About } from "./about";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home profile={About[0]} />} />
      </Routes>
      <Footer />
    </div>
  );
}
