import React from 'react';
import './App.css';
import ListMovies from './ListMovies';
import AddModal from './AddModal';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <Search/>
      <ListMovies/>
      <br/>
      <AddModal editMode={false}/>
    </div>
  );
}

export default App;