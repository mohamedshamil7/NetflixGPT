import React, { useRef, useState } from 'react'
import { authbgURL } from '../utils/constants'
import { checkValideData } from '../utils/validation'
import { SignIn, SignUp, updateprofile } from '../utils/hooks/authHooks'
import { authdata } from '../utils/types'
import Header from './Header'
import { auth } from '../utils/firebase/frebaseCongif'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/slice/userSlice'

const Login = () => {
    const dispatch = useDispatch()
    const [isSignInForm,setIsSignInForm] = useState(true)
    const [errorMessage,setErrorMessage]= useState<null | string >(null)
     const email = useRef<HTMLInputElement>(null!)
     const password  = useRef<HTMLInputElement>(null!)
     const fullName  = useRef<HTMLInputElement>(null!)
     
     const handleButtonClick = ()=>{
        const data :authdata = {
            email: email.current?.value,
            password: password.current?.value,
            fullName:fullName?.current?.value || "",
            isSignInForm
        }

        const message = checkValideData(data)
        setErrorMessage(message)
        if(message) return
        initiateAuth(data)
    }
    const initiateAuth =async (data: authdata)=>{
        if(isSignInForm){
            const response = await SignIn(data)
            if('errorCode' in response){
                setErrorMessage(response?.errorCode +response?.errorMessage)
                return
            }


        }else{
            const response =await  SignUp(data)
            if('errorCode' in response){
                setErrorMessage(response?.errorCode +response?.errorMessage)
                return
            }
            await updateprofile(response.user,data.fullName)
            updateStore()


        }
        
    }


    const updateStore =( )=>{
    const user = auth.currentUser
    if(user!=null){
      const {uid,email,displayName} = user;
      dispatch(addUser({uid,email,displayName}))
    }
    }
    

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header/>
      <div className="absolute">
        <img className='h-screen object-cover md:h-full ' src={authbgURL} alt="bgImage" />
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className="absolute p-12 w-full md:w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 w-full my-4 bg-gray-700"
          />
        )}
        <input 
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 w-full my-4 bg-gray-700"
        />
        <input 
            ref={password}
          type="password"
          placeholder="Password"
          className="p-4 w-full my-4 bg-gray-700"
        />
        <p className='text-red-600'>{errorMessage}</p>
        <button onClick={handleButtonClick} className="cursor-pointer p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign up"} 
        </button>
        <p onClick={toggleSignInForm} className="py-6 cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Signup"
            : "already have an acount ? Signin ."}
        </p>
      </form>
    </div>
  );
}

export default Login