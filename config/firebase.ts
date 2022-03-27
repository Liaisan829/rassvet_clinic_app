import {initializeApp} from "firebase/app";
import {getAuth, updateProfile} from "@firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getDownloadURL, ref, uploadBytes, getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAtKCluJaTXbTRYEDBoGj1h-8Nd1V7Tgmg",
    authDomain: "rassvet-87044.firebaseapp.com",
    projectId: "rassvet-87044",
    storageBucket: "rassvet-87044.appspot.com",
    messagingSenderId: "537561414398",
    appId: "1:537561414398:web:298f833115eb2d21a543af"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const storage = getStorage(app);

export const database = getFirestore(app);

export async function upload(photo: any, user: any, setLoading: any) {
    const photoRef = ref(storage, user.uid + '.png');

    setLoading(true);

    const snapshot = await uploadBytes(photoRef, photo);
    const photoURL = await getDownloadURL(photoRef);

    await updateProfile(user, {photoURL});

    setLoading(false);
    alert("Uploaded photo!");
}
