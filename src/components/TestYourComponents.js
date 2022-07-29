import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import FilterButtonSmall from './common/FilterButtonSmall';
import FilterItemButton from './common/FilterItemButton';
import SettingsItem from './common/SettingsItem';
import {CustomText, PriorityButton, WorkOrderCard} from './common';
import StatsItem from './common/StatsItem';

const TestYourComponents = () => {
  const deleteData = () => {
    console.log('delete');
  };

  const [filterSelected, setFilterSelected] = useState(false);

  return (
    <ScrollView style={{flex: 1, padding: 10, backgroundColor: 'white'}}>
      {/* <SettingsItem textTitle='Setting' textSubtitle = 'subtitle' imageIcon = {require('../assets/images')} /> */}
      {/* <StatsItem
        titleText={'Completed Work Order'}
        weekWorkDone={13}
        allTimeWorkDone={49}
        style={{marginBottom: 40}}
      />
      <StatsItem
        titleText={'Completed Work Order'}
        weekWorkDone={100}
        allTimeWorkDone={97}
        percentage={true}
      /> */}

       {/* <FilterItemButton
        textTitle="Past Due"
        textDesc="Work Orders"
        onButtonPress={deleteData}
        imageIcon={require('../assets/icons/pastdue.png')}
      />
      <SettingsItem
        textTitle="About Us"
        imageIcon={require('../assets/icons/about.png')}
      />
      <FilterButtonSmall
        buttonOnPress={() => {
          console.log('Selected'), setFilterSelected(!filterSelected);
        }}
        textColor={filterSelected ? '#ffffff' : '#000000'}
        iconColor={filterSelected ? '#ffffff' : '#000000'}
        style={{backgroundColor: filterSelected ? '#000000' : '#c4c4c4'}}
        expandable={true}
      />
      <PriorityButton priorityText={'Low'} />
      <PriorityButton priorityText={'High'} />
      <PriorityButton priorityText={'Medium'} /> */}
      <WorkOrderCard
        Title={'Suite B Temp High'}
        TitlePlaceholder={'Suite B'}
        TitleCube={'TRANE HVAC SUITE B'}
        priority={'High'}
      />
      <WorkOrderCard
        Title={'Suite B Temp High'}
        TitlePlaceholder={'Suite B'}
        TitleCube={'TRANE HVAC SUITE B'}
        priority={'Low'}
      /> 
    </ScrollView>
  );
};

export default TestYourComponents;
