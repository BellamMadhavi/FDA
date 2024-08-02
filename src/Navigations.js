import React from 'react';
import SplashScreen from './screens/spalsh/Spalsh';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './screens/signin/SignIn';
import SignUpScreen from './screens/signup/Signup';
import CustomHeader from './screens/signup/CustomHeader';
import MapScreen from './screens/tabnavigation/Map';
import LoginScreen from './screens/stacknavigation/LoginScreen';
import OTPScreen from './screens/stacknavigation/OTPScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PayOutScreen from './screens/tabnavigation/Payout';
import GigsScreen from './screens/tabnavigation/Gigs';
import PocketScreen from './screens/tabnavigation/Pocket';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from './screens/drawernavigation/Profile';
import BenefitsScreen from './screens/drawernavigation/Benefits';
import SuperChoicesScreen from './screens/drawernavigation/SuperChoices';
import FileYourITRScreen from './screens/drawernavigation/FileYourITR';
import OffersScreen from './screens/drawernavigation/Offers';
import PreferencesScreen from './screens/drawernavigation/Preferences';
import VideosForYouScreen from './screens/drawernavigation/VideosForYou';
import EmergencyHerosScreen from './screens/drawernavigation/EmergencyHerosProgram';
import PartnerBazarScreen from './screens/drawernavigation/PartnerBazar';
import HistoryScreen from './screens/drawernavigation/History';
import ReferAFriendScreen from './screens/drawernavigation/ReferAFriend';
import IssuesTicketsScreen from './screens/drawernavigation/IssuesTickets';
import RestPointScreen from './screens/drawernavigation/RestPoint';
import AgreementScreen from './screens/drawernavigation/Agreement';
import RentVehicle from './screens/drawernavigation/RentVehicle';
import MoreScreen from './screens/tabnavigation/More';


const Stack = createNativeStackNavigator();
const Tab=createBottomTabNavigator();
const Drawer = createDrawerNavigator();
/*
function DrawerTabs() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="Manage Profile" 
        component={ProfileScreen} 
        options={{
          headerTitle: 'Profile',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="person" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="File Your ITR" 
        component={FileYourITRScreen} 
        options={{
          headerTitle: 'File ITR',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="receipt" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Benefits" 
        component={BenefitsScreen} 
        options={{
          headerTitle: 'Medical Insurance',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="local-hospital" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Super choices" 
        component={SuperChoicesScreen} 
        options={{
          headerTitle: 'Super Choices',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="star" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Offers" 
        component={OffersScreen} 
        options={{
          headerTitle: 'Offers',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="local-offer" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Preferences" 
        component={PreferencesScreen} 
        options={{
          headerTitle: 'Preferences',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Videos for you" 
        component={VideosForYouScreen} 
        options={{
          headerTitle: 'Videos for you',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="videocam" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Emergency Heros program" 
        component={EmergencyHerosScreen} 
        options={{
          headerTitle: 'Emergency Heros Program',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="support-agent" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Partner Bazaar" 
        component={PartnerBazarScreen} 
        options={{
          headerTitle: 'Partner Bazaar',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="store" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="History" 
        component={HistoryScreen} 
        options={{
          headerTitle: 'History',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="history" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Rent an Electric Vehicle" 
        component={RentVehicle} 
        options={{
          headerTitle: 'Rent electric scooter',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="electric-scooter" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Refer a Friend" 
        component={ReferAFriendScreen} 
        options={{
          headerTitle: 'Refer your friend',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="person-add" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Issues & Tickets" 
        component={IssuesTicketsScreen} 
        options={{
          headerTitle: 'Support Tickets',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="report-problem" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Rest Point" 
        component={RestPointScreen} 
        options={{
          headerTitle: 'Rest Point',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="local-cafe" color={color} size={size} />
          ),
        }} 
      />
      <Drawer.Screen 
        name="Agreement" 
        component={AgreementScreen} 
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="assignment" color={color} size={size} />
          ),
        }} 
      />
    </Drawer.Navigator>
  );
}
*/

// function DrawerTabs() {
//   return(
//   <Drawer.Navigator>
//     <Drawer.Screen name="Manage Profile" component={ProfileScreen} options={{headerTitle:'Profile'}} />
//     <Drawer.Screen name="File Your ITR" component={FileYourITRScreen} options={{headerTitle:'File ITR'}} />
//     <Drawer.Screen name="Benefits" component={BenefitsScreen} options={{headerTitle:'Medical Insurance'}} />
//     <Drawer.Screen name="Super choices" component={SuperChoicesScreen} options={{headerTitle:'Super Choices'}} />
//     <Drawer.Screen name="Offers" component={OffersScreen} options={{headerTitle:'Offers'}} />
//     <Drawer.Screen name="Preferences" component={PreferencesScreen} options={{headerTitle:'Preferences'}} />
//     <Drawer.Screen name="Videos for you" component={VideosForYouScreen} options={{headerTitle:'Videos for you'}} />
//     <Drawer.Screen name="Emergency Heros program" component={EmergencyHerosScreen} options={{headerTitle:'Emergency Heros Program'}} />
//     <Drawer.Screen name="Partner Bazaar" component={PartnerBazarScreen} options={{headerTitle:'Partner Bazaar'}} />
//     <Drawer.Screen name="History" component={HistoryScreen} options={{headerTitle:'History'}} />
//     <Drawer.Screen name="Rent an Electric Vehicle" component={RentVehicle} options={{headerTitle:'Rent electric scooter'}} />
//     <Drawer.Screen name="Refer a Friend" component={ReferAFriendScreen} options={{headerTitle:'Refer your friend'}} />
//     <Drawer.Screen name="Issues & Tickets" component={IssuesTicketsScreen} options={{headerTitle:'Support Tickets'}} />
//     <Drawer.Screen name="Rest Point" component={RestPointScreen} options={{headerTitle:'Rest Point'}} />
//     <Drawer.Screen name="Agreement" component={AgreementScreen} options={{headerShown:false}} />


//   </Drawer.Navigator>
//   )
// }


function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarLabelStyle :{
          fontSize: 12,
          color:'#000000'
      },
      tabBarStyle:{
        backgroundColor:'white',
        height:36+12,
      }
      }} >
        <Tab.Screen 
        name={'Feed'}
        component={MapScreen}
        options={{
          tabBarLabel:'Feed',
          tabBarIcon:({color,size}) => (<MaterialIcons name='feed' size={size} color={color} />),
          headerShown:false
        }}/>
        
        <Tab.Screen 
        name={'Payout'}
        component={PayOutScreen}
        options={{
          tabBarLabel:'Payout',
          tabBarIcon:({color,size}) => (<MaterialIcons name='currency-rupee' size={size} color={color} />),
          headerShown:false
        }}/>
        
        <Tab.Screen 
        name={'Gigs'}
        component={GigsScreen}
        options={{tabBarLabel:'Gigs',
        tabBarIcon:({color,size}) => (<Entypo name='google-' size={size} color={color} />),
        headerShown:false
        }}/>
        
        <Tab.Screen 
        name={'Pocket'}
        component={PocketScreen}
        options={{
          tabBarLabel:'Pocket',
          tabBarIcon:({color,size}) => (<AntDesign name='wallet' size={size} color={color} />),
          headerShown:false
        }}/>
        
        <Tab.Screen 
        name={'More'}
        component={MoreScreen}
        options={{
          tabBarLabel:'More',
          tabBarIcon:({color,size}) => (<Entypo name='menu' size={size} color={color} />),
          headerShown:false
        }}/>
        


      </Tab.Navigator>
    );
  }

function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ headerTitle: () => <CustomHeader /> }}  />
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{headerShown: false}} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerTitle:''}}/>
        <Stack.Screen name='OTPScreen' component={OTPScreen} options={{headerTitle:''}}/>
        <Stack.Screen name="Manage Profile" component={ProfileScreen} options={{headerTitle:'Profile'}} />
        <Stack.Screen name="File Your ITR" component={FileYourITRScreen} options={{headerTitle:'File ITR'}} />
        <Stack.Screen name="Benefits" component={BenefitsScreen} options={{headerTitle:'Medical Insurance'}} />
        <Stack.Screen name="Super choices" component={SuperChoicesScreen} options={{headerTitle:'Super Choices'}} />
        <Stack.Screen name="Offers" component={OffersScreen} options={{headerTitle:'Offers'}} />
        <Stack.Screen name="Preferences" component={PreferencesScreen} options={{headerTitle:'Preferences'}} />
        <Stack.Screen name="Videos for you" component={VideosForYouScreen} options={{headerTitle:'Videos for you'}} />
        <Stack.Screen name="Emergency Heros program" component={EmergencyHerosScreen} options={{headerTitle:'Emergency Heros Program'}} />
        <Stack.Screen name="Partner Bazaar" component={PartnerBazarScreen} options={{headerTitle:'Partner Bazaar'}} />
        <Stack.Screen name="History" component={HistoryScreen} options={{headerTitle:'History'}} />
        <Stack.Screen name="Rent an Electric Vehicle" component={RentVehicle} options={{headerTitle:'Rent electric scooter'}} />
        <Stack.Screen name="Refer a Friend" component={ReferAFriendScreen} options={{headerTitle:'Refer your friend'}} />
        <Stack.Screen name="Issues & Tickets" component={IssuesTicketsScreen} options={{headerTitle:'Support Tickets'}} />
        <Stack.Screen name="Rest Point" component={RestPointScreen} options={{headerTitle:'Rest Point'}} />
        <Stack.Screen name="Agreement" component={AgreementScreen} options={{headerShown:false}} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigations;