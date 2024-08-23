import React from "react";
import './searchinputform.style.css';

const SearchInputForm =( { darkTheme }) => {
    return(
        <div className={ 'search-input-form-container ${ darkTheme ?  dark-box-shadow : "light-box-shadow" }' }>
        <input type="text" className='search-input' placeholder="Search Your Book"/>
        <button className="search-button">search</button>   
            </div>
    )
}


export default SearchInputForm;
    