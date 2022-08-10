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
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import {CREATE_TICKET_API} from '../extras/APIS';

export default function CreateRequestScreen() {
  const [prioritySelected, setPrioritySelected] = useState('Low');
  const [title, setTitle] = useState('Fix this AC');
  const [description, setDescription] = useState('AC is overheating');
  const [assetName, setAssetName] = useState("AC");
  const [location, setLocation] = useState("Somaiya");
  const [image, setImage] = useState(null);

  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwicm9sZSI6InJlcXVlc3RlZSIsImludGVyZmFjZSI6e30sImlhdCI6MTY2MDEyNDMxMCwiZXhwIjoxNjY0OTI0MzEwfQ.hC0VJUzOWeC9B0IxbBgBzNAK4Oy-5vm-DgsBl3hXo94"

  const thisPriority = p => {
    return p == prioritySelected;
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
      compressImageQuality: 0.1,
    }).then(image => {
      const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
      setImage(imageUri);
    });
  };

  const submitTicket = () => {
    console.log(title, description);
    const params = JSON.stringify({
      subject: title,
      description: description,
      // asset_name: assetName,
      // location: location,
    });
    axios
      .post(CREATE_TICKET_API, params, {
        headers: {
          'content-type': 'application/json',
          "access-token": `${accessToken}`,
        },
      })
      .then(function (response) {
        console.log(response.data);
        console.log("done");
        // navigation.navigate('MainApp');
      })

      .catch(function (error) {
        console.log(error, 'Axios error (create request screen)');
        alert('something went wrong (create request screen)');
      });
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
              <TouchableOpacity onPress={() => takePhotoFromCamera()}>
                <Image
                  style={{height: 25, width: 25, marginRight: 10}}
                  source={require('../assets/icons/camera.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => console.log(image)}>
                <Image
                  style={{height: 25, width: 25}}
                  source={require('../assets/icons/library.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {image ? (
          <View style={{marginBottom: 10, marginLeft: 10}}>
            <Image
              style={{height: 150, width: 150}}
              source={{uri: image}}></Image>
            <TouchableOpacity
              style={{
                position: 'absolute',
                left: 120,
                top: 10,
                backgroundColor: '#ffffff80',
                borderRadius: 150 / 2,
              }}
              onPress={() => setImage(null)}>
              <Image
                style={{height: 20, width: 20}}
                source={require('../assets/icons/close.png')}
              />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
      <TouchableOpacity style={{}} onPress={() => submitTicket()}>
        <CustomText text="Post" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = {
  textInput: {
    padding: 10,
  },
};
