import { API_OPTIONS, now_playing_movies } from '../constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../../store/slice/moviesSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/appStore'


const useNowPlayingMovies = ()=>{
  const nowPlayingMovies = useSelector((store:RootState)=> store.movies.nowPlayingMovies)
    const dispatch = useDispatch()
    const getNowPlayingMovies = async ()=>{
      const data = await fetch (now_playing_movies,API_OPTIONS)
      const json = await data.json()
      dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
     ! nowPlayingMovies && getNowPlayingMovies()
    },[])
}

export default useNowPlayingMovies