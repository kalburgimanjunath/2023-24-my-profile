export default function Navbar() {
  const navlinks = [
    { title: "Home", link: "home" },
    { title: "About", link: "About" },
    { title: "Projects", link: "Projects" },
    { title: "Articles", link: "articles" },
    { title: "Contact Me", link: "contact" }
  ];
  return (
    <div>
      <nav>
        <ul>
          <li className="font-bold">Logo</li>
          {navlinks &&
            navlinks.map((item) => {
              return (
                <li key={item.link}>
                  <a href="">{item.title}</a>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
}
