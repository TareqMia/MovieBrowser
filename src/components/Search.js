import React from 'react';


const Search = ( {handleInput, search} ) => {
    return (
        <section>
            <input 
            type="text" 
            placeholder="Search for a movie..." 
            className="searchbox" 
            onChange={handleInput} 
            onKeyPress={search}  
            />
        </section>
    );
}


export default Search;