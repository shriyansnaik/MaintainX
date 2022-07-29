/* eslint-disable prettier/prettier */
// import { Text, View ,TouchableOpacity,StyleSheet} from 'react-native'
// import React, { Component } from 'react'

// const priorityButton=props=>{
//    const{priorityText,onPress}=props
//     return (
//         <View>
//        <TouchableOpacity
//             style={styles.priorityButton}
//             onPress={this.onPress}
//           >
//             <Text style={styles.priorityButtonText}>{priorityText}</Text>
//           </TouchableOpacity>
//         </View>
//       )

//   }
//   const styles = StyleSheet.create({
//     priorityButton: {
//       alignItems: "center",
//       backgroundColor: "#AEEBFF",
//       position:'absolute',
//       width:36,
//       borderRadius:5,
//       // left:306,
//       // top:211,
//       padding:3,
//         },
//     priorityButtonText:{
//       fontSize:15,
//       fontFamily:'Roboto',
//       fontStyle:'normal',
//       color:'#128FD4',
//      fontWeight:'bold',
//      lineHeight:18,

//     },
//   });

//   export default priorityButton;
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
          // backgroundColor: textStyle({priorityText}, 'Background'),
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 5,
          paddingHorizontal: 8,
          alignSelf: 'baseline',
          borderRadius: 10,
          margin: 10,
        },
        textStyle(priorityText, 'Background'),
      ]}>
      <CustomText
        text={priorityText}
        textSize={15}
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
