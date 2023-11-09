import { Link } from "react-router-dom";
export default function Navbar() {
  const navlinks = [
    { title: "Home", link: "" },
    { title: "About", link: "about" },
    { title: "Projects", link: "projects" },
    { title: "Articles", link: "articles" },
    { title: "Contact Me", link: "contact" },
  ];
  return (
    <div className="flex justify-center fixed top-0 shadow-lg w-full bg-white">
      <nav>
        <ul className="flex">
          <li className="font-bold p-2 cursor-pointer text-pink-600 hover:text-pink-700 hover:scale-y-150">
            <Link to="/">Logo</Link>
          </li>
          {navlinks &&
            navlinks.map((item) => {
              return (
                <li
                  key={item.link}
                  className="cursor-pointer p-2 text-md hover:bg-gray-400 hover:text-white"
                >
                  <Link to={item.link}>{item.title}</Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
}
