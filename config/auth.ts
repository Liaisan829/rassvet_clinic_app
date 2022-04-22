import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
} from 'firebase/auth';
import {addDoc, collection} from '@firebase/firestore';
import {auth, database, storage} from './firebase';
import {useEffect, useState} from 'react';
import {getDownloadURL, ref, uploadBytes} from '@firebase/storage';
import profileLogo from '../public/profile/profileLogo.svg';

const usersDatabaseRef = collection(database, 'users');

export function signUp(data: any) {
    return createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((registeredUser) => {
            addDoc(usersDatabaseRef, {
                uid: registeredUser.user.uid,
                surname: data.surname,
                name: data.name,
                patronymic: data.patronymic,
                email: data.email,
                phone: data.phone,
                photoURL: profileLogo
            })
                .then((res) => {
                    console.log(res);
                });
        });
}

export function signIn(email: any, password: any) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logOut() {
    return signOut(auth);
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState<any>(auth.currentUser);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });
        return unsub;

    }, []);

    return currentUser;
}


export async function uploadUserPhoto(file: any, currentUser: any, setLoading: any) {
    const fileRef = ref(storage, currentUser.uid + '.png');
    setLoading(true);
    const snapshot = await uploadBytes(fileRef, file);
    const photoURL = await getDownloadURL(fileRef);

    await updateProfile(currentUser, {photoURL});

    setLoading(false);
    alert('Uploaded file');
}
