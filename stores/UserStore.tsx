import {makeAutoObservable, makeObservable, observable, observe} from "mobx";
import {MainStore} from "./MainStore";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth, database} from "../config/firebase";
import {addDoc, collection} from "@firebase/firestore";

interface User {
    uid?: string,
    surname: string,
    name: string,
    patronymic: string,
    phone: string,
    photoURL?: any,
    email: string,
    password: string
}

export class UserStore {

    currentUser: User | null = null;
    usersDatabaseRef = collection(database, 'users');

    constructor(mainStore: MainStore) {
        this.currentUser = {
            surname: " ",
            name: " ",
            patronymic: " ",
            phone: " ",
            email: " ",
            password: ""
        }
        makeObservable(this, {
            currentUser: observable
        })
    }
    // пока не работает ниче
    // public signUp = () => {
    //     window.localStorage.setItem("user", this.currentUser?.uid as string)
    // }

    // public setUser = (user: User) => {
    //     this.currentUser = {...user};
    //     console.log(this.currentUser);
    //     window.localStorage.setItem("user", this.currentUser.uid as string)
    // }
    //
    // public getIsAuth = () => {
    //     return !!window.localStorage.getItem("user");
    // }
    //
    // public signUp = (user: User) => {
    //     createUserWithEmailAndPassword(auth, user.email, user.password)
    //         .then((registeredUser) => {
    //             addDoc(this.usersDatabaseRef, {
    //                 //почта идет из бд авторизации
    //                 uid: registeredUser.user.uid,
    //                 surname: user.surname,
    //                 name: user.name,
    //                 patronymic: user.patronymic,
    //                 phone: user.phone,
    //                 photoURL: registeredUser.user.photoURL
    //             })
    //                 .then(res => {
    //                     console.log(res)
    //                     this.setUser(user)
    //                 });
    //         })

}