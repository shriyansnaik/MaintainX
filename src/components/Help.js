import { StyleSheet, Text, View,  Linking, } from 'react-native'
import React from 'react'
import {CustomText, PriorityButton} from '../components/common';
export default function Help() {
  return (
    <View>
      <View style={{marginTop:5}}>
      <CustomText
            text="How to use Selec app?"
            textWeight={700}
            textSize={14}
            textColor="black"
         />
 
      </View>
  

    </View>
  )
}

const styles = StyleSheet.create({})