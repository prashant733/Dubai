import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  LogBox,
  Text,
  Linking,
  Platform,
  BackHandler,
  Alert,
} from 'react-native';
// import { connect } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import  internetConnectionHandler from './hoc/internetConnectionHandler'

// import DeviceInfo from 'react-native-device-info'
import WelcomeScreen from './screens/Welcome';
// import GetStartedScreen from './screens/GetStarted';
import SignUpScreen from './screens/SignUp';
import SignInScreen from './screens/SignIn';
// import UploadDocumentsScreen from './screens/UploadDocuments'
// import BusinessInfoScreen from './screens/BusinessInfo';
// import OtpVerificationScreen from './screens/OtpVerification';
import HomeScreen from './screens/Home';
// import Dashboard from './screens/Dashboard';
// import Profile from './screens/Profile';
// import Contact from './screens/Contact';
// import UserList from './screens/UserList';

// import ProfileScreen from './screens/Profile';
// import NotificationScreen from './screens/Notification';
// import AddAddressScreen from './screens/AddAddress';
// import SearchScreen from './screens/Search';
// import PersonalInformationScreen from './screens/PersonalInformation';
// import SavedAddressScreen from './screens/SavedAddress';
// import SavedCardsScreen from './screens/SavedCards';
// import SubscriptionPlanScreen from './screens/SubscriptionPlan';
// import TermsAndPoliciesScreen from './screens/TermsandPolicies';
// import OrderHistoryScreen from './screens/OrderHistory';
// import PaymentScreen from './screens/Payment';
// import PaymentSuccessfulScreen from './screens/PaymentSuccessful';
// import ViewItemScreen from './screens/ViewItem';
// import UpdateAddressScreen from './screens/UpdateAddress';
// import CheckOutScreen from './screens/CheckOut';
// import OrderDetailsScreen from './screens/OrderDetails';


// import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
// import { showToast } from './services/Toast';
import firebase from '@react-native-firebase/app';
import Dashboard from './screens/Dashboard';
import Contact from './screens/Contact';
import Profile from './screens/Profile';
import UserList from './screens/UserList';
// import messaging from '@react-native-firebase/messaging';


// const iosConfig = {
//   clientId: '765808050204-shjrun5ad1hsj1nbetmhrgk3laqn9oon.apps.googleusercontent.com',
//   appId: '1:765808050204:ios:4fd63762d8686d7e201fd9', //diff from Android
//   apiKey: 'AIzaSyCngI8qNIsPzxfCMrD-lO64Pd-uDTre_N0',  //diff from Android
//   databaseURL: 'https://beverages-5c151-default-rtdb.firebaseio.com',
//   storageBucket: 'beverages-5c151.appspot.com',
//   messagingSenderId: '765808050204',
//   projectId: 'beverages-5c151',

// }
const androidConfig = {
  // clientId: '765808050204-24c3o3hit1ud0k72om7cbm266daqnh0t.apps.googleusercontent.com',
  appId: '1:131137805059:android:86e365a4493f70f2bd2736', //diff from iOS
  apiKey: 'AIzaSyDBdmapZYkY9fwdhum9Alx0n_FXTOq4xUM', //diff from iOS
  databaseURL: 'https://dubai-6c85d-default-rtdb.firebaseio.com/',
  storageBucket: 'dubai-6c85d.appspot.com',
  messagingSenderId: '131137805059',
  projectId: 'dubai-6c85d',
}

if (!firebase.apps.length) {
  firebase.initializeApp(androidConfig)
}
const Router = props => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  // const Drawer = createDrawerNavigator();

  const [isLoggedIn, setIsloogedIn] = useState(false);



  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

  function stackNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            swipeEnabled: false,
          }}
        />
        <Tab.Screen name="Dashboard" component={Dashboard}
          options={{
            headerShown: false,
            swipeEnabled: false,
          }}
        />
        <Tab.Screen name="Contact" component={Contact}
          options={{
            headerShown: false,
            swipeEnabled: false,
          }}
        />
        <Tab.Screen name="Profile" component={Profile}
          options={{
            headerShown: false,
            swipeEnabled: false,
          }}
        />
        <Tab.Screen name="UserList" component={UserList}
          options={{
            headerShown: false,
            swipeEnabled: false,
          }}
        />
      </Tab.Navigator>
    )
  }


  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />

          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />

          <Stack.Screen
            name="Home"
            component={stackNavigator}
            options={{ headerShown: false, gestureEnabled: false }}
          />

        </Stack.Navigator>

        {/* <Toast /> */}

      </NavigationContainer>

    </>
  );
};

export default Router;
