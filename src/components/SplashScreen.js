import React, {useState, useEffect} from 'react';
import {View, Image, useWindowDimensions, TouchableOpacity} from 'react-native';
import LoginScreen from './LoginScreen';

const SplashScreen = props => {
  const {height} = useWindowDimensions();
  const {background, logo} = styles;
  const {navigation} = props;
  const [timePassed, setTimePassed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimePassed(true);
    }, 2000);
  }, []);

  return timePassed ? (
    <LoginScreen />
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
