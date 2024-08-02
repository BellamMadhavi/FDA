import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}></Text>
      <View style={{marginTop:20}}>
      <Text style={styles.subHeaderText}>Create an account with the new phone number</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf:'flex-start'

  },
  subHeaderText: {
    fontSize: 14,
    color: 'gray',
    marginBottom:'38%',
  },
});

export default CustomHeader;
