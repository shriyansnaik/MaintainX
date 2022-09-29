import React, {useState, useEffect, useContext} from 'react';
import {View, Image, useWindowDimensions, TouchableOpacity} from 'react-native';
import Homescreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import TabStack from '../routes/TabStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalStateContext} from '../routes/GlobalStateProvider';

const SplashScreen = props => {
  const {height} = useWindowDimensions();
  const {background, logo} = styles;
  const {navigation} = props;
  const [timePassed, setTimePassed] = useState(false);
  const [token, setToken] = useState(false);
  const {setAccessToken, setRoleOfUser, roleOfUser, accessToken} =
    useContext(GlobalStateContext);

  useEffect(() => {
    getRole('role');
    getToken('token');
    setTimeout(() => {
      setTimePassed(true);
    }, 2000);
  }, []);

  const getToken = async key => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        console.log('Access token on splash screen', data);
        setAccessToken(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRole = async key => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        console.log('Role on splash screen =>', data);
        setRoleOfUser(data);
        console.log(roleOfUser);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return timePassed ? (
    accessToken ? (
      <TabStack />
    ) : (
      <LoginScreen />
    )
  ) : (
    <View style={background}>
      <View>
        <Image
          source={require('../assets/images/logo.png')}
          style={[logo, {height: height * 0.15}]}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = {
  background: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  logo: {
    maxWidth: 300,
    maxHeight: 200,
  },
};

export default SplashScreen;
