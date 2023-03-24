/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {REQUESTS_API} from '../extras/APIS';
import SettingsItem from './common/SettingsItem';
import {GlobalStateContext} from '../routes/GlobalStateProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SettingScreen = ({ navigation }) => {
  const {setAccessToken, setRoleOfUser} = useContext(GlobalStateContext);

  const getRequests = () => {
    console.log(accessToken);
    axios
      .get(REQUESTS_API, {
        headers: {
          'access-token': accessToken,
        },
      })
      .then(function (response) {
        setDATA(response.data.tickets);
        // console.log('Data has arrived', response.data);
      })
      .catch(function (error) {
        console.error(error.response.data, 'sETTING sCREEN');
      });
  };

  const nav = useNavigation();

  const clearUserData = async () => {
    try {
      await AsyncStorage.removeItem('role');
      await AsyncStorage.removeItem('token');
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    setAccessToken(null);
    setRoleOfUser(null);
    clearUserData();
    nav.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SettingsItem
        imageIcon={require('../assets/icons/profile.png')}
        textTitle="email@30gmail com"
        textSubtitle="Edit Profile"
        profileIcon={true}
      />

      <SettingsItem
        imageIcon={require('../assets/icons/about.png')}
        textTitle="About Selec"
        onButtonPress={() =>  navigation.navigate('About')}
      />

      <SettingsItem
        imageIcon={require('../assets/icons/help.png')}
        textTitle="Help"
        onButtonPress={() =>  navigation.navigate('Help')}
      />
      <SettingsItem
        imageIcon={require('../assets/icons/contact.png')}
        textTitle="Contact us"
        onButtonPress={() =>  navigation.navigate('Contact')}

      />
      <SettingsItem
        imageIcon={require('../assets/icons/logout.png')}
        textTitle="Log out"
        onButtonPress={() => logout()}
      />
    </View>
  );
};

export default SettingScreen;
