import {  Routes, Route } from 'react-router-dom';
import './App.css';
import MovieContext from './Movie';



import Form from './components/Form';

import MovieList from './components/MovieList';

function App() {
  return (
   
    // <Routes>
    //   <Route path="/"  element={

<MovieContext>
  <Form />
  {/* <Header/> */}
<MovieList />

</MovieContext> 
    //   }/>
    
    
    // </Routes>
        
     

  
  );
}

export default App;
