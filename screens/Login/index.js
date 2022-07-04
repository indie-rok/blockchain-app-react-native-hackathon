import { Button, Divider } from '@rneui/base'
import { ethers } from 'ethers'
import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { UserContext } from '../../context/user'


const BASE_USER = { address: '0x3CFd9563d4CD5D052F83D50601b2fD1898496410', mnemonic: { phrase: 'dream draft guard border right ghost museum oval wall cherry unfold success' }, privateKey: '0x10444e4c1606b72bfd3618722e50c231033987ae44e2224a1c6be24484e27cda' }

export default function Login() {

    const { user, setUser } = useContext(UserContext)

    const login = async () => {
        const wallet = ethers.Wallet.createRandom()
        setUser(wallet)
    }

    const loginBase = () => {
        setUser(BASE_USER)
    }

    return (
        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>
            <Text>hello</Text>

            <Button title="Sign up" onPress={login} />

            <Divider /><Divider /><Divider /><Divider /><Divider /><Divider /><Divider /><Divider />

            <Button title="Login with base user" onPress={loginBase} />
        </View>
    )
}
