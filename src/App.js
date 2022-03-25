import React from 'react';
import './App.css';
import Search from './components/searchForm';
import GifList from './components/GifList';


class App extends React.Component {
  constructor (){
    super();
    this.state = {
      gifs: []
    }
  }

componentDidMount(){
  fetch("http://api.giphy.com/v1/gifs/trending?api_key=M3rDkcVPTRTZFQNBzhIhOnkjQPpZICQs")
  .then(e=>e.json())
  .then((data)=>{
  this.setState({gifs: data.data})})
  .catch(error=>{console.log("Error featching and parsing data", error);})
  
}


  render(){
    return (
      <div className="main-header">
        <div className='main-inner'>
          <h1 className='main-title'>Search App</h1>
        </div>
        <Search  />
        <div className="main-content">
          <GifList data={this.state.gifs}/>
        </div>


      </div>
    );
  }
}

export default App;
