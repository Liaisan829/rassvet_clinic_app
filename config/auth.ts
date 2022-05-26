import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';
import {addDoc, collection} from '@firebase/firestore';
import {auth, firestore, storage} from './firebase';
import {useEffect, useState} from 'react';
import {getDownloadURL, ref, uploadBytes} from '@firebase/storage';
import {getDocsFromFirebase} from "../utils/getDocsFromFirebase";

const usersDatabaseRef = collection(firestore, 'users');

export function signUp(data: any) {
    return createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((registeredUser) => {
            addDoc(usersDatabaseRef, {
                uid: registeredUser.user.uid,
                surname: data.surname,
                name: data.name,
                patronymic: data.patronymic,
                email: registeredUser.user.email,
                phone: data.phone,
                photoURL: data.photoURL,
                role: "user"
            })
                .then(() => {
                    window.localStorage.setItem("user", data.email);
                });
        });
}

export function signIn(email: any, password: any) {
    return signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            window.localStorage.setItem("user", email);
        });
}

export function logOut() {
    window.localStorage.removeItem("user");
    return signOut(auth);
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState<any>(auth.currentUser);

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            if (auth.currentUser) {
                setCurrentUser({
                    uid: user?.uid,
                    email: user?.email,
                    photoURL: "https://firebasestorage.googleapis.com/v0/b/rassvet-87044.appspot.com/o/avatar.png?alt=media&token=d38cd8c1-47b5-4f0d-9152-0a1dda1919ef"
                });
            }
        });
    }, []);

    return currentUser;
}

export async function uploadUserPhoto(file: any, currentUser: any, setLoading: any) {
    const fileRef = ref(storage, currentUser.uid + '.png')
    setLoading(true)
    const snapshot = await uploadBytes(fileRef, file)
    const photoURL = await getDownloadURL(fileRef)

    await updateProfile(currentUser, {photoURL})

    setLoading(false)
}


export async function getUserFromStore(currentUser: any) {
    const users = getDocsFromFirebase("users");
    const [loggedUser, setLoggedUser] = useState<any>(null);
    const usersList: Array<any> = [];
    users.then(user => usersList.push(user));
    usersList.filter((user: any) => (user.email === currentUser.email)).map((logUser: any) => {
        setLoggedUser(logUser);
    })
    return loggedUser;
}
