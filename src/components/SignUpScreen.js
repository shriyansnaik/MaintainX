/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Text,
  DatePickerAndroid,
  SafeAreaView,
} from 'react-native';
import {CustomText} from './common';
import CustomButton from './common//CustomButton';
import {useNavigation} from '@react-navigation/native';
import LoginScreen from './LoginScreen';

const SignUpScreen = props => {
  const {} = props;
  const {textInputStyle, infotextStyle, SubmitButton, infotextStyle2} = styles;
  const navigation = useNavigation();

  const onSignUpPress = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomText
          style={{marginTop: 10, marginLeft: 10}}
          textSize={30}
          textWeight={700}
          text={'Apply for work'}
        />
        <View>
          <TextInput
            placeholder="Work Email *"
            autoFocus={true}
            style={textInputStyle}
          />
        </View>
        <View>
          <TextInput
            placeholder="First Name *"
            style={[textInputStyle]}
          />

          <TextInput placeholder="Last Name * " style={textInputStyle} />
          <TextInput
            placeholder="Phone Number *"
            keyboardType="numeric"
            style={textInputStyle}
          />
          {/* <TextInput placeholder='Company Name * ' style={textInputStyle} /> */}
          {/* <TextInput placeholder='Title *' style={textInputStyle} /> */}
          <TouchableOpacity style={SubmitButton}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
              Apply Now
            </Text>
          </TouchableOpacity>
          <View style={styles.lineStyle} />
        <View>
      
        <CustomButton
          text="Already have an account? Log in."
          onPress={onSignUpPress}
          type="TERTIARY"
        />
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    color: '#a5a5a5',
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 15,
    marginLeft: 15,
    borderColor: 'black',
    alignContent: 'center',
    justifyContent: 'center',
    // width: '80%',
    marginTop: 25,
    paddingBottom:-10
  },
  infotextStyle: {
    fontSize: 12,
    marginLeft: 15,
  },
  SubmitButton: {
    alignItems: 'center',
    backgroundColor: '#FF3B2F',
    padding: 15,
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    height:50,
   
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#a5a5a5',
    marginTop: 15,

  },
  infotextStyle2: {
    fontSize: 15,
    color: '#a5a5a5',
    alignSelf: 'center',
    margin: 15,
  },
});
export default SignUpScreen;
