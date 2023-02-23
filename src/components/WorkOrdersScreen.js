import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
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
import {GlobalStateContext} from '../routes/GlobalStateProvider';

const WorkOrdersScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [DATA, setDATA] = useState([]);
  const {accessToken} = useContext(GlobalStateContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getRequests();
    });

    return unsubscribe;
  }, [navigation]);

  const getRequests = () => {
    axios
      .get(WORK_ORDERS_API, {
        headers: {
          'access-token': accessToken,
        },
      })
      .then(function (response) {
        console.log("Logging the response",response.data.tickets);
        setDATA(response.data.tickets);
      })
      .catch(function (error) {
        console.log(error, 'Work Orders Screen');
      });
  };

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
        data={DATA}
        renderItem={({item}) => (
          <>
            {item.subject
              .toLowerCase()
              .includes(searchQuery.toLowerCase(), 0) ? (
              <WorkOrderCard
                title={item.subject}
                location={item.location}
                asset={item.asset_name}
                priority={item.priority}
                status={item.status}
                onCardPress={() =>
                  navigation.navigate('Work Order Details', {id: item._id})
                }
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
