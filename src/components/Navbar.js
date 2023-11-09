export default function Navbar() {
  const navlinks = [
    { title: "Home", link: "home" },
    { title: "About", link: "About" },
    { title: "Projects", link: "Projects" },
    { title: "Articles", link: "articles" },
    { title: "Contact Me", link: "contact" },
  ];
  return (
    <div className="flex justify-center fixed top-0 shadow-lg w-full">
      <nav>
        <ul className="flex">
          <li className="font-bold p-2">Logo</li>
          {navlinks &&
            navlinks.map((item) => {
              return (
                <li
                  key={item.link}
                  className="p-2 text-md hover:bg-gray-400 hover:text-white"
                >
                  <a href="">{item.title}</a>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
}
