import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/appStore'
import VedioBackground from './VedioBackground'
import VedioTitle from './VedioTitle'

const MainContainer = () => {
    const movies = useSelector((store:RootState) => store.movies?.nowPlayingMovies)
    if(!movies) {
        return(
            <h1>Waiting.. no movies now</h1>
        )
    }
    const mainMovie = movies[2]
   const  {original_title,overview,id} = mainMovie
  return (
    <div>
        <VedioTitle title={original_title}  overview={overview}/>
        <VedioBackground movieId = {id} />
    </div>
  )
}

export default MainContainer