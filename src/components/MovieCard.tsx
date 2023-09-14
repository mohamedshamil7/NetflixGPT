import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

interface data {
    posterPath :string
}

const MovieCard = ({posterPath}:data) => {
  if(!posterPath) return null
  return (
    <div className='w-36 md:w-48 pr-4'>
        <img src={IMG_CDN_URL+posterPath} alt="movie card image" />
    </div>
  )
}

export default MovieCard