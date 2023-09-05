import {   User , createUserWithEmailAndPassword ,signInWithEmailAndPassword,signOut, updateProfile} from "firebase/auth";
import { userData } from "../types";
import { auth } from "../firebase/frebaseCongif";






export const SignUp = ({email,password}:userData): Promise<{user: User;} | {errorCode: string;errorMessage: string;}>=>{
    
return  createUserWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
   // Signed in 
   const user = userCredential.user;

    return {user}
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   // ..
   return { errorCode:errorCode, errorMessage: errorMessage}
 });

}

export const SignIn= ({email,password}:userData): Promise<{

    user: User;
} | {

    errorCode: string;
    errorMessage: string;
}> =>{
return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    return { user };
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return { errorCode, errorMessage };
  });
}


export const signout = ():Promise<{status:boolean}| {status:boolean,errorCode:string, errorMessage:string}>=>{
  return signOut(auth).then(() => {
 return {status :true}
  }).catch((error) => {
    // An error happened.
   return{status : false , errorCode:error.errorcode , errorMessage : error.errorMessage}

  });
}

export const updateprofile = (user:User,fullName:string)=>{
  alert(fullName)
  return updateProfile(user, {
    displayName: fullName
  }).then(() => {
      // const {uid,email,displayName} = auth.currentUser;

    return
  }).catch((error) => {
    // An error occurred
    // ...
    return
  });
}
