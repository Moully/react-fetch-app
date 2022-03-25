import React from 'react';
import './App.css';
import Search from './components/searchForm';
import GifList from './components/GifList';


class App extends React.Component {
  render(){
    return (
      <div className="main-header">
        <div className='main-inner'>
          <h1 className='main-title'>Search App</h1>
        </div>
        <Search  />
        <div className="main-content">
          <GifList />
        </div>


      </div>
    );
  }
}

export default App;
