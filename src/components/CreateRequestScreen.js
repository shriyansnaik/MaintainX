import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {CustomText, PriorityButton} from '../components/common';
import CustomInput from './common/CustomInput';
import SelectPriorityButton from './common/SelectPriorityButton';

export default function CreateRequestScreen() {
  const [prioritySelected, setPrioritySelected] = useState('Low');

  const thisPriority = p => {
    return p == prioritySelected;
  };

  return (
    <ScrollView>
      <View
        style={{
          width: '100%',
          backgroundColor: '#eeeeee',
          padding: 15,
        }}>
        <CustomText
          text={'Details'}
          textSize={16}
          textWeight={600}
          textColor="#bd4d49"
        />
      </View>
      <View>
        <View style={{backgroundColor: 'white', padding: 10, marginBottom: 15}}>
          <TextInput style={styles.textInput} placeholder="Title" />
          <TextInput
            multiline
            style={styles.textInput}
            placeholder="Description"
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
            }}>
            <CustomText text="Priority" textSize={15} textWeight={600} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <SelectPriorityButton
                onPress={() => setPrioritySelected('Low')}
                priority={'Low'}
                selected={thisPriority('Low')}
              />
              <SelectPriorityButton
                onPress={() => setPrioritySelected('Medium')}
                priority={'Medium'}
                selected={thisPriority('Medium')}
              />
              <SelectPriorityButton
                onPress={() => setPrioritySelected('High')}
                priority={'High'}
                selected={thisPriority('High')}
              />
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'white', padding: 10, marginBottom: 15}}>
          <TextInput style={styles.textInput} placeholder="Asset" />
          <TextInput style={styles.textInput} placeholder="Category" />
          <TextInput style={styles.textInput} placeholder="Location " />
        </View>

        <View style={{backgroundColor: 'white', padding: 10, marginBottom: 15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 5,
              justifyContent: 'space-between',
            }}>
            <CustomText text={'Image'} textSize={15} textWeight={600} />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Image
                  style={{height: 25, width: 25, marginRight: 10}}
                  source={require('../assets/icons/camera.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={{height: 25, width: 25}}
                  source={require('../assets/icons/library.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = {
  textInput: {
    padding: 10,
  },
};
