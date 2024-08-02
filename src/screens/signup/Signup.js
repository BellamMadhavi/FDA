import React from 'react';
import {View,Button} from 'react-native';
export default function SignUpScreen({navigation}){
    return(
        <View>
            <Button title='Map Box' onPress={()=>navigation.navigate('MapScreen')}></Button>
        </View>
    )

}