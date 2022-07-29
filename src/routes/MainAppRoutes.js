import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from '../components/HomeScreen';
import Landing from '../components/Landing';
import TestYourComponents from '../components/TestYourComponents';
import StatsScreen from '../components/StatsScreen';
import WorkOrdersScreen from '../components/WorkOrdersScreen';
import SettingScreen from '../components/SettingScreen';
import AuthStack from './AuthStack';
import TabStack from './TabStack';
import SignUpScreen from '../components/SignUpScreen';
import LoginScreen from '../components/LoginScreen';
import HomeStack from './HomeStack';
import SplashScreen from '../components/SplashScreen';

const Stack = createNativeStackNavigator();

function MainAppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Landing"
          component={Landing}
          options={{
            headerShown: false,
            headerStyle: Styles.commonHeaderStyle,
            headerTitleStyle: Styles.commonHeaderTitleStyle,
            title:"Main App"
          }}
        /> */}

        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MainApp"
          component={TabStack}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainAppRoutes;
