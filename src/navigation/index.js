import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import SplashScreen from '../screens/SplashScreen';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './../screens/OnboardingScreen/index';
import AuthLoginScreen from './../screens/Auth/AuthLoginScreen/index';
import AuthRegisterScreen from './../screens/Auth/AuthRegisterScreen/index';
import HomeScreen from '../screens/HomeScreen';
import TabNavigation from './TabNavigation/index';
const Stack = createStackNavigator();
const Navigation = () => (
    <NavigationContainer>
         <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Splash" component={SplashScreen}/>
                <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
                <Stack.Screen name="Home" component={TabNavigation}/>
                {/* Auth */}
                <Stack.Screen name="AuthLogin" component={AuthLoginScreen}/>
                <Stack.Screen name="AuthRegister" component={AuthRegisterScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default Navigation