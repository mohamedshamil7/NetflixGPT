import { authdata } from "./types"


export const checkValideData = ({email,password,fullName,isSignInForm}:authdata)  =>{
    const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    const isPasswordValid =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isNameValid =/^[A-Za-z][A-Za-z0-9_]{0,29}$/.test(fullName)

    if(!isSignInForm && !isNameValid) return "Name is not Valid"
    if(!isEmailValid) return "Email Id is not Valid"
    if(!isPasswordValid) return "password is not Valid"
    return null
}