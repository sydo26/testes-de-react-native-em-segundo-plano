import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';


BackgroundFetch.setMinimumIntervalAsync(1) // apenas para iphone
// no android ele executa +/- a cada 15 minutos

TaskManager.defineTask('teste', () => {
  console.log("Teste")
  return BackgroundFetch.Result.NewData
})

export default function App() {

  useEffect(() => {
    
    ;(async () => {
      console.log("register task")
      await BackgroundFetch.registerTaskAsync('teste')
    })()
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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