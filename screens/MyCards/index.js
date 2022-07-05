import React, { useContext, useEffect } from 'react'
import { Text } from 'react-native'
import { db } from '../../components/FirebaseProvider'
// import { useCollection } from 'react-firebase-hooks/firestore';=

import { query, collection, getDocs } from "firebase/firestore";
import { ethers, Wallet } from 'ethers';
import { Button, Text as TextTN } from '@rneui/base';
import testAbi from '../../contracts/abi/test.json'
import { UserContext } from '../../context/user';
import Avatar from "react-native-boring-avatars";


export default function MyCards() {

    // const [value] = useCollection(db, 'Rooms')

    const { user, setUser } = useContext(UserContext)

    async function logout() {
        setUser(null)
    }


    async function test() {
        // Connect to the network
        let provider = new ethers.providers.InfuraProvider('kovan', {
            projectId: 'cffe14235e224785880eb18e255b271b',
            projectSecret: 'b07f6638a9c149d6b7de12b969bf9937'
        })
        // .getDefaultProvider('kovan', { infura: 'cffe14235e224785880eb18e255b271b' });

        // Load the wallet to deploy the contract with

        let wallet = new ethers.Wallet.fromMnemonic("injury network mandate nature sea apology inside exclude pilot lottery pig sand");


        const contract = new ethers.Contract("0xe3a865d7501cc6323c6e466c74989bf604918c9c", testAbi, provider)

        console.log(await contract.deployed())
        
        // const instance = contract.connect(provider)

        // console.log(await instance.balanceOf('0x3CFd9563d4CD5D052F83D50601b2fD1898496410', 0))
        // console.log(await contract.)
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
        <>
            <TextTN h1>Profile</TextTN>
            <Text> Address: {user.address}</Text>
            <Text>
                <Avatar
                    size={200}
                    name={user.address}
                    variant="pixel"
                    colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']}
                />
            </Text>

            {/* <Text>{identicon(user.address)}</Text> */}


            <Button title="Test" onPress={test} />
            <Button title="Logout" onPress={logout} />
        </>
    )
}
