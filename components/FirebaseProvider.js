// import React from "react";

import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDocs, updateDoc, addDoc, collection, increment } from "firebase/firestore";
import { getStorage, ref, uploadBytes, list } from "firebase/storage";


// import firebaseConfig from "../config/firebase";

// import { useAuthState } from "react-firebase-hooks/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBv2DfO7Xq0UMTi0oMvSijPrxqxC0zorJY",
    authDomain: "better-office-stagging.firebaseapp.com",
    databaseURL: "https://better-office-stagging.firebaseio.com",
    projectId: "better-office-stagging",
    storageBucket: "better-office-stagging.appspot.com",
    messagingSenderId: "1078328598191",
    appId: "1:1078328598191:web:7d352a9e8c59b93ba83e5a",
    measurementId: "G-D97PD5YQ7K"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

export async function recordVideoCreation(userId = "123123") {
    const docRef = await addDoc(collection(db, "Videos"), {
        likeCount: 0,
        userId
    });
    return docRef
}

export async function uploadVideo(blob) {
    const { id } = await recordVideoCreation('123123testId')
    const videoRef = ref(storage, `videos/${id}.mov`)
    const video = await uploadBytes(videoRef, blob);
    return video;
}

export async function getAllVideos() {
    const videosRef = collection(db, "Videos");
    const docSnap = await getDocs(videosRef)

    return docSnap.docs.map(doc => doc.data());
}

export async function changeVoteBy(videoId, quantity) {
    const videoRef = doc(db, "Videos", videoId);

    // Atomically increment the population of the city by 50.
    await updateDoc(videoRef, {
        voteCount: increment(quantity)
    });
}

// const FirebaseContext = React.createContext();

// export function useFirebase() {
//     return React.useContext(FirebaseContext);
// }

// export default function FirebaseProvider(props) {
//     // const [user, loading] = useAuthState(auth);

//     // if (loading) {
//     //     return <AppLoading />;
//     // }
//     return (
//         <FirebaseContext.Provider
//             value={{
//                 user
//             }}
//         >
//             {props.children}
//         </FirebaseContext.Provider>
//     );
// }
