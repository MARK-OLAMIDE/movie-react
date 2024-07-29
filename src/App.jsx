import './App.css';
import React from 'react';
import MyMovie from './Movie';
import MovieList from './components/MovieList';

function App() {
  return (
    <MyMovie>
      <MovieList></MovieList>
    </MyMovie>
  );
}

export default App;
