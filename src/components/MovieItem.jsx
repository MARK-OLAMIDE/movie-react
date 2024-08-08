import React from 'react'

const MovieItem = ({x}) => {
  return (
    <div>
          {/* ?.: means if thumbnails is there check, ? means query in react */}
          <img src={x.snippet?.thumbnails?.medium?.url} alt="" />
          <h1>{x.snippet?.title}</h1>
        </div>
  )
}

export default MovieItem