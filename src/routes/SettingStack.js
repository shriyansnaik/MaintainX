/* eslint-disable prettier/prettier */

import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Help from '../components/Help';
import Contact from '../components/Contact';
import About from '../components/About';
import SettingScreen from '../components/SettingScreen';

const SettingStackNav = createNativeStackNavigator();
const SettingStack = ({navigation}) => {
  return (
<SettingStackNav.Navigator>
<SettingStackNav.Screen
  name="Setting"
  component={SettingScreen}
 
  />
  <SettingStackNav.Screen
  name="Help"
  component={Help}
 
  />
    <SettingStackNav.Screen
  name="Contact"
  component={Contact}
  />
    <SettingStackNav.Screen
  name="About"
  component={About}
  />
  
</SettingStackNav.Navigator>
  );
};

export default SettingStack