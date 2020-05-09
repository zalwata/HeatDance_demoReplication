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
          <Text> WARM-UP</Text>
          <Text> STRETCH</Text>
          <Text> H||T</Text>
          <Text> AEROBICS</Text>
          <Text> SALSA FUSION</Text>
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
});
