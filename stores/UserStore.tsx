import {makeAutoObservable} from "mobx";
import {MainStore} from "./MainStore";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth, database} from "../config/firebase";
import {addDoc, collection} from "@firebase/firestore";

interface User {
    uid: string | undefined,
    surname: string | undefined,
    name: string | undefined,
    patronymic: string | undefined,
    phone: string | undefined,
    photoURL: any | undefined,
    email: string | undefined,
    password: string | undefined
}

export class UserStore {

    currentUser: User | null = null;
    usersDatabaseRef = collection(database, 'users');

    constructor(mainStore: MainStore) {
        this.currentUser = null;

        makeAutoObservable(this);
    }

    setUser = (userData: User | null) => {
        this.currentUser = {
            uid: userData?.uid,
            surname: userData?.surname,
            name: userData?.name,
            patronymic: userData?.patronymic,
            phone: userData?.phone,
            photoURL: userData?.photoURL,
            email: userData?.email,
            password: userData?.password
        }
    }

    signUp = (userData: User) => {
        return createUserWithEmailAndPassword(auth, userData.email as string, userData.password as string)
            .then((registeredUser) => {
                addDoc(this.usersDatabaseRef, {
                    uid: registeredUser.user.uid,
                    surname: userData.surname,
                    name: userData.name,
                    patronymic: userData.patronymic,
                    phone: userData.phone,
                    photoURL: registeredUser.user.photoURL
                })
                    .then(() => this.setUser(userData));
            })
    }

    signIn = (userData: User) => {
        return signInWithEmailAndPassword(auth, userData.email as string, userData.password as string)
            .then(() => this.setUser(userData))
    }

    logout = async () => {
        this.setUser(null)
        await signOut(auth)
    }
}