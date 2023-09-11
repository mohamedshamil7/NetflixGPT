import { API_OPTIONS, now_playing_movies } from '../constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../../store/slice/moviesSlice'
import { useEffect } from 'react'


const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch()
    const getNowPlayingMovies = async ()=>{
      const data = await fetch (now_playing_movies,API_OPTIONS)
      const json = await data.json()
      // console.log(json)
      dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
      getNowPlayingMovies()
    },[])
}

export default useNowPlayingMovies