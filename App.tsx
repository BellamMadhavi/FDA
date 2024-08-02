// import React from "react";
// import {Button,View} from 'react-native';
// import { _signInWithGoogle } from "./src/config/firebase/GoogleSignin";
// import { useUser } from "./src/UserContent";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";
// import auth from "@react-native-firebase/auth";

import Navigations from "./src/Navigations";


// export default function App() {
//   // const {setUser} = useUser();

//   const signInWithGoogle = async () => {
//     const userInfo = await _signInWithGoogle();
//     if (userInfo) {
//       // setUser(userInfo);
//       console.log('User signed in:', userInfo); 
//     } else {
//       console.log('Sign-in failed');
//     }
//   }

//   const signOutWithGoogle = async () => {
//     try {
//       await GoogleSignin.revokeAccess();
//       await GoogleSignin.signOut();
//       await auth().signOut();
//     } catch (error) {
//       console.log("=> Google Sign Out", error);
//     }
//   }
//   return(
//     <View>
//       <View>
//         <Button title=" SignIn With Google" onPress={signInWithGoogle}></Button>
//       </View>
//       <View>
//         <Button title="Sign Out with Google" onPress={signOutWithGoogle}/>
//       </View>
//     </View>
//   )
// }


function App() {
  return(
    <Navigations />
  )
}

export default App;