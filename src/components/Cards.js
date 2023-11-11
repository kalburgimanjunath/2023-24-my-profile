import React, { useState } from "react";
import Paginate from "./Paginate";
export default function Cards({ title, items, link }) {
  const [showDescription, setShowDescription] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(items.length / postsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="p-4">
      <h1 className="font-bold text-2xl text-left ml-2">{title}</h1>
      <div className="w-full clear-both flex">
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={items.length}
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
        />
      </div>
      <div className="overflow-x-auto flex">
        {currentPosts &&
          currentPosts.map((item) => {
            return (
              <React.Fragment key={item.title}>
                <a
                  href=""
                  onMouseEnter={() => setShowDescription(true)}
                  onMouseLeave={() => setShowDescription(false)}
                  className="bg-white hover:text-blue-700 hover:bg-pink-100 border shadow-md rounded-lg m-2"
                >
                  {item.image && (
                    <div>
                      <img src={item.image} width={200} />
                    </div>
                  )}
                  <div className="p-2">
                    <div className="font-bold">{item.title}</div>
                    {showDescription && (
                      <div className="text-xs text-black-100">
                        {item.description}
                      </div>
                    )}
                  </div>
                </a>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
}
