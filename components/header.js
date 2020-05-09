import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>ON DEMAND</Text>
        <Text style={styles.subTitle}>FEATURED VIDEO</Text>
            <TouchableOpacity>
                <Text style={styles.subTitleBtn}>DANCE NOW</Text>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'darksalmon',
    height: 300,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 40,
    fontSize: 20
  },
  subTitle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 40
  },
  subTitleBtn: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 1,
    borderRadius: 10,
    fontSize: 20
  },
});
