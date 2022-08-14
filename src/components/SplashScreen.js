import React, {useState, useEffect} from 'react';
import {View, Image, useWindowDimensions, TouchableOpacity} from 'react-native';
import Homescreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import TabStack from '../routes/TabStack';

const SplashScreen = props => {
  const {height} = useWindowDimensions();
  const {background, logo} = styles;
  const {navigation} = props;
  const [timePassed, setTimePassed] = useState(false);
  const [token, setToken] = useState(false);

  useEffect(() => {
    trial();
    setTimeout(() => {
      const store = getData('role');
      setTimePassed(true);
    }, 2000);
  }, []);

  const trial = () => {
    const token = getData('token');
    if(token === undefined) {
      setToken(false);
    } else{
      setToken(true);
    }
    
  }
  const getData = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        getRequests(data);
        // console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return timePassed ? (
    token ? <TabStack /> : <LoginScreen /> 
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
