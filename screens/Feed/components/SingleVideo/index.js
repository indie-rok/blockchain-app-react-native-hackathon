import React, { useId, useRef, useState } from 'react'
import { Video } from 'expo-av';
import { View, StyleSheet, Text } from 'react-native'
import { Button } from '@rneui/base';
import { changeVoteBy } from '../../../../components/FirebaseProvider';


export default function SingleVideo({ videoId, uri, voteCountProp }) {

    const videoRef = useRef()
    const [voteCount, setVoteCount] = useState(voteCountProp)
    const [votingUp, setVotingUp] = useState(false)
    const [votingDown, setVotingDown] = useState(false)


    const voteUp = async () => {
        setVotingUp(true);
        await changeVoteBy(videoId, 1)
        setVoteCount(voteCount + 1)
        setVotingUp(false)
    }

    const voteDown = async () => {
        setVotingDown(true);
        await changeVoteBy(videoId, -1)
        setVoteCount(voteCount - 1)
        setVotingDown(false)
    }


    return (
        <View key={useId}>
            <Video
                ref={videoRef}
                style={styles.video}
                source={{
                    uri
                }}
                useNativeControls
                resizeMode="cover"
            />
            <View style={styles.voteContainer}>
                <Button title="Bad" onPress={voteDown} buttonStyle={{ backgroundColor: 'rgba(214, 61, 57, 1)' }} loading={votingDown} />
                <Button title="Good" buttonStyle={{
                    backgroundColor: 'rgba(111, 202, 186, 1)',
                    borderRadius: 5,
                }} onPress={voteUp} loading={votingUp} />
                <Text>{voteCount}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    video: {
        width: 400,
        height: 600
        // flex: 1
    },
    voteContainer: {
        background: 'none',
        backgroundColor: 'rgba(52, 52, 52, alpha)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
