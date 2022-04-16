import {collection, getDocs} from "@firebase/firestore";
import {database} from "../config/firebase";

export async function getDocsFromFirebase(path: string) {
    const databaseRef = collection(database, path);

    const data = await getDocs(databaseRef);
    return data.docs.map((doc) => ({...doc.data()}));
}