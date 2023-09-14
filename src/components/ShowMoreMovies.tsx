import React, { useCallback, useRef, useState } from 'react'
import useCards from '../utils/hooks/useCards'
import GenereMovieCards from './GenereMovieCards'
import { useSelector } from 'react-redux'
import { RootState } from '../store/appStore'

const ShowMoreMovies = () => {
  const genereName = useSelector((store:RootState)=> store.movies.showMoreMoviesGenere)
  const [pagenum,setPagenum] = useState(1)
  const [movies,setMovies] = useState([])
  const{
    isLoading,
    isError,
    error,
    results,
    hasNextPage
  }= useCards(pagenum)
  const  intObserver = useRef<IntersectionObserver>()
  


    const lastPostRef =useCallback ((post:any)=>{
        if(isLoading) return 
        
        if(intObserver.current) intObserver.current.disconnect()
        intObserver.current = new IntersectionObserver(posts=>{
            console.log("enteeres");
            console.log(posts[0]);
            if(posts[0].isIntersecting && hasNextPage){
                console.log("near oisdfjoasfnj alst");
                setPagenum(prev=> prev+1)
            }
        })
        if(post)intObserver.current?.observe(post)
    },[isLoading,hasNextPage])

    if(!genereName) return null

    if(isError && 'message' in error) {return <p className='center'>Error: {error?.message}</p>}

    let content = results.map((post,i)=>{

        if  ( results.length ===i+1 ){
          console.log("last");
          
          return  <GenereMovieCards ref={lastPostRef} key={post.id} posterPath={post?.poster_path} title={genereName}/>
        }
        return <GenereMovieCards key={post.id} posterPath={post?.poster_path} title={genereName}/>

    })

  return (
    <div className='absolute bg-black'>

      <h1 className='text-white text-3xl font-bold mt-36 md:mt-28  text-center '>{genereName}</h1>
    <div id={'slider'} className='  h-full pt-12 px-24   overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide flex flex-wrap'>
    {content}
     {isLoading && (<p>Loading more posts</p>)}
 </div>
    </div>
  )
}

export default ShowMoreMovies