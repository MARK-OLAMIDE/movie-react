import React, {useState, useEffect, useContext} from 'react';
import { Movie } from '../Movie';

import MovieItem from './MovieItem';
const myurl ="https://youtube.com/video/"

const search = "terminator" 
// const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&?${search}&key=AIzaSyBrae2VzoOcRy4PJCvgUUwBcS-v8cVZR5Y&maxResults=50`
const url = 'https://youtube.googleapis.com/youtube/v3/'
const api_key = `?part=snippet&key=${process.env.REACT_APP_API_KEY}&q=`
const number = '&maxResults=50'
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=terminator&key=AIzaSyBrae2VzoOcRy4PJCvgUUwBcS-v8cVZR5Y&maxResults=50
const MovieList = () => {
    const { movie, setMovie, searchKey, selectedMovie, setSelectedMovie} = useContext(Movie); 

    useEffect(() =>{
        const getMovie = async () => {
            const type = searchKey ? 'search' : 'search';
          
            const response = await fetch(`${url}${type}${api_key}${searchKey}${number}`)
            // const response = await fetch(`https://youtube.googleapis.com/youtube/v3/${type}?part=snippet&key=AIzaSyBrae2VzoOcRy4PJCvgUUwBcS-v8cVZR5Y&q=${searchKey}&maxResults=50`)
            // 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD8PtGw7UNYhfOGaYrzITtYoPcES3hN7iY&q'
            const movie = await response.json();
            setMovie(movie.items) 
            let currentIndex = 0; // Initialize the index counter

            // Set interval to change the selected movie
            const intervalId = setInterval(() => {
                // Check if the currentIndex is within the bounds of movie items
                if (currentIndex < movie.items.length) {
                    setSelectedMovie(movie.items[currentIndex]); // Set the selected movie
                    currentIndex++; // Increment the index for the next iteration
                } else {
                    clearInterval(intervalId); // Stop the interval if all items have been processed
                }
            }, 3000);
            console.log(movie.items);
        }
        getMovie() 
    },[  setMovie, searchKey,  setSelectedMovie ]);

  return (
         
    <div style={{display:"flex", flexWrap:"wrap",  justifyContent:'center'}}>
        {movie.map((x, index) => (

         <MovieItem key={index} x={x}/>
        ))}
    </div>
  
  )
}

export default MovieList