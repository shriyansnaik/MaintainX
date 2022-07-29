import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Image, TouchableOpacity, View} from 'react-native';
import RequestsScreen from '../components/RequestsScreen';
import RequestDetails from '../components/RequestDetails';
const RequestNav = createNativeStackNavigator();

const RequestStack = () => {
  return (
    <RequestNav.Navigator>
      <RequestNav.Screen
        name="Requests"
        component={RequestsScreen}
        options={{
          headerShown:false,
        }}
      />
      <RequestNav.Screen
        name="Request Details"
        component={RequestDetails}
      />
    </RequestNav.Navigator>
  );
};

export default RequestStack;
