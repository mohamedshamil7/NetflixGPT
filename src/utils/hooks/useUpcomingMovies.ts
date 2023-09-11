import { API_OPTIONS, now_playing_movies, upcoming_movies } from '../constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies, addUpcomingMovies } from '../../store/slice/moviesSlice'
import { useEffect } from 'react'


const useUpcomingMovies = ()=>{
    const dispatch = useDispatch()
    const getUpComingMovies = async ()=>{
      const data = await fetch (upcoming_movies,API_OPTIONS)
      const json = await data.json()
      // console.log(json)
      dispatch(addUpcomingMovies(json.results))
    }
    useEffect(()=>{
      getUpComingMovies()
    },[])
}

export default useUpcomingMovies