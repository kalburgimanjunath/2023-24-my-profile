import "./styles.css";
import { Header, Footer, Sidebar, Widgets, Cards } from "./components/index";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { Home } from "./pages/index";
import { About } from "./about";
import {
  AboutPage,
  Products,
  Articles,
  Contact,
  Details,
  Login,
} from "./pages/index";
function RequireAuth({ children }) {
  const { authed } = true;
  const location = useLocation();

  return authed == true ? children : children;
  // ) : (
  //   <Navigate to="/login" replace state={{ path: location.pathname }} />
  // );
}
export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login profile={About[0]} />} />
        <Route
          path="/projects/:id"
          element={
            <RequireAuth>
              <Details type="projects" title="projects" profile={About[0]} />
            </RequireAuth>
          }
        />
        <Route
          path="/hobbies/:id"
          element={
            <RequireAuth>
              <Details type="hobbies" title="hobbies" profile={About[0]} />
            </RequireAuth>
          }
        />
        <Route
          path="/posts/:id"
          element={
            <RequireAuth>
              <Details type="articles" title="articles" profile={About[0]} />
            </RequireAuth>
          }
        />

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
