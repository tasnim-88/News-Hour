import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';
export const AuthContext = createContext()
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    // console.log(user);

    // Creating new user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return (() => {
            unsubscribe()
        })
    }, [])

    // User login
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // Updating user profile
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData)
    }



    // User logout
    const logOut = () => {
        return signOut(auth)
    }



    const authData = {
        user, setUser, createUser, logIn, logOut, loading, setLoading, updateUser
    }
    return (<AuthContext value={authData}>{children}</AuthContext>);
};

export default AuthProvider;