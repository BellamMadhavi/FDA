import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions,Button, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../asserts/loginscreenicon1.jpg')} 
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
            ACCOUNT
        </Text>
        <Text style={{marginBottom:20}}>
            Login/Create Account to manage orders
        </Text>

        <Button title="Login" style={{marginTop:10,marginBottom:10,}} color="red" onPress={()=>navigation.navigate('LoginScreen')}></Button>
        <Text style={{ marginTop: 20 }}>
        By clicking, I accept the
        <Text style={styles.highlightedText}> Terms & Conditions </Text>
        and 
        <Text style={styles.highlightedText}> Privacy Policies</Text>
      </Text>
        {/* <View style={styles.line} /> */}

        {/* <TouchableOpacity style={[styles.button]}> 
            <Fontisto name='shopping-sale' size={20} style={styles.icon}></Fontisto>
            <Text style={[styles.buttonText, { color: 'black' }]}>Offers</Text>
            <Ionicons name="chevron-forward" size={18} style={{color:'grey',marginLeft:'77%'}} />
        </TouchableOpacity>

        <View style={{height: 1, width: width, backgroundColor: 'grey',marginVertical:5}} />

        <TouchableOpacity style={[styles.button]}>
            <Ionicons name="mail" size={20} color={'black'} style={styles.icon} />
            <Text style={[styles.buttonText, { color: 'black' }]}>Send Feedback</Text>
            <Ionicons name="chevron-forward" size={18} color={'black'} style={{color:'grey',marginLeft:'60%'}} />
        </TouchableOpacity> */}

      </View>
      
    </View>
  );
};

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: width,
    height: height / 2, 
  },
  textContainer: {
    flex: 1,
    marginTop:30,
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontWeight:'bold'
  },
  line: {
    height: 1, 
    width: width, 
    backgroundColor: 'black', 
    marginVertical: 20,
},
button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection:'row',
    // justifyContent:'space-between'
},
  buttonText: {
    fontSize: 13,
    alignSelf:'flex-start',
    marginLeft:20,

  },
  icon: {
    color:'grey',
  },
  highlightedText: {
    fontWeight: 'bold',
    color: 'black', // You can change this color to highlight as you prefer
  },
  
});

export default SignInScreen;
