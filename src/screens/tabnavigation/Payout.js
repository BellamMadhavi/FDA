import React from "react";
import {FlatList, SafeAreaView, SafeAreaViewBase, Text,View,StyleSheet,StatusBar} from 'react-native';



const DATA = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
        id: '4',
        title: 'First Item',
      },
      {
        id: '5',
        title: 'Second Item',
      },
      {
        id: '6',
        title: 'Third Item',
      },
      {
        id: '7',
        title: 'First Item',
      },
      {
        id: '8',
        title: 'Second Item',
      },
      {
        id: '9',
        title: 'Third Item',
      },
  ];

  
const Item = ({title}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  

export default function PayOutScreen(){
    return(
        <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>);
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });