import React from 'react'
import MovieCard from './MovieCard'
interface Data {
    title : string,
    movies :any
}

const MovieList = ({title, movies}:Data) => {
    if(!movies) {return(
        <h1>iksudhf</h1>
    ) }
  return (
    <div className='px-6 text-white'>

        <h1 className='text-lg md:text-3xl py-4'>{title}</h1>
    <div className='flex  overflow-x-auto'>
        <div className='flex '>
        {movies.map((movie: { id: string; poster_path: string }) => <MovieCard key={movie?.id} posterPath={movie?.poster_path}/> )}
        
        </div>

    </div>
    </div>
  )
}

export default MovieList