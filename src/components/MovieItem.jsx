import React from 'react'

const MovieItem = ({tunde}) => {
  return (
    <div>
          {/* ?.: means if thumbnails is there check, ? means query in react */}
          <img src={tunde.snippet?.thumbnails?.medium?.url} alt="" />
          <h1>{tunde.snippet?.title}</h1>
        </div>
  )
}

export default MovieItem