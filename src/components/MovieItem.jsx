import React from 'react'

const MovieItem = ({x}) => {
  return (
    <div  className='container'>
          {/* ?.: means if thumbnails is there check, ? means query in react */}
          <img src={x.snippet?.thumbnails?.medium?.url} alt="" />
          <h4>{x.snippet?.title}</h4>
        </div>
  )
}

export default MovieItem