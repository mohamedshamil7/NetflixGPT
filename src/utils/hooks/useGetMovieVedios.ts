import { useEffect } from "react"
import { API_OPTIONS, get_movie_vedios } from "../constants"
import { useDispatch } from "react-redux"
import { addTrailerVedio } from "../../store/slice/moviesSlice"

const useGetMovieVedios = ()=>{
    const dispatch = useDispatch()
   const getMovieVedios =async () => {
        const data = await fetch(get_movie_vedios,API_OPTIONS)
        const json = await data.json()
        // console.log(json.results)
         filterMovieTrailer(json.results)
    }
    const filterMovieTrailer = (vedios:any)=>{
        const filterData = vedios.filter((vedio:any)=> vedio.type ==="Trailer")
        const trailer = filterData.length ? filterData[0] : vedios[0]
        // console.log(trailer)
        dispatch(addTrailerVedio(trailer))
    }
    useEffect(()=>{
        getMovieVedios()
    },[])
}

export default useGetMovieVedios