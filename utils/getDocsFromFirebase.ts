import {collection, getDocs} from "@firebase/firestore";
import {firestore} from "../config/firebase";

export async function getDocsFromFirebase(path: string) {
    const databaseRef = collection(firestore, path);
    const data = await getDocs(databaseRef);
    return data.docs.map((doc) => ({...doc.data()}));
}