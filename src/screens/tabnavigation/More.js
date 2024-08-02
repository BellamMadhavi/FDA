import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

export default function MoreScreen({navigation}) {
    return (
        <ScrollView>
            <View style={{flexDirection:'row',marginLeft:10}}>
            <Entypo name='mobile' size={20} color={'grey'}/>
                <Text style={[{ color: 'black',marginLeft:10 }]}>Phone : </Text>
            </View>
            <View style={{flexDirection:'row',marginLeft:10,marginTop:10}}>
                <Feather name='map-pin' color={'grey'}/>
                <Text style={[ {color:'black',marginLeft:10,marginBottom:20}]}>Zone : </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Manage Profile')}> 
                <Text style={[styles.buttonText, { color: 'black' }]}>Manage Profile</Text>
                <Ionicons name="chevron-forward" size={18} style={{color:'grey', marginLeft:'auto'}} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('File Your ITR')}> 
                <Text style={[styles.buttonText, { color: 'black' }]}>File your ITR</Text>
                <Ionicons name="chevron-forward" size={18} style={{color:'grey', marginLeft:'auto'}} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Benefits')}> 
                <Text style={[styles.buttonText, { color: 'black' }]}>Benefits</Text>
                <Ionicons name="chevron-forward" size={18} style={{color:'grey', marginLeft:'auto'}} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Super choices')}> 
                <Text style={[styles.buttonText, { color: 'black' }]}>Super choices</Text>
                <Ionicons name="chevron-forward" size={18} style={{color:'grey', marginLeft:'auto'}} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Offers')}> 
                <Text style={[styles.buttonText, { color: 'black' }]}>Offers</Text>
                <Ionicons name="chevron-forward" size={18} style={{color:'grey', marginLeft:'auto'}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Preferences')}> 
                <Text style={[styles.buttonText, { color: 'black' }]}>Preferences</Text>
                <Ionicons name="chevron-forward" size={18} style={{color:'grey', marginLeft:'auto'}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}> 
                <Text style={[styles.buttonText, { color: 'black' }]}>Videos for you</Text>
                <Ionicons name="chevron-forward" size={18} style={{color:'grey', marginLeft:'auto'}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}> 
                <Text style={[styles.buttonText, { color: 'black' }]}>Emergency Heros program</Text>
                <Ionicons name="chevron-forward" size={18} style={{color:'grey', marginLeft:'auto'}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}> 
                <Text style={[styles.buttonText, { color: 'black' }]}>Partner Bazaar</Text>
                <Ionicons name="chevron-forward" size={18} style={{color:'grey', marginLeft:'auto'}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}> 
                <Text style={[styles.buttonText, { color: 'black' }]}>History</Text>
                <Ionicons name="chevron-forward" size={18} style={{color:'grey', marginLeft:'auto'}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}> 
                <Text style={[styles.buttonText, { color: 'black' }]}>Rent an Electric Vehicle</Text>
                <Ionicons name="chevron-forward" size={18} style={{color:'grey', marginLeft:'auto'}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}> 
                <Text style={[styles.buttonText, { color: 'black' }]}>Refer a Friend</Text>
                <Ionicons name="chevron-forward" size={18} style={{color:'grey', marginLeft:'auto'}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}> 
                <Text style={[styles.buttonText, { color: 'black' }]}>Issues & Tickets</Text>
                <Ionicons name="chevron-forward" size={18} style={{color:'grey', marginLeft:'auto'}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}> 
                <Text style={[styles.buttonText, { color: 'black' }]}>Rest Point</Text>
                <Ionicons name="chevron-forward" size={18} style={{color:'grey', marginLeft:'auto'}} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}> 
                <Text style={[styles.buttonText, { color: 'black' }]}>Agreement</Text>
                <Ionicons name="chevron-forward" size={18} style={{color:'grey', marginLeft:'auto'}} />
            </TouchableOpacity>
           



            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        flexDirection: 'row',
        borderColor: 'grey', // Set the border color
        borderWidth: 1, // Set the border width
        alignItems: 'center', // Center the icon and text vertically
        marginVertical: 10,
        marginLeft:10,
        marginRight:10,
    },
    buttonText: {
        fontSize: 13,
        marginLeft: 20,
        marginTop:5,
        marginBottom:5,
    },
});
