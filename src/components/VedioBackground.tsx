import React from 'react'
import useGetMovieVedios from '../utils/hooks/useGetMovieVedios'
import { useSelector } from 'react-redux'
import { RootState } from '../store/appStore'
import { youtube_vedio_embeded } from '../utils/constants'

const VedioBackground = ({movieId}:{movieId:string}) => {
    const trailerVedio  = useSelector((store:RootState)=> store.movies?.trailerVedio)
    useGetMovieVedios(movieId)
    if(!trailerVedio){
        return (
            <h2>fetvching ...</h2>
        )
    }


  return (
    <div>
    {"key" in trailerVedio && (<iframe
      className='w-screen aspect-video'
        src={youtube_vedio_embeded+trailerVedio?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>)}
    </div>
  );
}

export default VedioBackground