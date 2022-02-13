import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/AuthContext';

// Screens
import SplashScreen from './SplashScreen';
import Login from './Login';
import ForgotPassword from './Login/ForgotPassword';
import SignUp from './Login/SignUp';
import HomePage from './HomePage';

const Stack = createNativeStackNavigator();

function Root() {

    const { state, authAction } = useAuth();

    useEffect(() => {
        setTimeout(() => authAction.restoreToken(), 2000)
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                {
                    state.isLoading ?
                        <Stack.Screen name="SplashScreen" component={SplashScreen} /> :
                        state.userToken == null ?
                            <>
                                <Stack.Screen name="Login" component={Login} />
                                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                                <Stack.Screen name="SignUp" component={SignUp} />
                            </> :
                            <>
                                <Stack.Screen name="Home" component={HomePage} />
                            </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Root;