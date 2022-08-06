import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {CustomText} from './CustomText';

export default function SelectPriorityButton({
  priority,
  selected = false,
  ...rest
}) {
  return (
    <TouchableOpacity
      {...rest}
      // onPress={()=>console.log('h')}
      activeOpacity={1}
      style={{borderWidth: 1, borderColor: '#427eb0'}}>
      <CustomText
        text={priority}
        textSize={15}
        textWeight={400}
        textColor={selected ? '#ffffff' : '#427eb0'}
        style={{
          paddingVertical: 5,
          paddingHorizontal: 10,
          backgroundColor: selected ? '#007aff' : '#ffffff',
        }}
      />
    </TouchableOpacity>
  );
}
