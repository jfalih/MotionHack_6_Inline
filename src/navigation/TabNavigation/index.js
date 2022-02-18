import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import HomeScreen from './../../screens/HomeScreen/index';
import BottomTabBar from './../../components/BottomTabBar/index';
import RemixIcon from 'react-native-remix-icon';
import StatusScreen from './../../screens/StatusScreen/index';
import ChatScreen from './../../screens/ChatScreen/index';
import ProfileScreen from './../../screens/ProfileScreen/index';
 const Tab = createBottomTabNavigator();
const TabNavigation = () => {
   return(
        <Tab.Navigator screenOptions={{
            headerShown: false
        }} tabBar={props => <BottomTabBar {...props} />}>
            <Tab.Screen options={{
                tabBarIcon: ({color, size}) => (
                    <RemixIcon name="home-line" color={color} size={size} />
                )
            }} name="Home" component={HomeScreen} />
             <Tab.Screen options={{
                tabBarIcon: ({color, size}) => (
                    <RemixIcon name="ticket-line" color={color} size={size} />
                )
            }} name="Status" component={StatusScreen} />
             <Tab.Screen options={{
                tabBarIcon: ({color, size}) => (
                    <RemixIcon name="chat-3-line" color={color} size={size} />
                )
            }} name="Chat" component={ChatScreen} />
            <Tab.Screen options={{
                tabBarIcon: ({color, size}) => (
                    <RemixIcon name="user-3-line" color={color} size={size} />
                )
            }} name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default TabNavigation;