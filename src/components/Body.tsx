import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase/frebaseCongif'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../store/slice/userSlice'

const Body = () => {
  const dispatch = useDispatch()
     const appRouter = createBrowserRouter([
        {
        path:"/",
        element:<Login />  
        },
        {
            path:"/browse",
            element:<Browse/>
        }
     ]);

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          //user SignIn/SingUp
          const {uid,email,displayName} = user;
          dispatch(addUser({uid,email,displayName}))
        } else {
          // User is signed out
          dispatch(removeUser())

        }
      });
    },[])


  return (
    <div>
        
    <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body