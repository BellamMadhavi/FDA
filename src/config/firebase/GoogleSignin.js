import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

export const _signInWithGoogle = async () => {
  try {
    GoogleSignin.configure({
      offlineAccess: false,
      webClientId: '49679301841-redl3jfneleui9qetg9lp14hs5lh98ph.apps.googleusercontent.com',
      scopes: ['profile', 'email']
    });

    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const { idToken } = userInfo;
    const googleCredentials = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredentials);
    return userInfo;
    
  } catch (error) {
    console.log("=> Google Sign In", error);
    return null;
  }
};

