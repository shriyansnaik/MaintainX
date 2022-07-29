import {View, ScrollView} from 'react-native';
import React from 'react';
import StatsItem from './common/StatsItem';
import {CustomText} from './common';

const StatsScreen = () => {
  return (
    <ScrollView style={{backgroundColor: '#ffffff'}}>
      <StatsItem
        titleText={'Completed Work Order'}
        weekWorkDone={13}
        allTimeWorkDone={49}
        style={{marginBottom: 40, marginTop: 60}}
      />
      <StatsItem
        titleText={'Completed Work Order'}
        weekWorkDone={100}
        allTimeWorkDone={97}
        percentage={true}
      />
      <CustomText
        text="This week = Mar 21 - Mar 27"
        textWeight={300}
        textSize={12}
        style={{alignSelf: 'center', marginTop: 20}}
      />
    </ScrollView>
  )
};

export default StatsScreen;
