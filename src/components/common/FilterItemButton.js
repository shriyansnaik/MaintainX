import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const FilterItemButton = props => {
  const {textTitle, textDesc, onButtonPress, imageIcon, style} = props;
  return (
    <TouchableOpacity style={[styles.viewStyle,style]} onPress={onButtonPress}>
      <View>
        <Text style={styles.textStyle}>{textTitle}</Text>
        <Text style={styles.textdescStyle} >{textDesc}</Text>
        <Image style={styles.imageStyle} source={imageIcon}  />
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  viewStyle: {
    // backgroundColor: '#c4c4c4',
    // paddingVertical: 20,
    // paddingHorizontal: 45,
    // justifyContent: 'center',
    // alignItems: 'center',
    // // width: '45%',
    // borderRadius: 10,
    backgroundColor: '#fafafa',
    height: 155,
    width: 165,
    padding: 10,
    borderRadius: 10,
    overflow: 'hidden',
  	borderWidth: 2,
    borderColor: "#e8e8e8",


  },
  textStyle: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 14,
    
  },
  imageStyle: {
    alignSelf: 'center',
    marginTop: 20,
    width: 50,
    height: 50,
    resizeMode: 'contain',
     
    },
    textdescStyle:
    {
    alignSelf:'center',
    fontSize:10,
    
    }
};

export default FilterItemButton;
