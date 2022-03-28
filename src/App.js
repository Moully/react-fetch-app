import React from 'react';
import './App.css';
import Search from './components/searchForm';
import GifList from './components/GifList';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App () {
  // constructor (){
  //   super();
  //   this.state = {
  //     gifs: []
  //   }
  // }
  const [gifs, setGifs] = useState([])
  const [query, setQuery] = useState("cats")

  const performSearch = (value)=>setQuery(value)


  // fetch("http://api.giphy.com/v1/gifs/trending?api_key=M3rDkcVPTRTZFQNBzhIhOnkjQPpZICQs")
  // .then(e=>e.json())
  // .then((data)=>{
  // this.setState({gifs: data.data})})
  // .catch(error=>{console.log("Error featching and parsing data", error);})
  
  useEffect(()=>{
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=M3rDkcVPTRTZFQNBzhIhOnkjQPpZICQs`)
    .then(res => 
      {
        setGifs(
          res.data.data
        )
      })
    .catch(error=>console.log("error fetching and parsing data", error))
  }, [query])


// const performSearch = () =>{
//     // axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=M3rDkcVPTRTZFQNBzhIhOnkjQPpZICQs`)
//     // axios.get(`http://api.giphy.com/v1/gifs/search?q=cat&api_key=M3rDkcVPTRTZFQNBzhIhOnkjQPpZICQs`)
//     // .then(res => 
//     //   {
//     //     setGifs({
//     //       gifs: res.data.data
//     //     })
//     //   })
//     // .catch(error=>console.log("error fetching and parsing data", error))
//   }




    return (
      <div className="main-header">
        <div className='main-inner'>
          <h1 className='main-title'>Search App</h1>
        </div>
        <Search onSearch={performSearch} />
        <div className="main-content">
          <GifList data={gifs}/>
        </div>


      </div>
    );
  
}

export default App;
