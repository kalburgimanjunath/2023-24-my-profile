import { useState, useEffect } from "react";
export default function GitProjects() {
  const [projects, setProjects] = useState([]);
  const loadProjects = () => {
    fetch("https://api.github.com/users/kalburgimanjunath/repos")
      .then((res) => res.json())
      .then((result) => setProjects(result))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    return loadProjects();
  }, [projects]);
  return (
    <div className="p-2 bg-white m-1 shadow-lg">
      Git Projects
      <div>
        {projects &&
          projects.map((item) => {
            return (
              <>
                <div>
                  <a
                    href={item.html_url}
                    target="_new"
                    className="text-blue-700"
                  >
                    {item.name}
                  </a>
                </div>
                <div>{item.html_url}</div>
              </>
            );
          })}
      </div>
    </div>
  );
}
