import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { db } from '../../components/FirebaseProvider'
// import { useCollection } from 'react-firebase-hooks/firestore';=

import { query, collection, getDocs } from "firebase/firestore";
import { ethers, Wallet } from 'ethers';
import { Button } from '@rneui/base';
import testAbi from '../../contracts/abi/test.json'


export default function MyCards() {

    // const [value] = useCollection(db, 'Rooms')


    async function test() {
        // Connect to the network
        let provider = ethers.getDefaultProvider('kovan');

        // Load the wallet to deploy the contract with

        let wallet = new ethers.Wallet.fromMnemonic("injury network mandate nature sea apology inside exclude pilot lottery pig sand");


        const contract = new ethers.Contract("0x03C15104bb46038Fd7818c4A618F529929F3EFaC", testAbi, provider)
        console.log(contract)
        // console.log(await contract.balanceOf(wallet.address))
    }

    useEffect(() => {
        // async function getStuff() {
        //     const q = query(collection(db, "Rooms"))
        //     const querySnapshot = await getDocs(q);
        //     querySnapshot.forEach((doc) => {
        //         // doc.data() is never undefined for query doc snapshots
        //         console.log(doc.id, " => ", doc.data());
        //     });
        // }
        // getStuff()
    }, [])

    // console.log(value)

    // const [value, loading, error] = useCollection(
    //     collection(getFirestore(firebaseApp), 'Rooms'),
    //     {
    //         snapshotListenOptions: { includeMetadataChanges: true },
    //     }
    // );

    return (
        <Text>
            <Button title="Test" onPress={test} />
        </Text>
    )
}
