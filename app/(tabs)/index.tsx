import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

const index = () => {
  return (
    <View style={styles.container}>
      <Text>Kevin index</Text>
      <StatusBar style='auto'/>
      <Link href="/profile" style={{color:'blue'}}>Go to Profile</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})