import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth =getAuth(app)

const AuthProvider = ({ children }) => {
const [user, setUser] =useState(null);
const [loading, setLoading] = useState(true);


//Sign In with Google ....
const googleSignIn = (provider) =>{
  setLoading(true)
  return signInWithPopup(auth, provider);
}
//Sign In with Github ....
const githubSignIn = (provider) =>{
  // setLoading(true)
  return signInWithPopup(auth, provider);
}

//Sign in with email and password..
const signIn = (email, password) => {
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}

//Update user profiles..
const updateUserProfile = (profile) => {
  return updateUserProfile(auth.currentUser, profile);
}

//Sign Out ...
const logOut = () =>{
  setLoading(true)
  return signOut(auth);
}

//Create user and password
// setLoading(true)
const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

useEffect( () => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
    setLoading(false)
    console.log(currentUser);
  })
  return () => {
    unsubscribe();
  }
}, [])


//pass profider value.....
const authInfo = {
   user, 
   loading, 
   signIn, 
   updateUserProfile, 
   googleSignIn, 
   logOut, 
   createUser,
   githubSignIn 
  }

  return (
    <AuthContext.Provider value={ authInfo }>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;