import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { Button } from "@rneui/themed";
import { Video } from 'expo-av';

import { uploadVideo } from '../../components/FirebaseProvider';



async function uriToBlob(uri) {
    return await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
    });
}

export default function TakeVideo() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.front);
    const cameraRef = useRef()
    const [recording, setRecording] = useState(false)
    const [currentRecording, setCurrentRecording] = useState({})
    const hasRecordingToShow = currentRecording.uri
    const videRef = useRef()

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);


    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const sendVideo = async () => {
        const blob = await uriToBlob(currentRecording.uri);

        const file = await uploadVideo(blob);

        
    }

    return (
        <View style={styles.container}>
            <Button title="Take Video" buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderRadius: 5,
            }} onPress={async () => {
                if (cameraRef) {
                    setRecording(true)
                    const data = await cameraRef.current.recordAsync()
                    console.log(data)
                    setCurrentRecording(data)
                }
            }} />

            <Button title="Stop Video" buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderRadius: 5,
            }} onPress={async () => {
                if (cameraRef) {
                    setRecording(false)
                    await cameraRef.current.stopRecording()
                }
            }} />

            <Button title="Reset Video" buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderRadius: 5,
            }} onPress={async () => {
                setCurrentRecording({})
            }} />

            <Button title="Send Video" buttonStyle={{
                backgroundColor: 'rgba(111, 202, 186, 1)',
                borderRadius: 5,
            }} onPress={sendVideo} />

            {(hasRecordingToShow) ? <Video
                ref={videRef}
                style={styles.video}
                source={{
                    uri: currentRecording.uri
                }}
                useNativeControls
                resizeMode="cover"
                isLooping

            /> : <Camera style={styles.camera} type={type} ref={cameraRef}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(type === CameraType.back ? CameraType.front : CameraType.back);
                        }}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                </View>
            </Camera>}
        </View>


    );





}

const styles = {
    container: { height: 400, width: 400 },
    camera: { height: 400, width: 400 },
    video: {
        width: 400,
        height: 700
    }
}