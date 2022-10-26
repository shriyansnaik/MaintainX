import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { GET_LOCATIONS } from '../../extras/APIS';
import SettingsItem from './SettingsItem';
import { TabRouter } from '@react-navigation/native';
import Location from './Location';
export default function GetRooms({ route, navigation }) {

  const getLocations = () => {
    console.log(accessToken);
    axios
      .get(GET_LOCATIONS, {
        headers: {
          'access-token': accessToken,
        },
      })
      .then(function (response) {
        setDATA(response.data.tickets);
        // console.log('Data has arrived', response.data);
      })
      .catch(function (error) {
        console.error(error.response.data, 'Request Screen');
      });
  };
  const addToRequestData = (val) => {
    route.params.requestData.room = val
  }
  return (
    <View>

      <FlatList
        data={route.params.DATA}
        renderItem={({ item }) => (
          <Location
           
            textTitle={route.params.loc}
            textSubtitle={'Room No - ' + item.room} 
            onClick={() => {
              addToRequestData(item.room)
              navigation.navigate('Get Assets', { DATA: item.assets, loc: item.room, requestData: route.params.requestData })
            }}
          // onButtonPress={()=>console.log(item.assets[0])}
          />
        )}
      // keyExtractor={(item) => item.id}
      />
    </View>
  );
}
