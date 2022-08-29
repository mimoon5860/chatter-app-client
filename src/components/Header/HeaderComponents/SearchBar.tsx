import React from 'react';

interface ISearchBar {
    inputChange: (value: string) => void;
    handleSearch: () => void;
}

const SearchBar = ({ inputChange, handleSearch }: ISearchBar) => {
    return (
        <div>
            <input onChange={(e) => inputChange(e.target.value)} type="text" />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;