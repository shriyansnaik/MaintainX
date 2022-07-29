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

export default function RequestsScreen({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');
  const DATA = [
    {
      title: '3D printer not working',
      location: 'Building 2, 3rd floor, Desk 4',
      asset: '3D Printer',
      priority: 'Low',
      status: 'open',
    },
    {
      title: 'Projector not functioning',
      location: 'Main Office',
      asset: 'LG Projector',
      priority: 'High',
      status: 'open',
    },
    {
      title: 'AC not working',
      location: 'Ground floor Lobby',
      asset: 'AC',
      priority: 'Medium',
      status: 'open',
    },
  ];
  return (
    <>
      <View style={{backgroundColor: '#ffffff'}}>
        <CustomText
          text="Requests"
          textColor={'black'}
          textSize={20}
          textWeight={700}
          style={{padding: 15}}
        />

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
                onCardPress={() =>
                  navigation.navigate('Request Details', {
                    title: item.title,
                    location: item.location,
                    asset: item.asset,
                    priority: item.priority,
                    status: item.status,
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
