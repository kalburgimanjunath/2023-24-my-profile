const Paginate = ({
  postsPerPage,
  totalPosts,
  paginate,
  previousPage,
  nextPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container w-full align-items-center text-center">
      <ul className="pagination flex w-full align-center justify-end ">
        <li
          onClick={previousPage}
          className="p-2 border-2 cursor-pointer hover:bg-pink-100"
        >
          Prev
        </li>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className="p-2 border-2 cursor-pointer hover:bg-pink-100"
          >
            {number}
          </li>
        ))}
        <li
          onClick={nextPage}
          className="p-2 border-2 cursor-pointer hover:bg-pink-100"
        >
          Next
        </li>
      </ul>
    </div>
  );
};

export default Paginate;
