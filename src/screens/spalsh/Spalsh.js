import React from 'react';
import {ImageBackground, Text,View } from 'react-native';
export default function SplashScreen ({navigation}){
  setTimeout(()=>{
    navigation.navigate('SignInScreen');
  },2000)
    return(
      <ImageBackground source={require('../../asserts/swiggy.png')}
      style={{flex:1,}}
      resizeMode='cover'
      >
      </ImageBackground>
    )
}