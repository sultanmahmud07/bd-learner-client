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


//Sign In with Google ....
const googleSignIn = (provider) =>{
  return signInWithPopup(auth, provider);
}

//Sign in with email and password..
const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
}

//Sign Out ...
const logOut = () =>{
  return signOut(auth);
}

//Create user and password
const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

useEffect( () => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
    console.log(currentUser);
  })
  return () => {
    unsubscribe();
  }
}, [])


const authInfo = { user,signIn, googleSignIn, logOut, createUser }

  return (
    <AuthContext.Provider value={ authInfo }>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;