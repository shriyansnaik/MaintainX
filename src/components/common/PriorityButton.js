import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomText} from '.';

const PriorityButton = props => {
  const {priorityText} = props;

  const textStyle = (text, type) => {
    var col = '';
    var bg = '';

    if (text === 'High') {
      col = '#f95364';
      bg = '#ffd2d2';
    } else if (text === 'Medium') {
      col = '#e2bf44';
      bg = '#faf2d7';
    } else if (text === 'Low') {
      col = '#4fa0d7';
      bg = '#e4f3fe';
    }

    if (type == 'Background') {
      return {
        backgroundColor: bg,
      };
    } else {
      return {color: col};
    }
  };
  return (
    <View
      style={[
        {
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 3,
          paddingHorizontal: 6,
          alignSelf: 'baseline',
          borderRadius: 5,
        },
        textStyle(priorityText, 'Background'),
      ]}>
      <CustomText
        text={priorityText}
        textSize={12}
        // style={textStyle({priorityText})}
        // style={{color: textStyle({priorityText})}}
        style={[textStyle(priorityText)]}
        textWeight={600}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export {PriorityButton};
