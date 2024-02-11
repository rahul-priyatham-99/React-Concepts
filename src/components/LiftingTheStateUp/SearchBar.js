import React, {useState} from "react";

const SearchBar = ({isChecked, setIsChecked, setSearchInput}) => {
    const [input, setInput] = useState('')
    return (
        <div className="search-container">
            <div className="search-input-div">
                <label for="searchInput" className="search-label">Search:</label>
                <input id="searchInput" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button style={{padding: "5px", marginLeft: "10px"}} onClick={setSearchInput(input)}>Search</button>
            </div>
            <div className="checkbox-div">
                <input type="checkbox" checked={isChecked} onChange={()=>setIsChecked(!isChecked)}></input>
                <label for="searchInput">Only show products in stock</label>
            </div>
        </div>
    )
}

export default SearchBar;