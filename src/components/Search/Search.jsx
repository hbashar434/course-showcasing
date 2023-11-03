import React from "react";

const Search = () => {
  const handleSearch = () => {};
  return (
    <div>
      <form
        onSubmit={() => handleSearch()}
        className="flex justify-center gap-4 mb-8"
      >
        <input
          type="text"
          required
          placeholder="Search here"
          className="h-10 w-48 px-2 py-1 rounded focus:outline-none focus:ring focus:border-teal-300 ring-2 ring-teal-300 ring-inset"
        />
        <button
          type="submit"
          className="bg-emerald-500 text-white font-semibold px-4 py-2 rounded mr-2"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
