import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {CustomText} from './CustomText';
import {FilterButtonSmall} from './FilterButtonSmall';
import {PriorityButton} from './PriorityButton';

const WorkOrderCard = props => {
  const {
    priority = 'Low',
    title,
    location,
    asset,
    onCardPress,
    status,
    style,
  } = props;
  return (
    <> 
      <TouchableOpacity
        onPress={onCardPress}
        style={[style, {width: '100%', padding: 10, backgroundColor: 'white', elevation: 3}]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            alignContent: 'center',
            marginBottom: 7,
          }}>
          <FilterButtonSmall
            buttonTitle={status}
            textColor="white"
            style={{
              paddingHorizontal: 4,
              paddingVertical: 2,
              backgroundColor: '#008759',
            }}
            disabled={true}
            textSize={13}
          />
          <PriorityButton priorityText={priority} />
        </View>

        <CustomText text={title} textSize={15} textWeight={600} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
          }}>
          <Image
            style={{width: 18, height: 18, marginRight: 5}}
            source={require('../../assets/icons/placeholder.png')}
            tintColor="#00000080"
          />
          <CustomText
            text={location}
            textSize={14}
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
              marginTop: 8,
            }}>
            <Image
              style={{width: 16, height: 16, marginRight: 5}}
              source={require('../../assets/icons/cube.png')}
              tintColor="#00000080"
            />
            <CustomText
              text={asset}
              textSize={14}
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
                style={{width: 18, height: 18, marginRight: 10}}
                source={require('../../assets/icons/ribbon.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={{width: 18, height: 18}}
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
