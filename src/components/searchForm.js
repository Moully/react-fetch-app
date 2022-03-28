import React from "react";
import { useState, useEffect } from "react";

function Search (props) {

    const [search , setSearch] = useState()

    const searchValue = (e)=>{
        // console.log("ymarch baisan ajilj baina");
        // const abs = document.getElementById("searchSection").value
        // console.log(e.target.value);
        setSearch(e.target.value)
        // return abs
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        e.currentTarget.reset()
        // this.props.onSearch(this.state.searchText)
        // props.onSearch(searchValue)
        // console.log(search);
        props.onSearch(search)
    }
        return (
            <div>
                <form className="search-form" onSubmit={handleSubmit}>
                    <label className="is-hidden" htmlFor="search">Search</label>
                    <input type="search" id="searchSection" name="search" placeholder="Search..." onChange={searchValue}></input>
                    <button type="sumbit" id="submit" className="search-button">
                        <i className="material-icons icn-search"></i>
                    </button>
                </form>
            </div>
        )
}



export default Search