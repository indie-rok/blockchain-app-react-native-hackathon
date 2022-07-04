import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './screens/Feed';
import Screens from './screens/ScreenContainer.js'
// import firebase from './services/firebase'
// import { getFirestore, collection } from 'firebase/firestore';



export default function App() {

  // const [value, loading, error] = useCollection(
  //   collection(getFirestore(firebaseApp), 'Rooms'),
  //   {
  //     snapshotListenOptions: { includeMetadataChanges: true },
  //   }
  // );

  // useEffect(() => {
  //   console.log('component did mount')

  // }, [])

  return (
    <Screens />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
