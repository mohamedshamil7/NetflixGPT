import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { RootState } from '../store/appStore'

const SecondaryContainer = () => {
  const movies = useSelector((store:RootState)=> store.movies)
  return (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>

      <MovieList title= {"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title= {"Top Rated"} movies={movies?.topRatedMovies}/>
      <MovieList title= {"Popular"} movies={movies?.popularMovies}/>
      <MovieList title= {"up coming"} movies={movies?.upComingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer