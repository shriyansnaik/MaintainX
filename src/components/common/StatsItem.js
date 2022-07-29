import {View, Text} from 'react-native';
import React from 'react';
import {CustomText} from './CustomText';

const StatsItem = ({titleText, weekWorkDone, allTimeWorkDone, percentage,style}) => {
  return (
    <View style={style}>
      <CustomText
        text={titleText}
        textWeight={600}
        textSize={16}
        style={{marginBottom: 20, alignSelf: 'center'}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 40,
        }}>
        <View style={{alignItems: 'center'}}>
          <CustomText
            text="This Week"
            textSize={14}
            textWeight={400}
            textColor="#7F7F7F"
          />
          <View style={{flexDirection: 'row'}}>
            <CustomText text={weekWorkDone} textSize={18} textWeight={800} />
            {percentage ? (
              <CustomText text={'%'} textSize={18} textWeight={800} />
            ) : null}
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <CustomText
            text="All time"
            textSize={14}
            textWeight={400}
            textColor="#7F7F7F"
          />
          <View style={{flexDirection: 'row'}}>
            <CustomText text={allTimeWorkDone} textSize={18} textWeight={800} />
            {percentage ? (
              <CustomText text={'%'} textSize={18} textWeight={800} />
            ) : null}
          </View>
        </View>
      </View>
      <View
        style={{
          height: 0.5,
          width: '90%',
          backgroundColor: '#7F7F7F',
          marginTop: 40,
          alignSelf: 'center',
        }}></View>
    </View>
  );
};

export default StatsItem;


// <StatsItem
//         titleText={'Completed Work Order'}
//         weekWorkDone={100}
//         allTimeWorkDone={97}
//         percentage={true}
//       />