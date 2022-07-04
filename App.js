import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './screens/Feed';
import Screens from './screens/ScreenContainer.js'


import { UserContext } from './context/user'
import Login from './screens/Login';


export default function App() {

  const [user, setUser] = useState(null)

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {(user) ? <Screens /> : <Login />}

      </UserContext.Provider>
    </>
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
