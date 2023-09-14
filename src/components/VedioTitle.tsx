import React from 'react'
interface title {
    title : string,
    overview :string
}


const VedioTitle = ({title ,overview }:title) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24  absolute text-white bg-gradient-to-r from-black'>
        <h1 className='md:text-6xl text-2xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block text-lg py-6 w-1/4 '>{overview}</p>
        <div className='my-2 md:my-0'>
            <button className='mx-1 bg-white text-black py-2  md:py-4 mt-2 md:mt-0  px-6 md:px-12 text-xl hover:bg-opacity-80 rounded-lg'> ▶️ play</button>
            <button className='hidden md:inline-block mx-1 bg-gray-500 text-white p-4  px-12 text-xl bg-opacity-50 rounded-lg' >More Info </button>
        </div>
    </div>
  )
}

export default VedioTitle