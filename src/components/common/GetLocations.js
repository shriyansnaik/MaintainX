import { View, Text, FlatList } from 'react-native';
import React, { useState } from 'react';
import { GET_LOCATIONS } from '../../extras/APIS';
import SettingsItem from './SettingsItem';

export default function GetLocations({ navigation }) {
  const DATA = [
    {
      _id: '632312cc6cf7197bbc739a40',
      unit_or_building: '5',
      subdivision: [
        {
          floor: 'Ground floor',
          rooms: [
            {
              room: '001',
              assets: [
                {
                  _id: '62bad6faff1c34d07f34d427',
                  model_name: 'dummy',
                },
                {
                  _id: '62b9fc97bd683f7ffc0c09c7',
                  model_name: 'Abc',
                },
              ],
            },
            {
              room: '002',
              assets: [],
            },
          ],
        },
        {
          floor: 'First floor',
          rooms: [
            {
              room: '101',
              assets: [
                {
                  _id: '632234184918ee1b4da77cea',
                  model_name: 'dummy1',
                },
                {
                  _id: '6322347f4918ee1b4da77cf6',
                  model_name: 'Abc1',
                },
              ],
            },
            {
              room: '102',
              assets: [],
            },
          ],
        },
      ],
      locality: 'MIDC, Mahape, Navi Mumbai',
      city: 'Mumbai',
      state: 'Maharashtra',
      pin_code: 421204,
      status: 'Active',
      createdAt: '2022-09-15T11:55:56.899Z',
      updatedAt: '2022-09-15T11:55:56.899Z',
      __v: 0,
    },
    {
      _id: '63234423b6350ebb23931548',
      unit_or_building: '1',
      subdivision: [
        {
          floor: 'Ground floor',
          rooms: [
            {
              room: '001',
              assets: [
                {
                  _id: '62bad6faff1c34d07f34d427',
                  model_name: 'dummy',
                },
                {
                  _id: '62b9fc97bd683f7ffc0c09c7',
                  model_name: 'Abc',
                },
              ],
            },
            {
              room: '002',
              assets: [
                {
                  _id: '62bad6faff1c34d07f34d427',
                  model_name: 'dummy',
                },
                {
                  _id: '62b9fc97bd683f7ffc0c09c7',
                  model_name: 'Abc',
                },
              ],
            },
          ],
        },
        {
          floor: 'First floor',
          rooms: [
            {
              room: '101',
              assets: [
                {
                  _id: '632234184918ee1b4da77cea',
                  model_name: 'dummy1',
                },
                {
                  _id: '6322347f4918ee1b4da77cf6',
                  model_name: 'Abc1',
                },
              ],
            },
            {
              room: '102',
              assets: [],
            },
          ],
        },
      ],
      locality: 'MIDC, Mahape, Navi Mumbai',
      city: 'Mumbai',
      state: 'Maharashtra',
      pin_code: 421204,
      status: 'Active',
      createdAt: '2022-09-15T15:26:27.295Z',
      updatedAt: '2022-09-15T15:26:27.295Z',
      __v: 0,
    },
    {
      _id: '63234450b6350ebb23931552',
      unit_or_building: '2',
      subdivision: [
        {
          floor: 'Ground floor',
          rooms: [
            {
              room: '001',
              assets: [
                {
                  _id: '632234184918ee1b4da77cea',
                  model_name: 'dummy1',
                },
                {
                  _id: '6322347f4918ee1b4da77cf6',
                  model_name: 'Abc1',
                },
              ],
            },
            {
              room: '002',
              assets: [
                {
                  _id: '62bad6faff1c34d07f34d427',
                  model_name: 'dummy',
                },
                {
                  _id: '62b9fc97bd683f7ffc0c09c7',
                  model_name: 'Abc',
                },
              ],
            },
          ],
        },
        {
          floor: 'First floor',
          rooms: [
            {
              room: '101',
              assets: [
                {
                  _id: '62bad6faff1c34d07f34d427',
                  model_name: 'dummy',
                },
                {
                  _id: '62b9fc97bd683f7ffc0c09c7',
                  model_name: 'Abc',
                },
              ],
            },
            {
              room: '102',
              assets: [
                {
                  _id: '632234184918ee1b4da77cea',
                  model_name: 'dummy1',
                },
                {
                  _id: '6322347f4918ee1b4da77cf6',
                  model_name: 'Abc1',
                },
              ],
            },
          ],
        },
      ],
      locality: 'MIDC, Mahape, Navi Mumbai',
      city: 'Mumbai',
      state: 'Maharashtra',
      pin_code: 421204,
      status: 'Active',
      createdAt: '2022-09-15T15:27:12.267Z',
      updatedAt: '2022-09-15T15:27:12.267Z',
      __v: 0,
    },
    {
      _id: '63234469b6350ebb2393155c',
      unit_or_building: '3',
      subdivision: [
        {
          floor: 'Ground floor',
          rooms: [
            {
              room: '001',
              assets: [
                {
                  _id: '632234184918ee1b4da77cea',
                  model_name: 'dummy1',
                },
                {
                  _id: '6322347f4918ee1b4da77cf6',
                  model_name: 'Abc1',
                },
              ],
            },
            {
              room: '002',
              assets: [
                {
                  _id: '62bad6faff1c34d07f34d427',
                  model_name: 'dummy',
                },
                {
                  _id: '62b9fc97bd683f7ffc0c09c7',
                  model_name: 'Abc',
                },
              ],
            },
          ],
        },
        {
          floor: 'First floor',
          rooms: [
            {
              room: '101',
              assets: [
                {
                  _id: '62bad6faff1c34d07f34d427',
                  model_name: 'dummy',
                },
                {
                  _id: '62b9fc97bd683f7ffc0c09c7',
                  model_name: 'Abc',
                },
              ],
            },
            {
              room: '102',
              assets: [
                {
                  _id: '632234184918ee1b4da77cea',
                  model_name: 'dummy1',
                },
                {
                  _id: '6322347f4918ee1b4da77cf6',
                  model_name: 'Abc1',
                },
              ],
            },
          ],
        },
      ],
      locality: 'MIDC, Mahape, Navi Mumbai',
      city: 'Mumbai',
      state: 'Maharashtra',
      pin_code: 421204,
      status: 'Active',
      createdAt: '2022-09-15T15:27:37.016Z',
      updatedAt: '2022-09-15T15:27:37.016Z',
      __v: 0,
    },
    {
      _id: '63234484b6350ebb23931562',
      unit_or_building: '4',
      subdivision: [
        {
          floor: 'Ground floor',
          rooms: [
            {
              room: '001',
              assets: [
                {
                  _id: '62bad6faff1c34d07f34d427',
                  model_name: 'dummy',
                },
                {
                  _id: '62b9fc97bd683f7ffc0c09c7',
                  model_name: 'Abc',
                },
              ],
            },
            {
              room: '002',
              assets: [],
            },
          ],
        },
        {
          floor: 'First floor',
          rooms: [
            {
              room: '101',
              assets: [],
            },
            {
              room: '102',
              assets: [
                {
                  _id: '632234184918ee1b4da77cea',
                  model_name: 'dummy1',
                },
                {
                  _id: '6322347f4918ee1b4da77cf6',
                  model_name: 'Abc1',
                },
              ],
            },
          ],
        },
      ],
      locality: 'MIDC, Mahape, Navi Mumbai',
      city: 'Mumbai',
      state: 'Maharashtra',
      pin_code: 421204,
      status: 'Active',
      createdAt: '2022-09-15T15:28:04.778Z',
      updatedAt: '2022-09-15T15:28:04.778Z',
      __v: 0,
    },
  ];

  const [requestData, setRequestData] = useState({ unit: "", subdivision: "", room: "", asset: "" })
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

  const addToRequestData = (val) =>{
  requestData.unit=val
  }


  return (
    <View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <SettingsItem
            imageIcon={require('../../assets/icons/doublearrow.png')}
            textTitle={'Unit - ' + item.unit_or_building + ', ' + item.locality}
            onButtonPress={() => {
              addToRequestData(item.unit_or_building)
              navigation.navigate('Get Subdivision', { DATA: item.subdivision, loc: item.unit_or_building, requestData: requestData })
            }}
          />
        )}
      // keyExtractor={(item) => item.id}
      />
    </View>
  );
}
