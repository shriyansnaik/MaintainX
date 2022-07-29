import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {CustomText} from './CustomText';
import {FilterButtonSmall} from './FilterButtonSmall';
import {PriorityButton} from './PriorityButton';

const WorkOrderCard = props => {
  const {priority = 'Low', title, location, asset, onCardPress, status} = props;
  return (
    <>
      <TouchableOpacity
        onPress={onCardPress}
        style={{
          width: '100%',
          padding: 10,
          marginVertical: 10,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}>
          <View>
            <FilterButtonSmall
              buttonTitle={status}
              textColor="white"
              style={{padding: 5, paddingHorizontal: 10, backgroundColor: '#008759',}}
              disabled={true}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            {/* <FilterButtonSmall
              buttonTitle={'# 003'}
              textColor="#979292"
              style={{
                padding: 5,
                paddingHorizontal: 10,
                backgroundColor: '#E2E2E2',
              }}
            /> */}
            <PriorityButton priorityText={priority} />
          </View>
        </View>

        <CustomText text={title} textSize={20} textWeight={600} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // justifyContent: 'flex-start',
            marginVertical: 8,
          }}>
          <Image
            style={{width: 20, height: 20, marginRight: 5}}
            source={require('../../assets/icons/placeholder.png')}
            tintColor="#00000080"
          />
          <CustomText
            text={location}
            textSize={16}
            textWeight={500}
            textColor="#00000080"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // justifyContent: 'flex-start',
              marginVertical: 8,
            }}>
            <Image
              style={{width: 18, height: 18, marginRight: 5}}
              source={require('../../assets/icons/cube.png')}
              tintColor="#00000080"
            />
            <CustomText
              text={asset}
              textSize={16}
              textWeight={500}
              textColor="#00000080"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity>
              <Image
                style={{width: 20, height: 20, marginRight: 10}}
                source={require('../../assets/icons/ribbon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{width: 20, height: 20}}
                source={require('../../assets/icons/menu.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({});

export {WorkOrderCard};
