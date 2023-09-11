import React from 'react'
import useGetMovieVedios from '../utils/hooks/useGetMovieVedios'
import { useSelector } from 'react-redux'
import { RootState } from '../store/appStore'

const VedioBackground = ({movieId}:{movieId:string}) => {
    const trailerVedio  = useSelector((store:RootState)=> store.movies?.trailerVedio)
    useGetMovieVedios()

    if(!trailerVedio){
        return (
            <h2>fetvching ...</h2>
        )
    }
  return (
    <div>
      <iframe
      className='w-screen aspect-video'
        src="https://www.youtube.com/embed/InGnxypZY7s?si=InGnxypZY7s?&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VedioBackground