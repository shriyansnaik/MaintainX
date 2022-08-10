import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {WORK_ORDERS_API} from '../extras/APIS';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CustomText, FilterButtonSmall, WorkOrderCard} from './common';

const WorkOrdersScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [DATA, setDATA] = useState([]);

  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwicm9sZSI6InJlcXVlc3RlZSIsImludGVyZmFjZSI6e30sImlhdCI6MTY2MDEyNDMxMCwiZXhwIjoxNjY0OTI0MzEwfQ.hC0VJUzOWeC9B0IxbBgBzNAK4Oy-5vm-DgsBl3hXo94"

  // const DATA = [
  //   {
  //     title: 'Laptop not working',
  //     location: 'Building 2, 3rd floor, Desk 4',
  //     asset: 'Dell Laptop',
  //     priority: 'Low',
  //     status: 'open',
  //   },
  //   {
  //     title: 'AC not working',
  //     location: 'Ground floor Lobby',
  //     asset: 'AC',
  //     priority: 'Medium',
  //     status: 'In-progress',
  //   },
  // ];

  useEffect(() => {
    getRequests();
}, [])

const getRequests = () => {
  axios
  .get(WORK_ORDERS_API , {
    headers: {
      "access-token": `${accessToken}`,
    },
  })
  .then(function (response) {
    console.log(response.data);
    setDATA(response.data);
  })
  .catch(function (error) {
    console.log(error, 'Request Screen');
  });
}

  return (
    <>
      <View style={{backgroundColor: '#ffffff', elevation: 5}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}>
          <CustomText
            text="Work Orders"
            textColor={'black'}
            textSize={18}
            textWeight={700}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
            <Image
              style={{width: 25, height: 25}}
              source={require('../assets/icons/calendar.png')}
            />
          </TouchableOpacity>
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
            style={{ width: '100%', fontSize: 12,padding: 5}}
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
        data={DATA}
        renderItem={({item}) => (
          <>
            {item.title.toLowerCase().includes(searchQuery.toLowerCase(), 0) ? (
              <WorkOrderCard
                title={item.title}
                location={item.location}
                asset={item.asset}
                priority={item.priority}
                status={item.status}
                onCardPress={() => navigation.navigate('Work Order Details')}
                style={{marginTop: 10}}
              />
            ) : null}
          </>
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default WorkOrdersScreen;
