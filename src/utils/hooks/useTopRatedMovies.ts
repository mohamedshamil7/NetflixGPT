import { API_OPTIONS, genere,   } from '../constants'
import { useDispatch } from 'react-redux'
import {  addTopRatedMovies } from '../../store/slice/moviesSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/appStore'


const useTopRatedMovies = ()=>{
  const topRatedMovies = useSelector((store:RootState)=> store.movies.topRatedMovies)
    const dispatch = useDispatch()
    const getTopRatedMovies = async ()=>{
      const data = await fetch (genere.popular_movies,API_OPTIONS)
      const json = await data.json()
      dispatch(addTopRatedMovies(json.results))
    }
    useEffect(()=>{
    
    !topRatedMovies&&   getTopRatedMovies()
    },[])
}

export default useTopRatedMovies