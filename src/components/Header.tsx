import React from 'react'
import { NetflixLogoURL } from '../utils/constants'
import { signout } from '../utils/hooks/authHooks'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/appStore'

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((store:RootState)=>store.user)
  const handleClick = ()=>{
    const response = signout()
    if("errorMessage"in response){
      alert( response?.errorMessage)
      return
    }
    navigate("/")

  }
  return (
    <div 
    className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between' >
        <img 
        className='w-44' src={NetflixLogoURL} alt="logo" />
       {user && (<div className='flex'>
          <button onClick={handleClick} className='cursor:pointer font-bold text-2xl text-white'>Sign Out</button>
        </div>)}
    </div>
  )
}

export default Header