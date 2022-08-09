import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {CustomText} from './common';
import CustomInput from './common/CustomInput';
import CustomButton from './common//CustomButton';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {LOGIN_SCREEN_API} from '../extras/APIS';
import AsyncStorage from '@react-native-async-storage/async-storage';

const login = (username, password, access_token, role, navigation) => {
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
      console.log(response.data);
      storeData(response.data);
      navigation.navigate('MainApp');
    })

    .catch(function (error) {
      console.log(error, 'Error Password');
      alert('Oops! Wrong Password or Username!');
    });

  const storeData = async value => {
    try {
      // const jsonValue = JSON.stringify(value);
      value = JSON.stringify(value,{
        access_token: access_token,
        role: role,
      });
      await AsyncStorage.setItem('token', access_token);
      await AsyncStorage.setItem('role', role);
      console.log("came from async storage" + access_token);
      console.log("Role came from async storage" + role);
    } catch (e) {
      console.log(err);
    }
  };

  
  

  // axios
  //   .post('http://localhost:3000/login', {
  //     username: username,
  //     password: password,
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // const body = JSON.stringify({username, password});

  // try {
  //   const res = axios.post('/http://localhost:3000/login', body);
  //   // dispatch({
  //   //     // type:LOGIN_SUCCESS,
  //   //     payload:res.data
  //   // })

  //   // dispatch(loadUser());
  //   console.log('Success', res);
  // } catch (err) {
  //   const errors = err.response;
  //   if (errors) {
  //     //  errors.forEach(error=>dispatch(setAlert(error.msg,'danger')))
  //     console.log('Error');
  //   }
  //   // dispatch({
  //   //     // type:LOGIN_FAIL
  //   // })
  // }
};

const LoginScreen = props => {
  const {} = props;
  const {} = styles;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [access_token, setAccess_token] = useState('');
  const [role, setRole] = useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  // constructor(props) {
  //   this.getData();
  // }
  // getData();
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('token');
      console.log("came from async storage get data" + jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
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
          onPress={() => login(username, password, access_token, role, navigation)}
          // onPress={() => navigation.navigate('MainApp')}
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
