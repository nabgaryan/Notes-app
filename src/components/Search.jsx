import { AiOutlineSearch } from "react-icons/ai";

const Search = ({ onSearch }) => {

  const inputHandler = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search">
      <AiOutlineSearch />
      <input
        placeholder="type to search..."
        onChange={inputHandler}
      />
    </div>
  );
};

export default Search;
