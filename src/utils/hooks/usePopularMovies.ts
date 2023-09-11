import { API_OPTIONS,  popular_movies } from '../constants'
import { useDispatch } from 'react-redux'
import {  addPopularMovies } from '../../store/slice/moviesSlice'
import { useEffect } from 'react'


const usePopularMovies = ()=>{
    const dispatch = useDispatch()
    const getPoplularMovies = async ()=>{
      const data = await fetch (popular_movies,API_OPTIONS)
      const json = await data.json()
      // console.log(json)
      dispatch(addPopularMovies(json.results))
    }
    useEffect(()=>{
      getPoplularMovies()
    },[])
}

export default usePopularMovies