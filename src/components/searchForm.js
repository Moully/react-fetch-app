import React from "react";

class Search extends React.Component {
    
    render(){
        return (
            <div>
                <form className="search-form">
                    <label className="is-hidden" htmlFor="search">Search</label>
                    <input placeholder="Search..."></input>
                </form>
            </div>
        )
    }
}



export default Search