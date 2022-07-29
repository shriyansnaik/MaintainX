import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen';
import SettingScreen from '../components/SettingScreen';
import {Image, TouchableOpacity, View} from 'react-native';
const HomeStackNav = createNativeStackNavigator();

const HomeStack = ({navigation}) => {
  return (
    <HomeStackNav.Navigator>
      <HomeStackNav.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Image
              source={require('../assets/icons/company_logo1.png')}
              style={{marginLeft:5}}
            />
          ),

          headerRight: () => (
            <>
              <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
                <Image
                  source={require('../assets/icons/calendar.png')}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: '#000000',
                    marginRight: 15,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Image
                  source={require('../assets/icons/settings.png')}
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: '#000000',
                  }}
                />
              </TouchableOpacity>
            </>
          ),
          headerShadowVisible: false,
          headerTitle: '',
        }}
      />
      <HomeStackNav.Screen name="SettingsScreen" component={SettingScreen} />
    </HomeStackNav.Navigator>
  );
};

export default HomeStack;
