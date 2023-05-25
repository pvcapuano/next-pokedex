import React from "react";

const SearchInput = ({ value, handleSearch, setValorDaPesquisa }) => {
  const handleInputChange = (event) => {
    setValorDaPesquisa(event.target.value);
    handleSearch(event);
  };

  return (
    <div className="flex justify-center items-center my-4">
      <img
        src="https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Pic-Background.png"
        width={40}
        className="mr-2"
      />
      <input
        type="text"
        placeholder="Pesquisar..."
        value={value}
        onChange={handleInputChange}
        className="p-2 rounded-2xl w-full md:w-96 border border-gray-500 "
      />
    </div>
  );
};

export default SearchInput;
