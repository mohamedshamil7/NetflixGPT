import React, { Ref, forwardRef } from 'react'
import { IMG_CDN_URL } from '../utils/constants'

interface GenereMovieCardsporps{
    posterPath:string,
    title : string
}

const GenereMovieCards = forwardRef(({posterPath,title}:GenereMovieCardsporps,ref:Ref<HTMLElement>)=>{
    console.log(posterPath,":l")
    const cardBody = (
      <div className=" w-48 pr-4 mt-3">
        <img src={IMG_CDN_URL + posterPath} alt="movie card image" />
      </div>
    );
const content = ref ? <article ref={ref}>{cardBody}</article>: <article>{cardBody}</article>
return content
})


export default GenereMovieCards