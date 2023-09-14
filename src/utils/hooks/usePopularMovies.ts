import { API_OPTIONS, genere, } from '../constants'
import { useDispatch } from 'react-redux'
import {  addPopularMovies } from '../../store/slice/moviesSlice'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/appStore'


const usePopularMovies = ()=>{
  const popularMovies = useSelector((store:RootState)=> store.movies.popularMovies)
    const dispatch = useDispatch()
    const getPoplularMovies = async ()=>{
      const data = await fetch (genere.popular_movies,API_OPTIONS)
      const json = await data.json()
      dispatch(addPopularMovies(json.results))
    }
    useEffect(()=>{
     ! popularMovies && getPoplularMovies()
    },[])
}

export default usePopularMovies