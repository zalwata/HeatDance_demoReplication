import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header'

export default function App() {
  return (

    <View style={styles.container}>
     {/* {header} */}
      <Header />
      <View style = {styles.content}>
        {/* {content} */}
        <View style = {styles.listOfClasses}> 
          <Text style = {styles.warmupBtn}> WARM-UP</Text>
          <Text style = {styles.warmupBtn}> STRETCH</Text>
          <Text style = {styles.warmupBtn}> H||T</Text>
          <Text style = {styles.warmupBtn}> AEROBICS</Text>
          <Text style = {styles.warmupBtn}> SALSA FUSION</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
  },
  listOfClasses: {
  },
  warmupBtn: {
    color: '#fff',
    backgroundColor: 'black',
    textAlign: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#fff',
    fontSize: 30,
    height: 80,
  },
});
