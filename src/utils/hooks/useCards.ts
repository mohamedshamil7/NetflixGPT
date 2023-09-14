
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/appStore';
import { API_OPTIONS, genere } from '../constants';
type movieData ={
    id:string,
    poster_path:string
}
const useCards =  (pageNum=1) => {
    const showMoreGenere = useSelector((store:RootState)=> store.movies.showMoreMoviesGenere)
    const [results, setResults] = useState<[]|[movieData]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState<({}| {message:string})>({});
    const [hasNextPage, setHasNextPage] = useState(false);
    useEffect(()=>{
        setIsLoading(true)
        setIsError(false)
        setError({})

        const controller = new AbortController()
        const {signal} = controller

     getCards(pageNum,{signal},showMoreGenere)
        
        .then((data:[])=>{
            setResults((prev)=> [...prev,...data])
            setHasNextPage(Boolean(data.length))
            setIsLoading(false)
        }).catch((e)=>{
            setIsLoading(false)
            if(signal.aborted) return
            setIsError(true)
            setError({message:e.message})

        })

        return()=> controller.abort()
    },[pageNum])

    return {isLoading,isError,error,results,hasNextPage}
}

export default useCards 

export const getCards  = async(pageNum:any,options={},showMoreGenere:any)=>{
let selectedGenere = genere.now_playing_movies
if (showMoreGenere == "Now Playing") selectedGenere= genere.now_playing_movies
if (showMoreGenere == "Top Rated")selectedGenere = genere.top_rated_movies
if (showMoreGenere == "Popular") selectedGenere = genere.popular_movies
if (showMoreGenere == "up coming")selectedGenere = genere.upcoming_movies
 return  await fetch(selectedGenere+`?page=${pageNum}`,API_OPTIONS).then(async (data)=>{
      const json = await data.json()
      return json.results;
  })

}