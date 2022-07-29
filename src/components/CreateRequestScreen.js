import {View, Text, TextInput, TouchableOpacity,Image} from 'react-native';
import React from 'react';
import {CustomText, PriorityButton} from '../components/common';
import CustomInput from './common/CustomInput';

export default function CreateRequestScreen() {
  return (
    <View>
      <View style={{width: '100%', backgroundColor: '#EFEBEB', padding: 10}}>
        <CustomText
          text={'Details'}
          textSize={20}
          textWeight={300}
          textColor="red"
        />
      </View>
      <View style={{backgroundColor: 'white', padding: 10}}>
        <CustomText
          text={'Enter Request Name :'}
          textSize={15}
          textWeight={600}
        />
        <TextInput
          multiline
          style={{
            borderRadius: 10,
            marginTop: 10,
            height: 40,
            padding: 10,
            borderWidth: 1,
            borderColor: '#e8e8e8',
          }}
          placeholder="Request Name"
        />

        <CustomText
          text={'Enter Description :'}
          textSize={15}
          textWeight={600}
          style={{marginTop: 5}}
        />
        <TextInput
          multiline
          style={{
            borderRadius: 10,
            marginTop: 10,
            height: 40,
            padding: 10,
            borderWidth: 1,
            borderColor: '#e8e8e8',
          }}
          placeholder="Description"
        />

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <CustomText text="Priority :" textSize={15} textWeight={600} />
          <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
          <TouchableOpacity>
          <PriorityButton priorityText={'Low'}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <PriorityButton priorityText={'Medium'}/>
          </TouchableOpacity>
          <TouchableOpacity>
          <PriorityButton priorityText={'High'}/>
          </TouchableOpacity>
          </View>
        </View>

        <CustomText
          text={'Asset :'}
          textSize={15}
          textWeight={600}
          style={{marginTop: 5}}
        />
        <TextInput
          multiline
          style={{
            borderRadius: 10,
            marginTop: 10,
            height: 40,
            padding: 10,
            borderWidth: 1,
            borderColor: '#e8e8e8',
          }}
          placeholder="Asset"
        />

        <CustomText
          text={'Category:'}
          textSize={15}
          textWeight={600}
          style={{marginTop: 5}}
        />
        <TextInput
          multiline
          style={{
            borderRadius: 10,
            marginTop: 10,
            height: 40,
            padding: 10,
            borderWidth: 1,
            borderColor: '#e8e8e8',
          }}
          placeholder="Category"
        />
        <CustomText
          text={'Location:'}
          textSize={15}
          textWeight={600}
          style={{marginTop: 5}}
        />
        <TextInput
          multiline
          style={{
            borderRadius: 10,
            marginTop: 10,
            height: 40,
            padding: 10,
            borderWidth: 1,
            borderColor: '#e8e8e8',
          }}
          placeholder="Location "
        />
       
       <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
        <CustomText
          text={'Image :'}
          textSize={15}
          textWeight={600}
          style={{marginTop: 5}}
        />
        <TouchableOpacity>
            <Image style={{height:25,width:25,margin:10,alignSelf:'center'}} source={require('../assets/icons/camera.png')}/>
        </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}
