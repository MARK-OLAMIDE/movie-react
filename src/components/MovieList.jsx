import React, { useContext, useEffect } from 'react'
import MovieItem from './MovieItem'
import { Movie } from '../Movie'

let number = `&maxResults=10`

const MovieList = () => {

  
  let { movie, setMovie, mySearch, setMySearch, select, setSelect } = useContext(Movie)
  useEffect(() => {
    // let type = mySearch ? 'search' : 'search'
    let getMyMovie = async () => {
      let storedData = localStorage.getItem("tunde")
      if (storedData) {
        setMovie(JSON.parse(storedData))
        console.log(storedData)
        console.log(movie)
      }
      else {
        let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${mySearch}&key=${process.env.REACT_APP_API_KEY}${number}`)
        let data = await response.json()
        localStorage.setItem("tunde", JSON.stringify(data.items))
       
        // console.log(data)
        // setMovie(data.items)

        // console.log(movie)
        setSelect(movie[0])
      }

    }
    getMyMovie()
  }
    , [setMovie, setSelect])
  return (
    <div>{movie.map((x, p) => {
      return (
        <MovieItem tunde={x} key={p++} />
      )
    })}</div>
  )
}

export default MovieList