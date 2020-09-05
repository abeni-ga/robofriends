import React from 'react';

const SearchBox = ({searchChanged})=>{
    return(
        <div className="pa2">
                <input onChange={searchChanged} className="pa3 ba b--green bg-light-blue" type="search" placeholder="Search Robots"/>
            </div>
    );
}

export default SearchBox