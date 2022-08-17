import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {PriorityButton} from './common';
import {Button} from 'react-native-paper';
import {ACCEPT_TICKET_API} from '../extras/APIS';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RequestDetails({route}) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    getData('token');
  }, [])
  const getData = async (key) => {
    try {
      const data = await AsyncStorage.getItem(key);
      if (data !== null) {
        pushData(data);
        // console.log(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pushData = (tokenn) => {
      const params = JSON.stringify({
        status: 'closed',
      });
    axios
      .put(ACCEPT_TICKET_API, params, {
        headers: {
          'content-type': 'application/json',
          'access-token': tokenn,
        },
      })
      .then(function (response) {
        console.log(response.data);
        console.log('done');
      })

      .catch(function (error) {
        console.log(error, 'Axios error (request details screen)');
      });
  };
  return (
    <View style={{flex: 1}}>
      <View style={{height: 400, backgroundColor: 'white'}}>
        <Text style={styles.textStyle}>{route.params.asset}</Text>
        {/* <Text
          style={{
            fontSize: 15,
            color: 'black',
            marginLeft: 15,
            color: 'black',
          }}>
          {route.params.priority}
        </Text> */}
        <PriorityButton priorityText={route.params.priority} />

        <Image
          style={{
            height: 200,
            width: 250,
            left: 50,
            marginTop: 40,
            marginLeft: 30,
          }}
          source={require('../assets/images/printer.png')}
        />

        <View style={styles.detailStyle}>
          <View>
            <Text
              style={{
                fontSize: 15,
                color: 'black',
              }}>
              {route.params.title}
            </Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Image
                style={{height: 20, width: 20}}
                source={require('../assets/icons/location.png')}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: 'black',

                  marginLeft: 10,
                }}>
                {route.params.location}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={pushData()} style={styles.buttonStyle}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white'}}>
            Accept
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    color: 'black',
    marginTop: 15,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  detailStyle: {
    backgroundColor: 'white',
    // flex: 1,
    height: 120,
    marginHorizontal: 20,
    elevation: 20,
    padding: 20,
    borderRadius: 15,
    justifyContent: 'center',
  },
  buttonStyle: {
    height: 45,
    backgroundColor: '#C13F3F',
    elevation: 20,
    width: 110,
    marginLeft: 225,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
});
