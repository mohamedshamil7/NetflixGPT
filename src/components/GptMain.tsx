import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import { authbgURL } from '../utils/constants'

const GptMain = () => {
  return (
    <>
         <div className="fixed -z-10 ">
        <img className='h-screen object-cover' src={authbgURL} alt="bgImage" />
      </div>
    <div className=''>
      <GptSearchBar/>
      <GptMoviesSuggestions/>
    </div>
    </>
  )
}

export default GptMain