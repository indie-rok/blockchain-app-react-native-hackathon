import { Button, Divider } from '@rneui/base'
import { ethers } from 'ethers'
import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { UserContext, BASE_USER } from '../../context/user'

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
