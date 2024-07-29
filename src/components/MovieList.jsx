import React, {useContext, useEffect} from 'react'
import MyMovie from '../Movie'

const MovieList = () => {
  let url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=messi&key=AIzaSyBuNK8py5fAhr09mmribVdjeS5GJjeJQjI"
  let {movie, setMovie, mySearch, setMySearch, select, setSelect} = useContext(MyMovie)
  useEffect(() => {
    let getMyMovie = async () => {
      let response = await fetch(url)
      let data = await response.json()  
      console.log(data) 
    }
    getMyMovie()
  , []})
  return (
    <div>MovieList</div>
  )
}

export default MovieList