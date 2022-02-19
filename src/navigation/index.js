import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import SplashScreen from '../screens/SplashScreen';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './../screens/OnboardingScreen/index';
import AuthLoginScreen from './../screens/Auth/AuthLoginScreen/index';
import AuthRegisterScreen from './../screens/Auth/AuthRegisterScreen/index';
import HomeScreen from '../screens/HomeScreen';
import TabNavigation from './TabNavigation/index';
import PlaceScreen from './../screens/PlaceScreen/index';
import { useSelector } from 'react-redux';
import AuthVerifScreen from '../screens/Auth/AuthVerifScreen';
import DetailStatuScreen from './../screens/StatusScreen/DetailStatusScreen/index';
import WebViewScreen from './../screens/WebViewScreen/index';
import ScanScreen from './../screens/ScanScreen/index';
import NotificationScreen from './../screens/NotificationScreen/index';
import HistoryScreen from './../screens/HistoryScreen/index';
import SuccessBookingScreen from './../screens/SuccessBookingScreen/index';
import CategoryScreen from '../screens/CategoryScreen';
import ChatDetailScreen from './../screens/ChatDetailScreen/index';
const Stack = createStackNavigator();
const Navigation = () => {
    const auth = useSelector(state => state.auth);
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="Splash" component={SplashScreen}/>
                    {/* Auth */}
                    {auth.isAuth ?(
                        <>
                        <Stack.Screen name="TabNav" component={TabNavigation}/>
                        <Stack.Screen name="Place" component={PlaceScreen}/>
                        <Stack.Screen name="DetailStatus" component={DetailStatuScreen}/>
                        <Stack.Screen name="Scan" component={ScanScreen}/>
                        <Stack.Screen name="Notification" component={NotificationScreen}/>
                        <Stack.Screen name="Category" component={CategoryScreen}/>
                        <Stack.Screen name="History" component={HistoryScreen}/>
                        <Stack.Screen name="ChatDetail"  component={ChatDetailScreen}/>
                        <Stack.Screen name="WebView" component={WebViewScreen}/>
                        <Stack.Screen name="SuccessBooking" component={SuccessBookingScreen}/>
                        </> 
                    )
                    :(
                        <>
                        <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
                        <Stack.Screen name="AuthLogin" component={AuthLoginScreen}/>
                        <Stack.Screen name="AuthRegister" component={AuthRegisterScreen}/>
                        <Stack.Screen name="AuthVerif" component={AuthVerifScreen}/>
                        </>
                    )
                    }
            </Stack.Navigator>
        </NavigationContainer>
    )

};

export default Navigation