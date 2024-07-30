import './App.css';
import React from 'react';
import MyMovie from './Movie';
import MovieList from './components/MovieList';
import Home from './components/Home';

function App() {
  return (
    <MyMovie>
      <MovieList></MovieList>
    </MyMovie>
    // <Home />
  );
}

export default App;
