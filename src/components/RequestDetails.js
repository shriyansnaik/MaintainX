/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState, useContext} from 'react';
import {PriorityButton} from './common';
import {Button} from 'react-native-paper';
import {ACCEPTTTTTTTT, ACCEPT_CLOSE_WORK_ORDER_API, ACCEPT_TICKET_API} from '../extras/APIS';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {GlobalStateContext} from '../routes/GlobalStateProvider';

export default function RequestDetails({route}) {
  const [post, setPost] = useState(null);
  const {accessToken} = useContext(GlobalStateContext);

  const pushData = () => {
    console.log(route.params.id, 'tciket id');
    const id = route.params.id;
    const params = JSON.stringify({
      ticketid: id,
    });
    axios({
      method: 'patch',
      url: ACCEPT_TICKET_API + '/' + id,
      params,
      headers: {
        'access-token': accessToken,
      },
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      });

    // axios
    //   .patch(`http://192.168.1.7:3000/technician/acceptTicket/${route.params.id}`,params,  {
    //     headers: {
    //       'access-token': accessToken,
    //     },
    //   })
    //   .then(function (response) {
    //     console.log(response.data);
    //     console.log('done');
    //   })

    //   .catch(function (error) {
    //     console.log(error, 'Axios error (request details screen)');
    //   });
  };
  return (
    <View style={{flex: 1}}>
      <View style={{height: 400, backgroundColor: 'white'}}>
        <Text style={styles.textStyle}>{route.params.asset}</Text>
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

                  marginLeft: 10,
                }}>
               {route.params.location}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => pushData()} style={styles.buttonStyle}>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
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
    marginLeft: 260,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,

   
  },
});
