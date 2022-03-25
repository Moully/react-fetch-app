import React from "react";

class Search extends React.Component {
    state = {
        searchText: "",
    }
    onSearchChange = (e)=>{
        this.setState({searchText: e.target.value})
    }
    handleSubmit = (e)=>{
        console.log(e);
        e.preventDefault()
        e.currentTarget.reset()
        this.props.onSearch(this.state.searchText)
    }
    render(){
        return (
            <div>
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <label className="is-hidden" htmlFor="search">Search</label>
                    <input type="search" name="search" placeholder="Search..." onChange={this.onSearchChange}></input>
                    <button type="sumbit" id="submit" className="search-button">
                        <i className="material-icons icn-search"></i>
                    </button>
                </form>
            </div>
        )
    }
}



export default Search