import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Landing = ({navigation}) => {
  return (
    <View style={{padding: 20}}>
      <TouchableOpacity
        style={{
          backgroundColor: '#28B7DA',
          padding: 10,
          alignSelf: 'baseline',
          borderRadius: 10,
          margin: 10,
        }}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>
          Home Screen
        </Text>
      </TouchableOpacity>

      {/* <TouchableOpacity
        style={{
          backgroundColor: '#28B7DA',
          padding: 10,
          alignSelf: 'baseline',
          borderRadius: 10,
          margin: 10,
        }}
        onPress={() => navigation.navigate('Stats Screen')}>
        <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>
          Stats Screen
        </Text>
      </TouchableOpacity> */}

      {/* <TouchableOpacity
        style={{
          backgroundColor: '#28B7DA',
          padding: 10,
          alignSelf: 'baseline',
          borderRadius: 10,
          margin: 10,
        }}
        onPress={() => navigation.navigate('Work Orders Screen')}>
        <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>
          Work Orders Screen
        </Text>
      </TouchableOpacity> */}
      {/* <TouchableOpacity
        style={{
          backgroundColor: '#28B7DA',
          padding: 10,
          alignSelf: 'baseline',
          borderRadius: 10,
          margin: 10,
        }}
        onPress={() => navigation.navigate('Settings Screen')}>
        <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>
          Settings Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#28B7DA',
          padding: 10,
          alignSelf: 'baseline',
          borderRadius: 10,
          margin: 10,
        }}
        onPress={() => navigation.navigate('Test Components')}>
        <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>
          Test Components
        </Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={{
          backgroundColor: '#28B7DA',
          padding: 10,
          alignSelf: 'baseline',
          borderRadius: 10,
          margin: 10,
        }}
        onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>
          SignUp Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#28B7DA',
          padding: 10,
          alignSelf: 'baseline',
          borderRadius: 10,
          margin: 10,
        }}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>
          Login Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#28B7DA',
          padding: 10,
          alignSelf: 'baseline',
          borderRadius: 10,
          margin: 10,
        }}
        onPress={() => navigation.navigate('Shriyans Screen')}>
        <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>
          Shriyans Screen
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#28B7DA',
          padding: 10,
          alignSelf: 'baseline',
          borderRadius: 10,
          margin: 10,
        }}
        onPress={() => navigation.navigate('Amodh Screen')}>
        <Text style={{color: 'white', fontWeight: '700', fontSize: 20}}>
          Amodh Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Landing;
