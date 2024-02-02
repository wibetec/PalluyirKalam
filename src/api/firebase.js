import { db } from '../components/config/config'
import { doc, getDoc } from "firebase/firestore";

export const getActivity =async () => {
    const docRef = doc(db, "Activity", "wtpj3aeg1qVx1DwO3GHn");

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
       return  docSnap.data();
    }
    else {
        console.log("No such document!");
    }
}