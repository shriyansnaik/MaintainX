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
import {CustomText, FilterButtonSmall, WorkOrderCard} from './common';

const WorkOrdersScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const DATA = [
    {
      title: 'Laptop not working',
      location: 'Building 2, 3rd floor, Desk 4',
      asset: 'Dell Laptop',
      priority: 'Low',
      status: 'open',
    },
    {
      title: 'Printer overheating',
      location: 'Main Office',
      asset: 'HP Printer',
      priority: 'High',
      status: 'closed',
    },
    {
      title: 'AC not working',
      location: 'Ground floor Lobby',
      asset: 'AC',
      priority: 'Medium',
      status: 'In-progress',
    },
    {
      title: 'AC not working',
      location: 'Ground floor Lobby',
      asset: 'AC',
      priority: 'Medium',
      status: 'In-progress',
    },
  ];
  return (
    <>
      <View style={{backgroundColor: '#ffffff'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}>
          <CustomText
            text="Work Orders"
            textColor={'black'}
            textSize={20}
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
              justifyContent: 'flex-start',
              width: '90%',
              paddingHorizontal: 10,
              backgroundColor: '#EFEBEB',
              borderRadius: 10,
            }}>
            <Image
              style={{
                height: 25,
                width: 25,
                alignSelf: 'center',
                marginRight: 5,
              }}
              source={require('../assets/icons/loupe.png')}
            />
            <TextInput
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

        {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#000000',
                borderRadius: 1000,
                padding: 6,
                marginRight: 5,
              }}>
              <Image
                style={{
                  height: 15,
                  width: 15,
                  alignSelf: 'center',
                  tintColor: '#ffffff',
                }}
                source={require('../assets/icons/sort.png')}
              />
            </TouchableOpacity>
            <CustomText text="Due Date" textSize={20} textWeight={700} />
          </View>
        </View> */}
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
