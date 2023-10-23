import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const UserNavigations = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default UserNavigations