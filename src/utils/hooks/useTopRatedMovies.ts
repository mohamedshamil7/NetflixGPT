import { API_OPTIONS,  popular_movies, top_rated_movies } from '../constants'
import { useDispatch } from 'react-redux'
import {  addTopRatedMovies } from '../../store/slice/moviesSlice'
import { useEffect } from 'react'


const useTopRatedMovies = ()=>{
    const dispatch = useDispatch()
    const getTopRatedMovies = async ()=>{
      const data = await fetch (top_rated_movies,API_OPTIONS)
      const json = await data.json()
      // console.log(json)
      dispatch(addTopRatedMovies(json.results))
    }
    useEffect(()=>{
        getTopRatedMovies()
    },[])
}

export default useTopRatedMovies