import * as React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingScreen from '../components/SettingScreen';
import WorkOrdersScreen from '../components/WorkOrdersScreen';
import CalendarScreen from '../components/CalendarScreen';
import HomeStack from './HomeStack';
import WorkOrderStack from './WorkOrderStack';
import CreateRequestScreen from '../components/CreateRequestScreen';
import RequestsScreen from '../components/RequestsScreen';
import RequestStack from './RequestStack';

const TabStackNav = createBottomTabNavigator();

const TabStack = route => {
  return (
    <TabStackNav.Navigator
      screenOptions={{
        // headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#ffffff'},
        tabBarHideOnKeyboard: true,
        tabBarActiveBackgroundColor: '#0063c6',
      }}>
      <TabStackNav.Screen
        name="HomeScreen"
        component={HomeStack}
        options={{
          headerShown: false,
          // headerStyle:{backgroundColor:'red'},
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/home.png')}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#ffffff' : '#8c8c8c',
              }}
            />
          ),
          // headerTitle:"Hello"
          // tabBarStyle: { backgroundColor: 'powderblue' }
        }}
      />
      <TabStackNav.Screen
        name="WorkOrderScreen"
        component={WorkOrderStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/workorder.png')}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#ffffff' : '#8c8c8c',
              }}
            />
          ),
          headerShown: false,
        }}
      />

      <TabStackNav.Screen
        name="Create Request"
        component={CreateRequestScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/plus.png')}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#ffffff' : '#8c8c8c',
              }}
            />
          ),
        }}
      />
      <TabStackNav.Screen
        name="Requests Stack"
        component={RequestStack}
        options={{
          headerShadowVisible: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/requests.png')}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#ffffff' : '#8c8c8c',
              }}
            />
          ),
          headerShown: false,
        }}
      />

      <TabStackNav.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/icons/settings.png')}
              style={{
                height: 25,
                width: 25,
                tintColor: focused ? '#ffffff' : '#8c8c8c',
              }}
            />
          ),
        }}
      />
    </TabStackNav.Navigator>
  );
};

export default TabStack;
