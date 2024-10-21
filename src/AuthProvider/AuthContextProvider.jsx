import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Firebase/firebase.config'
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    
    //  * create user in firebase
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //  * Login User in firebase

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // * Observe current state
    useEffect( () => {
        const Unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log('observe', currentUser)
        })
        return () => {
            Unsubscribe();
        }
    }, [])

    // * Logout user
    const logOut = () => {
        return signOut(auth)
    }

    // * Google Login
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const info = {user, loading, signUp, logIn, logOut, signInWithGoogle}

    return (
        <AuthContext.Provider value={info}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;