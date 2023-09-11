import React from 'react'
interface title {
    title : string,
    overview :string
}


const VedioTitle = ({title ,overview }:title) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24  absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='text-lg py-6 w-1/4 '>{overview}</p>
        <div className=''>
            <button className='mx-1 bg-white text-black p-4  px-12 text-xl hover:bg-opacity-80 rounded-lg'> ▶️ play</button>
            <button className='mx-1 bg-gray-500 text-white p-4  px-12 text-xl bg-opacity-50 rounded-lg' >More Info </button>
        </div>
    </div>
  )
}

export default VedioTitle