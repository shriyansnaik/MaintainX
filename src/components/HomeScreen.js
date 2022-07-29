/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {CustomText} from './common';
import FilterItemButton from './common/FilterItemButton';
const {width} = Dimensions.get('screen');
const Homescreen = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, width: '100%'}}>
      {/* <View
        style={{
          width: '100%',
          backgroundColor: '#ffffff',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <CustomText text={'Selec'} />
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Image
            style={{height: 25, width: 25}}
            source={require('../assets/icons/about.png')}
          />
          <Image
            style={{height: 25, width: 25}}
            source={require('../assets/icons/about.png')}
          />
        </View>
      </View> */}
      <View
        style={{padding: 50, backgroundColor: '#F9B07B', alignItems: 'center'}}>
        <CustomText
          style={{marginBottom: 5}}
          textSize={18}
          textWeight={300}
          text={'Let\'s Get Started with'}
        />
        <CustomText
          style={{marginBottom: 10}}
          textSize={30}
          textWeight={400}
          text={" Today's Work "}
        />
        <Image
          style={{height: 25, width: 25, padding: 15, marginBottom: 15}}
          source={require('../assets/icons/calendar.png')}
        />
        <CustomText
          style={{marginBottom: 10, color: 'black'}}
          textSize={15}
          textWeight={300}
          text={"Start with what's due today"}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('WorkOrderScreen')
          }}
          style={{
            padding: 10,
            backgroundColor: '#C13F3F',
            borderRadius: 20,
            alignItems: 'center',
            width: 200,
          }}>
          <CustomText
            textColor={'white'}
            textWeight={500}
            textSize={20}
            text={'View my work'}
          />
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <CustomText text={'My Impact'} textSize={14} textWeight={800} />
          <TouchableOpacity>
            <CustomText
              text={'See All Stats'}
              textSize={14}
              textColor="#5F4ACD"
              textWeight={800}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            borderBottomColor: '#cfcfcf',
            borderBottomWidth: 1,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <CustomText
            text={'On-time Completion'}
            textSize={14}
            textColor="#000000"
          />
          <CustomText
            text={'97%'}
            textSize={14}
            // textColor="#5F4ACD"
            textWeight={500}
          />
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            borderBottomColor: '#cfcfcf',
            borderBottomWidth: 1,
          }}
        />
      </View>
      <View>
        <CustomText
          text={'My Filters'}
          textSize={14}
          textWeight={600}
          textColor={'#000000'}
          style={{margin: 10, marginTop: 30}}
        />
      </View>
      {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 10,
            alignItems: 'center',
            marginBottom: 20,
          }}>
        <FilterItemButton
            textTitle="Past Due"
            textDesc="Work Orders"
            imageIcon={require('../assets/icons/cube.png')}
          />
          <FilterItemButton
            // style={{margin: 10}}
            textTitle="High Priority"
            textDesc="Work Orders"
            imageIcon={require('../assets/icons/cube.png')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 10,
            alignItems: 'center',
            marginBottom: 20,
          }}>
          <FilterItemButton
            textTitle="Bookmarked"
            textDesc="Work Orders"
            imageIcon={require('../assets/icons/cube.png')}
          />
          <FilterItemButton
            // style={{margin: 10}}
            textTitle="Last Updated"
            textDesc="Work Orders"
            imageIcon={require('../assets/icons/cube.png')}
          />
        </View> */}

      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginVertical: 10,
        }}>
        <FilterItemButton
          textTitle="Past Due"
          textDesc="Work Orders"
          imageIcon={require('../assets/icons/pastdue.png')}
        />
        <FilterItemButton
          textTitle="High Priority"
          textDesc="Work Orders"
          imageIcon={require('../assets/icons/flag.png')}
        />
      </View>

      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginHorizontal: 5,
          marginVertical: 10,
        }}>
        <FilterItemButton
          textTitle="Bookmarked"
          textDesc="Work Orders"
          imageIcon={require('../assets/icons/bookmark.png')}
        />
        <FilterItemButton
          textTitle="Last Updated"
          textDesc="Work Orders"
          imageIcon={require('../assets/icons/triangle.png')}
        />
      </View>
    </ScrollView>
  );
};

export default Homescreen;
