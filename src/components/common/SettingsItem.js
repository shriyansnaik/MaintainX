/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const SettingsItem = props => {
  const {
    textTitle,
    textSubtitle,
    onButtonPress,
    imageIcon,
    expandable = false,
    profileIcon = false,
  } = props;

  return (
    <TouchableOpacity onPress={onButtonPress}>
      <View style={styles.viewStyle}>
        <Image
          style={
            profileIcon
              ? {height: 45, width: 45, margin: 10}
              : styles.imageStyle
          }
          source={imageIcon}
        />
        <View>
          <Text style={styles.textStyle}>{textTitle}</Text>
          {textSubtitle ? (
            <Text style={styles.subtitleStyle}>{textSubtitle}</Text>
          ) : null}
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#00000065',
          borderBottomWidth: 0.5,
          // marginLeft: 35,
          width: '90%',
          alignSelf: 'center',
        }}
      />
    </TouchableOpacity>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  textStyle: {
    color: 'black',
    fontSize: 20,
    marginLeft: 20,
    alignSelf: 'center',
  },
  subtitleStyle: {
    marginLeft: 20,
  },
  imageStyle: {
    width: 30,
    height: 30,
    margin: 10,
  },
};

export default SettingsItem;
