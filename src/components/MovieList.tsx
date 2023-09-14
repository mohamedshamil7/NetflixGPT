import React from 'react'
import MovieCard from './MovieCard'
import {MdChevronLeft, MdChevronRight} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { addshowMoreMoviesGenere, togeleShowMoreMovies } from '../store/slice/moviesSlice'
interface Data {
    title : string,
    movies :any,
    rowId?:number
    showMore :boolean
    
}

const MovieList = ({title, movies,showMore}:Data) => {
    const dispatch = useDispatch()
    if(!movies) {return(
        <h1>iksudhf</h1>
    ) }

        const handleClick =()=>{

            dispatch(  togeleShowMoreMovies())
            dispatch(  addshowMoreMoviesGenere(title))
        }

  return (
    <div className="px-6 text-white">
      <h1 className="text-lg md:text-3xl py-4">{title}</h1>
      <div className="flex  overflow-x-scroll whitespace-nowrap items-center   scroll-smooth scrollbar-hide group">
  
        <div className="flex  ">
          {movies.map((movie: { id: string; poster_path: string }) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
          {showMore && (
            <button onClick={handleClick} className="z-20 h-1/4 m-auto hover:transform hover:scale-105  bg-black">
              Show More ▶️
            </button>
          )}
        </div>
        
      </div>
    </div>
  );
}

export default MovieList