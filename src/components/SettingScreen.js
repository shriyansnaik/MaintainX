/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React from 'react';
import SettingsItem from './common/SettingsItem';
import {CustomText} from './common';

const SettingScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SettingsItem
        imageIcon={require('../assets/icons/profile.png')}
        textTitle="email@30gmail com"
        textSubtitle="Edit Profile"
        profileIcon = {true}
      />
        <SettingsItem
          imageIcon={require('../assets/icons/about.png')}
          textTitle="About Selec"
        />
        <SettingsItem
          imageIcon={require('../assets/icons/help.png')}
          textTitle="Help"
        />
        <SettingsItem
          imageIcon={require('../assets/icons/contact.png')}
          textTitle="Contact us"
        />
        <SettingsItem
          imageIcon={require('../assets/icons/logout.png')}
          textTitle="Log out"
        />
    </View>
  );
};

export default SettingScreen;
