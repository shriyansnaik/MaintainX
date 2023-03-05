import * as React from 'react';
import {useEffect, useState, useContext} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingScreen from '../components/SettingScreen';
import HomeStack from './HomeStack';
import WorkOrderStack from './WorkOrderStack';
import RequestStack from './RequestStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalStateContext} from '../routes/GlobalStateProvider';
import MakeRequest from '../components/MakeRequest';

const TabStackNav = createBottomTabNavigator();

const TabStack = route => {
  const [role, setRole] = useState();
  const {modalVisible, setModalVisible, accessToken, roleOfUser} =
    useContext(GlobalStateContext);
  const OptionsModal = () => null;

  useEffect(() => {
    getrole('role');
    console.log('tab stack role: ', roleOfUser);
  }, []);

  const getrole = async key => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        setRole(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      {roleOfUser != 'requestee' ? (
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
      ) : null}

      {roleOfUser == 'requestee' ? (
        <TabStackNav.Screen
          name="Create Request Options"
          component={OptionsModal}
          options={() => ({
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
            tabBarButton: props => (
              <TouchableOpacity
                {...props}
                onPress={() => setModalVisible(!modalVisible)}
              />
            ),
          })}
        />
      ) : null}

      {roleOfUser != 'requestee' ? (
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
      ) : null}
      {/* <TabStackNav.Screen
        name="Make Request"
        component={MakeRequest}
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
      /> */}
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
