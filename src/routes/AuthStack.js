import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../components/LoginScreen';
import SignUpScreen from '../components/SignUpScreen';

const AuthStackNav = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <AuthStackNav.Navigator screenOptions={{headerShown: false}}>
      <AuthStackNav.Screen name="Login" component={LoginScreen} />
      <AuthStackNav.Screen name="Sign Up" component={SignUpScreen} />
    </AuthStackNav.Navigator>
  )
};

export default AuthStack;
