import React, { useRef } from 'react' 
import { useSearchMovies } from '../utils/hooks/GptHooks';

const GptSearchBar = () => {
    const searchText = useRef<HTMLInputElement>(null!)
    const {searchMovies} = useSearchMovies()
    const handleSearchclick = ()=>{
        searchMovies(searchText.current.value)
    }
  return (
    <div className='pt-[40%]  md:pt-[10%] flex justify-center'>
        <form className='w-full  md:w-1/2 bg-black grid grid-cols-12 ' onSubmit={(e)=> e.preventDefault()}>
            <input ref={searchText} type="text" className=' p-2 m-4 col-span-9' placeholder="What would you like to watch today ?" /> 
            <button onClick={handleSearchclick} className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white mx-auto rounded-md'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar