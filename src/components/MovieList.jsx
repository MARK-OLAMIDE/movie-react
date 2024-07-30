import React, {useContext, useEffect} from 'react'
import MovieItem from './MovieItem'
import {Movie} from '../Movie'

let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=emmanuel%20iren&key=${process.env.REACT_APP_API_KEY}&maxResults=10`

const MovieList = () => {

  let {movie, setMovie, mySearch, setMySearch, select, setSelect} = useContext(Movie)
  useEffect(() => {
    let getMyMovie = async () => {
      let response = await fetch(url)
      let data = await response.json()  
      console.log(data) 
      setMovie(data.items)

      console.log(movie)
      setSelect(movie[0])
    }
    getMyMovie()
  }
  , [setMovie, setSelect])
  return (
    <div>{movie.map((x, p) => {
      return (
        <MovieItem tunde={x} key={p++}/>
      )
    })}</div>
  )
}

export default MovieList