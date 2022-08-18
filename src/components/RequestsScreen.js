import axios from 'axios';
import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {REQUESTS_API} from '../extras/APIS';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CustomText, FilterButtonSmall, WorkOrderCard} from './common';
import {GlobalStateContext} from '../routes/GlobalStateProvider';

export default function RequestsScreen({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [DATA, setDATA] = useState([]);
  const {accessToken} = useContext(GlobalStateContext);
  useEffect(() => {
    getRequests();
  }, []);
 
  const getRequests = () => {
    console.log(accessToken);
    axios
      .get(REQUESTS_API, {
        headers: {
          'access-token': accessToken,
        },
      })
      .then(function (response) {
        setDATA(response.data);
        console.log("Data has arrived", response.data);
      })
      .catch(function (error) {
        console.error(error.response.data, 'Request Screen');
      });
  };
  return (
    <>
      <View style={{backgroundColor: '#ffffff', elevation: 5}}>
        <View
          style={{
            flexDirection: 'row',
            padding: 15,
          }}>
          <CustomText
            text="Requests"
            textColor={'black'}
            textSize={18}
            textWeight={700}
          />
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              paddingHorizontal: 10,
              backgroundColor: '#EFEBEB',
              borderRadius: 15,
            }}>
            <Image
              style={{
                height: 15,
                width: 15,
                alignSelf: 'center',
                marginRight: 5,
              }}
              source={require('../assets/icons/loupe.png')}
            />
            <TextInput
              style={{width: '100%', fontSize: 12, padding: 5}}
              placeholder="Search By WorkOrder Name"
              onChangeText={searchQuery => setSearchQuery(searchQuery)}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 10,
          }}>
          <FilterButtonSmall
            buttonTitle="Priority"
            expandable={true}
            style={{backgroundColor: '#F2EDED'}}
          />
          <FilterButtonSmall
            buttonTitle="Due Date"
            expandable={true}
            style={{backgroundColor: '#F2EDED'}}
          />
          <FilterButtonSmall
            buttonTitle="Status"
            expandable={true}
            style={{backgroundColor: '#F2EDED'}}
          />
        </View>
      </View>
      <FlatList
        data={DATA.tickets}
        renderItem={({item}) => (
          <>
            {item.subject
              .toLowerCase()
              .includes(searchQuery.toLowerCase(), 0) ? (
              <WorkOrderCard
                style={{marginTop: 10}}
                title={item.subject}
                location={item.company}
                asset={item.subject}
                priority={'Medium'}
                status={item.status}
                onCardPress={() =>
                  navigation.navigate('Request Details', {
                    title: item.subject,
                    location: item.company,
                    asset: item.asset,
                    priority: item.priority,
                    status: item.status,
                    id: item._id
                  })
                }
              />
            ) : null}
          </>
        )}
      />
    </>
  );
}
