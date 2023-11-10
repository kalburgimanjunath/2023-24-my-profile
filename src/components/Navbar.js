import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import Search from "./Search";
export default function Navbar() {
  const navlinks = [
    { title: "Home", link: "" },
    { title: "About", link: "about" },
    { title: "Projects", link: "projects" },
    { title: "Articles", link: "articles" },
    { title: "Contact Me", link: "contact" },
  ];
  const [active, setActive] = useState("");

  return (
    <div className="flex justify-center fixed top-0 shadow-lg w-full bg-white">
      <nav>
        <ul className="flex navbar">
          <li className="font-bold p-2 cursor-pointer text-pink-600 hover:text-pink-700 hover:scale-y-150">
            <Link to="/">Hire/me!</Link>
          </li>
          {navlinks &&
            navlinks.map((item) => {
              return (
                <li key={item.link} className="cursor-pointer p-2 text-md">
                  <NavLink
                    to={item.link}
                    className="p-2 hover:rounded-lg hover:bg-pink-200 hover:underline"
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
        </ul>
        <Search />
      </nav>
    </div>
  );
}
