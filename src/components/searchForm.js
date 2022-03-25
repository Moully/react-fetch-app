import React from "react";

class Search extends React.Component {
    
    render(){
        return (
            <div>
                <form className="search-form">
                    <label className="is-hidden" htmlFor="search">Search</label>
                    <input type="search" name="search" placeholder="Search..."></input>
                    <button type="sumbit" id="submit" className="search-button">
                        <i className="material-icons icn-search"></i>
                    </button>
                </form>
            </div>
        )
    }
}



export default Search