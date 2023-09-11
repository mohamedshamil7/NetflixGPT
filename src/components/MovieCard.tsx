import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

interface data {
    posterPath :string
}

const MovieCard = ({posterPath}:data) => {
  return (
    <div className='w-48 pr-4'>
        <img src={IMG_CDN_URL+posterPath} alt="movie csfirjnf" />
    </div>
  )
}

export default MovieCard