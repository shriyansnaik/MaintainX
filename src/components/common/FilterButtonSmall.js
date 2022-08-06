import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {CustomText} from './CustomText';
const FilterButtonSmall = props => {
  const {
    buttonTitle = 'default',
    buttonOnPress,
    expandable = false,
    textColor,
    iconColor,
    style,
    disabled = false,
    textSize = 15
  } = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={buttonOnPress}
      style={[styles.buttonStyle, style]}>
      <CustomText
        text={buttonTitle}
        textWeight={600}
        textSize={textSize}
        textColor={textColor}
      />
      {expandable ? (
        <Image
          style={[styles.iconStyle, {tintColor: iconColor}]}
          source={require('../../assets/icons/down-triangle.png')}
        />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    alignSelf: 'baseline',
    borderRadius: 5,
    padding: 7,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7C7474',
  },
  iconStyle: {height: 11, width: 11, marginLeft: 5, marginTop: 5},
};

export {FilterButtonSmall};

// example use

// <FilterButtonSmall
//         buttonOnPress={() => {
//           console.log('Selected'), setFilterSelected(!filterSelected);
//         }}
//         textColor={filterSelected ? '#ffffff' : '#000000'}
//         iconColor={filterSelected ? '#ffffff' : '#000000'}
//         style={{backgroundColor: filterSelected ? '#000000' : '#c4c4c4'}}
//         expandable={true}
//       />
