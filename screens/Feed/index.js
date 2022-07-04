import React, { useEffect, useState, useId } from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { Card, Button, Icon } from "@rneui/themed";


import { getAllVideos } from '../../components/FirebaseProvider';
import SingleVideo from './components/SingleVideo';

export default function Feed() {
    const [videoList, setVideoList] = useState([])

    useEffect(() => {
        async function load() {
            const videos = await getAllVideos()
            console.log(videos)
            setVideoList(videos)
        }

        load()
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {videoList.map((videoData) => {
                return <SingleVideo
                    uri={videoData.fullUrl}
                    voteCountProp={videoData.voteCount}
                    videoId={videoData.videoId} />
            })}
        </ScrollView>
    )
}



const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    videoContainer: {
        // flex: 1
        display: 'flex'
    },
});


/**
 * Todo in this screen
 * Do 100 % width height on videos
 * Make votecontainer transparent
 * Do autoplay on video view
 */