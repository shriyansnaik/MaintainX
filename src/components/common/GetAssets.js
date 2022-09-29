import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { GET_LOCATIONS } from '../../extras/APIS';
import SettingsItem from './SettingsItem';
import { TabRouter } from '@react-navigation/native';

export default function GetAssets({ route ,navigation}) {

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
    route.params.requestData.asset = val
  }

  return (
    <View>

      <FlatList
        data={route.params.DATA}
        renderItem={({ item }) => (
          <SettingsItem
            imageIcon={require('../../assets/icons/doublearrow.png')}
            textTitle={item.model_name + ', Room No -' + route.params.loc}
            onButtonPress={

              () => {
                addToRequestData(item.model_name),
                // console.log(route.params.requestData)
                navigation.navigate("Create Request",{requestData:route.params.requestData})
              }
            }

          />
        )}
      // keyExtractor={(item) => item.id}
      />
    </View>
  );
}
