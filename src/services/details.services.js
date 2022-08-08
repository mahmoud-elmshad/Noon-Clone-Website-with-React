import db from "../firebase";
import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const prdCollection = collection(db, 'Products')
class DetailsService {
    addProduct = (newPrd) => {
        return addDoc(prdCollection, newPrd);
    }

    updateProduct = (id, updatedPrd) => {
        const prdDoc = doc(db, 'Products', id)
        return updateDoc(prdDoc, updatedPrd);
    }

    deletePrd = (id) => {
        const prdDoc = doc(db, 'Products', id)
        return deleteDoc(prdDoc);
    }

    getAllPrd = () => {
        return getDocs(prdCollection)
    }

    getPrd = (id) => {
        const prdDoc = doc(db, 'Products', id)
        return getDoc(prdDoc);
    }
}

export default new DetailsService();