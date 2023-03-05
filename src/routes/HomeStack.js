import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../components/HomeScreen';
import SettingScreen from '../components/SettingScreen';
import GetLocations from '../components/common/GetLocations';
import GetSubdivision from '../components/common/GetSubdivision';
import GetRooms from '../components/common/GetRooms';
import GetAssets from '../components/common/GetAssets';
import {Image, TouchableOpacity, View} from 'react-native';
import CreateRequestScreen from '../components/CreateRequestScreen';
import Help from '../components/Help';
import Contact from '../components/Contact';
import About from '../components/About';
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
              style={{marginLeft: 5}}
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
      <HomeStackNav.Screen name="Help" component={Help} />
      <HomeStackNav.Screen name="Contact" component={Contact} />
      <HomeStackNav.Screen name="About" component={About} />

      


      <HomeStackNav.Screen
        name="Create Request"
        component={CreateRequestScreen}
        options={{headerShown: false}}
      />
      <HomeStackNav.Screen
        name="Get Locations"
        component={GetLocations}
        // options={{headerShown: false}}
      />

      <HomeStackNav.Screen
        name="Get Subdivision"
        component={GetSubdivision}
        // options={{headerShown: false}}
      />
          <HomeStackNav.Screen
        name="Get Rooms"
        component={GetRooms}
        // options={{headerShown: false}}
      />
          <HomeStackNav.Screen
        name="Get Assets"
        component={GetAssets}
        // options={{headerShown: false}}
      />
    </HomeStackNav.Navigator>
  );
};

export default HomeStack;
