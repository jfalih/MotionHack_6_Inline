import React from 'react'
import NavigationContainer from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
const Stack = createNativeStackNavigator();
const Navigation = () => (
    <NavigationContainer>
         <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Splash" component={SplashScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default Navigation