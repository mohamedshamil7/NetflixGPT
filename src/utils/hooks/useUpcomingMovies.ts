import { API_OPTIONS, genere,  } from '../constants'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../../store/slice/moviesSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/appStore'


const useUpcomingMovies = ()=>{
  const upComingMovies = useSelector((store:RootState)=> store.movies.upComingMovies)
    const dispatch = useDispatch()
    const getUpComingMovies = async ()=>{
      const data = await fetch (genere.upcoming_movies,API_OPTIONS)
      const json = await data.json()
      // console.log(json)
      dispatch(addUpcomingMovies(json.results))
    }
    useEffect(()=>{
   ! upComingMovies&&   getUpComingMovies()
    },[])
}

export default useUpcomingMovies