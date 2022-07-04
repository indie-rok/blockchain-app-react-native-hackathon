import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { db } from '../../components/FirebaseProvider'
// import { useCollection } from 'react-firebase-hooks/firestore';

import { query, collection, getDocs } from "firebase/firestore";


export default function MyCards() {

    // const [value] = useCollection(db, 'Rooms')

    useEffect(() => {
        async function getStuff() {
            const q = query(collection(db, "Rooms"))
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        }
        getStuff()
    }, [])

    // console.log(value)

    // const [value, loading, error] = useCollection(
    //     collection(getFirestore(firebaseApp), 'Rooms'),
    //     {
    //         snapshotListenOptions: { includeMetadataChanges: true },
    //     }
    // );

    return (
        <Text>MyCards</Text>
    )
}
