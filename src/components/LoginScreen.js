import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  BackHandler,
} from 'react-native';
import {CustomText} from './common';
import CustomInput from './common/CustomInput';
import CustomButton from './common//CustomButton';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {LOGIN_SCREEN_API} from '../extras/APIS';
import AsyncStorage from '@react-native-async-storage/async-storage';

const login = (username, password, navigation) => {
  const params = JSON.stringify({
    username: username,
    password: password,
  });
  axios
    .post(LOGIN_SCREEN_API, params, {
      headers: {
        'content-type': 'application/json',
      },
    })
    .then(function (response) {
      // console.log(response.data);
      storeData(response.data);
      navigation.navigate('MainApp');
    })

    .catch(function (error) {
      console.log(error, 'Error Password');
      alert('Oops! Wrong Password or Username!');
    });

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('token', value.access_token);
      await AsyncStorage.setItem('role', value.role);
    } catch (err) {
      console.log(err);
    }
  };

  function handleBackButtonClick() {
    BackHandler.exitApp();
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);
};

const LoginScreen = props => {
  const {} = props;
  const {} = styles;

  const [username, setUsername] = useState('user1');
  const [password, setPassword] = useState('1234');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onLogInPressed = () => {
    // validate user
    navigation.navigate('MainApp');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={require('../assets/images/logo.png')}
          style={[styles.logo, {height: height * 0.13}]}
          resizeMode="contain"
        />

        <CustomInput
          style={styles.inputField}
          placeholder="username"
          value={username}
          setValue={setUsername}
        />

        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />

        <CustomButton
          text="Log In"
          // onPress={() =>
          //   login(username, password, navigation)
          // }
          onPress={() => navigation.navigate('MainApp')}
        />

        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton
          text="Don't have an account? Apply Now"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  inputField: {
    marginTop: 30,
  },
});

export default LoginScreen;
