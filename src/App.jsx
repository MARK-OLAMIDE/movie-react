
import './App.css';
import MovieContext from './Movie';
import { Routes, Route } from 'react-router-dom';
import Video from './components/Video';



import Form from './components/Form';

import MovieList from './components/MovieList';

function App() {
  return (

    <>



      <Routes>
        <Route path="/" element={
          <MovieContext>
            <Form />

            <MovieList />

          </MovieContext>
        } />
          <Route path="/video/:id" element={<Video />} />
      </Routes>

    </>



  );
}

export default App;
