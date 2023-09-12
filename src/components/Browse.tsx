import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../utils/hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../utils/hooks/usePopularMovies'
import useTopRatedMovies from '../utils/hooks/useTopRatedMovies'
import useUpcomingMovies from '../utils/hooks/useUpcomingMovies'
import { useSelector } from 'react-redux'
import { RootState } from '../store/appStore'
import GptMain from './GptMain'

const Browse = () => {
  const showGptSearch = useSelector((store:RootState)=> store.gpt.showGptSearch)
  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()

  return (
    <div>
      <Header/>
      {
        showGptSearch ? (

          <GptMain/>
        ):(
          <>
      <MainContainer/>
      <SecondaryContainer/>
          </>
        )
      }
    </div>
  )
}

export default Browse