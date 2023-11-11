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
  const [showSearch, setSearch] = useState(false);

  return (
    <div className="z-10 flex justify-center fixed top-0 shadow-lg w-full bg-white">
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
          <li className="p-2 cursor-pointer">
            <svg
              onClick={() => setSearch(!showSearch)}
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              class="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </li>
          <li className="p-2 cursor-pointer">
            <a href="./login">Login</a>
          </li>
        </ul>
        <div className="mb-1">{showSearch && <Search />}</div>
      </nav>
    </div>
  );
}
