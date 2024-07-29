import React, { createContext, useState } from 'react';


export const Movie = createContext() // Create a context object

const MyMovie = ({children}) => {
    const [movie, setMovie] = useState([]); // Create a state variable called movie
    const [mySearch, setMySearch] = useState(''); // Create a state variable called mySearch
    const [select, setSelect] = useState(''); // Create a state variable called select
  return (
    <Movie.Provider value={{movie, setMovie, mySearch, setMySearch, select, setSelect}}>
        {children}
    </Movie.Provider>
  )
}

export default MyMovie