/* eslint-disable react-native/no-inline-styles */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Location = props => {
  const {
    textTitle,
    textSubtitle,
    onClick,
   
  } = props;

  return (
    <TouchableOpacity

     onPress={onClick}>
      <View style={styles.viewStyle}>
      
        <View>
          <Text style={styles.textStyle}>{textTitle}</Text>
          {textSubtitle ? (
            <Text style={styles.subtitleStyle}>{textSubtitle}</Text>
          ) : null}
        </View>
      </View>
   
    </TouchableOpacity>
  );
};

const styles = {
  viewStyle: {
    height:90,backgroundColor:'white',justifyContent:'center',flexDirection:'column',marginTop:10,width:'90%',alignSelf:'center',borderRadius:15,
    borderColor: "#e8e8e8", 	borderWidth: 2,
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    marginLeft: 20,

    
  },
  subtitleStyle: {
    marginLeft: 20,
    marginTop:5
  },

};

export default Location;
