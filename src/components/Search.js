export default function Search() {
  return (
    <div className="border-2 shadow-md w-full p-5">
      <div>
        <div>
          <input
            type="text"
            className="p-2 border-2 rounded-md mb-2 border-rose-600 w-full text-black"
            placeholder="Enter Search Query"
          />
        </div>
        <div>Search results</div>
      </div>
    </div>
  );
}
