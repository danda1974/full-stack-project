import "./SearchBar.scss";

const SearchBar = ({handleInput}) => {
  
  const handleEvent = event => {
    const cleanInput = event.target.value.toLowerCase();
    handleInput(cleanInput);
  };

  return (
    
    <div className="searchBox">
      <h3 className="searchCourse">Find your next course!..</h3>
      <input type="text" placeholder="Search title" onInput={handleEvent} className="search-box__input"/>
    </div>
  );
};

export default SearchBar;