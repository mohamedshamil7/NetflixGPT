import React, { useEffect } from 'react'
import { NetflixLogoURL } from '../utils/constants'
import { signout } from '../utils/hooks/authHooks'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/appStore'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { auth } from '../utils/firebase/frebaseCongif'
import { addUser, removeUser } from '../store/slice/userSlice'
import { toggleGptSearchView } from '../store/slice/gptSlice'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((store:RootState)=>store.user)
  const showGptSearch = useSelector((store:RootState)=> store.gpt.showGptSearch)
  const handleClick = ()=>{
    const response = signout()
    if("errorMessage"in response){
      alert( response?.errorMessage)
      return
    }

  }
  const handleGptSearchClick = ()=>{
    dispatch(toggleGptSearchView())
  }

  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        //user SignIn/SingUp
        const {uid,email,displayName} = user;
        dispatch(addUser({uid,email,displayName}))
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")

      }
    });
    // unsubscribe is called when component unmounts
    return ()=> unsubscribe()
  },[])

  return (
    <div 
    className='absolute w-screen  px-8 py-2 bg-gradient-to-b from-black  z-10 flex flex-col md:flex-row justify-between' >
        <img 
        className='w-44 mx-auto md:mx-0' src={NetflixLogoURL} alt="logo" />
       {user && (<div className='flex justify-between'>
        <button onClick={handleGptSearchClick} className='py-2 px-2 my-2 mx-4 bg-white rounded-lg'>{showGptSearch? "Home ":"GPT Search"}</button>
          <button onClick={handleClick} className='cursor:pointer  text-xl text-white'>Sign Out</button>
        </div>)}
    </div>
  )
}

export default Header