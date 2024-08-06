import './App.css';
import React from 'react';
import MyMovie from './Movie';
import MovieList from './components/MovieList';
import Home from './components/Home';
import Form from './components/Form';

function App() {
  return (
    <>
    <Form />
    <MyMovie>
      <MovieList></MovieList>
    </MyMovie>
    {/* <Home /> */}
    </>
  );
}

export default App;
