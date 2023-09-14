import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/appStore'
import MovieList from './MovieList'

const GptMoviesSuggestions = () => {
    const {movieNames,movieResults } = useSelector((store:RootState)=> store.gpt)
    if(!movieNames || !movieResults) return null
  return (
    <div className="p-4 m-4 bg-black opacity-90 text-white">
      {movieNames.map((movieName: any, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
          showMore={false}
        />
      ))}
    </div>
  );
}

export default GptMoviesSuggestions