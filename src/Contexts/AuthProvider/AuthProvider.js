import React from 'react';
import { createContext } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
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


useEffect( () => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
    console.log(currentUser);
  })
  return () => {
    unsubscribe();
  }
}, [])


const authInfo = { user, googleSignIn }

  return (
    <AuthContext.Provider value={ authInfo }>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;