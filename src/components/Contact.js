/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Linking } from 'react-native'
import React from 'react'
import { CustomText, PriorityButton } from '../components/common';
export default function Contact() {
  return (
    // <View>

    //   <View style={{ marginTop: 5 }}>

    //     <Text style={{ color: 'black', fontSize: 13 }}>Hi there ! if you are facing any error let the admin known

    //     </Text>

    //     <Text style={{ color: 'red' }}
    //       onPress={() => Linking.openURL('https://www.selec.com/contact')}>
    //       Contact us
    //     </Text>
    //   </View>


    // </View>

    <View style={{
      height: 90, backgroundColor: 'white', justifyContent: 'center', flexDirection: 'column', marginTop: 20, width: '90%', alignSelf: 'center', borderRadius: 15,
      borderColor: "#e8e8e8", borderWidth: 2,
    }}>
      <Text style={{ color: 'black', fontSize: 15,margin:5}}>Hi there ! If you want to contact here is the link to our offical website {''}.
<Text style={{ color: 'blue',fontSize:18,fontWeight:'bold' }}
      
        onPress={() => Linking.openURL('https://www.selec.com/contact')}>
        Contact us
      </Text>
      </Text>
    </View>

  )
}

const styles = StyleSheet.create({})