import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function OtpScreen({navigation}) {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    const handleChangeText = (text, index) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Automatically focus the next input if the current one is not empty and it's not the last input
        if (text && index < refs.length - 1) {
            refs[index + 1].focus();
        }

        // If backspace is pressed on an empty input, focus the previous input
        if (!text && index > 0) {
            refs[index - 1].focus();
        }
    };

    const refs = [];

    const handleSubmit = () => {
        const otpString = otp.join('');
        console.log('Entered OTP:', otpString);
        // Handle OTP submission logic here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Enter OTP</Text>
            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        keyboardType="numeric"
                        maxLength={1}
                        value={digit}
                        onChangeText={text => handleChangeText(text, index)}
                        ref={(ref) => (refs[index] = ref)}
                    />
                ))}
            </View>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('BottomTabs')}>
                <Text style={styles.buttonText} >Submit OTP</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    otpInput: {
        borderWidth: 1,
        borderColor: 'orange',
        borderRadius: 5,
        width: 50,
        height: 50,
        textAlign: 'center',
        fontSize: 18,
        marginHorizontal: 5,
    },
    button: {
        backgroundColor: 'orange',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
