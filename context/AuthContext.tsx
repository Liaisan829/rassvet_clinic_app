import React, {createContext, useContext, useEffect, useState} from 'react';
import {onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth, database} from '../config/firebase';
import {addDoc, collection} from "@firebase/firestore";

const AuthContext = createContext<any>({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const usersDatabaseRef = collection(database, 'users');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    phone: user.phoneNumber,
                    displayName: user.displayName
                })
            } else {
                setUser(null)
            }
            setLoading(false)
        })

        return () => unsubscribe()
    }, [])

    const signup = (userData: any) => {
        return createUserWithEmailAndPassword(auth, userData.email, userData.password)
            .then((registeredUser) => {
                addDoc(usersDatabaseRef, {
                    uid: registeredUser.user.uid,
                    surname: userData.surname,
                    name: userData.name,
                    patronymic: userData.patronymic,
                    phone: userData.phone,
                    photoURL: registeredUser.user.photoURL
                })
                    .then(res => console.log(res));
            })
    }

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        setUser(null)
        await signOut(auth)
    }

    return (
        <AuthContext.Provider value={{user, login, signup, logout}}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}

