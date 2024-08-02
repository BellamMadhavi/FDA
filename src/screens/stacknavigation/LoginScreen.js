import React,{useState} from 'react';
import {Text,View,Button} from 'react-native';
import { TextInput } from 'react-native-paper';
export default function LoginScreen({navigation}){
    const [mobileNumber, setMobileNumber] = useState('');
    return(
        <View style={{flex: 1,padding: 20,}}>
            <View >
                <Text style={{ fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 20,}}>Enter Your mobile number To get OTP</Text>
            </View>
            <View >
            <TextInput
                label="Mobile Number"
                value={mobileNumber}
                onChangeText={text => setMobileNumber(text)}
                mode="outlined"
                // style={styles.textInput}
                keyboardType="numeric"
                theme={{ colors: { primary: 'orange', placeholder: 'orange' } }}
            />
            </View>
            <View style={{marginTop:20,width: '100%',height:'100%'}}>
            <Button title='Get OTP' color={'orange'} onPress={()=>navigation.navigate('OTPScreen')}></Button>

            </View>
        </View>
    )
}