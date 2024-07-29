import React, {useContext, useEffect} from 'react'
import {Movie} from '../Movie'

let url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=messi&key=AIzaSyBuNK8py5fAhr09mmribVdjeS5GJjeJQjI"

const MovieList = () => {

  let {movie, setMovie, mySearch, setMySearch, select, setSelect} = useContext(Movie)
  useEffect(() => {
    let getMyMovie = async () => {
      let response = await fetch(url)
      let data = await response.json()  
      console.log(data) 
    }
    getMyMovie()
  }
  , [])
  return (
    <div>MovieList</div>
  )
}

export default MovieList