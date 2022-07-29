import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Image, TouchableOpacity, View} from 'react-native';
import WorkOrderDetails from '../components/WorkOrderDetails';
import WorkOrderScreen from '../components/WorkOrdersScreen';
const WorkOrderNav = createNativeStackNavigator();

const WorkOrderStack = () => {
  return (
    <WorkOrderNav.Navigator>
      <WorkOrderNav.Screen
        name="Work Orders"
        component={WorkOrderScreen}
        options={{
          headerShown:false,
        }}
      />
      <WorkOrderNav.Screen
        name="Work Order Details"
        component={WorkOrderDetails}
      />
    </WorkOrderNav.Navigator>
  );
};

export default WorkOrderStack;
