/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';

import SettingsItem from './common/SettingsItem';
import {GlobalStateContext} from '../routes/GlobalStateProvider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Contact from './Contact';
import Help from './Help';
import About from './About';
import Location from './common/Location';
const SettingScreen = ({ navigation }) => {
  const {setAccessToken, setRoleOfUser} = useContext(GlobalStateContext);
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
