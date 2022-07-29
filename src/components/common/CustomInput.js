import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry, style}) => {
  return (
    <View style={[styles.container,style]}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        // style={styles.input}
        secureTextEntry={secureTextEntry}
        // style={[
          // textWeight ? textStyle(textWeight) : null,
          // textSize ? {fontSize: textSize} : null,
          // textColor ? {color: textColor} : null,
        //   marginTop ? 30:null,
        //   style
        // ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
});

export default CustomInput;
