import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {CustomText, PriorityButton} from '../components/common';
import CustomInput from './common/CustomInput';
import SelectPriorityButton from './common/SelectPriorityButton';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';
import {CREATE_TICKET_API, UPLOAD_IMAGE} from '../extras/APIS';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalStateContext} from '../routes/GlobalStateProvider';
// const bufferImage = require('buffer-image');
// import bufferImage from 'buffer-image';

export default function CreateRequestScreen({navigation}) {
  const [prioritySelected, setPrioritySelected] = useState('Medium');
  const [title, setTitle] = useState('Flatlist test');
  const [description, setDescription] = useState('Testing to check if flatlist breaks');
  const [assetName, setAssetName] = useState('mouse');
  const [location, setLocation] = useState('area1');
  const [image, setImage] = useState(null);
  const [postFilled, setPostFilled] = useState(false);
  const {accessToken} = useContext(GlobalStateContext);

  useEffect(() => {
    allFieldsFilled();
  }, [title, description, assetName, location]);

  const imageUploadTest = () => {
    let formData = new FormData();
    formData.append("image", image);
    
    // const params = JSON.stringify({
    //   image: image,
    // });
    // console.log(params);
    // axios
    //   .post(UPLOAD_IMAGE, params)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error.message, 'Axios error (create request screen)');
    //   });

    console.log(formData);
    axios({
      method: 'post',
      url: UPLOAD_IMAGE,
      data: formData,
      headers: {'Content-Type': 'multipart/form-data'},
    })
      .then(function (response) {
        //handle success
        console.log(response.data);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  const thisPriority = p => {
    return p == prioritySelected;
  };

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      cropping: true,
      compressImageQuality: 0.1,
    })
      .then(image => {
        const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
        setImage(imageUri);
      })
      .catch(err => console.log('Error clicking image: ', err.message));
  };

  const allFieldsFilled = () => {
    if (title != '' && description != '' && location != '' && assetName != '') {
      setPostFilled(true);
    } else {
      setPostFilled(false);
    }
  };

  const submitTicket = () => {
    console.log(title, description);
    const params = JSON.stringify({
      subject: title,
      description: description,
      asset_name: assetName,
      location: location,
    });
    axios
      .post(CREATE_TICKET_API, params, {
        headers: {
          'content-type': 'application/json',
          'access-token': `${accessToken}`,
        },
      })
      .then(function (response) {
        console.log(response.data);
        console.log('done');
        // navigation.goBack();
      })

      .catch(function (error) {
        console.log(error, 'Axios error (create request screen)');
        alert('something went wrong (create request screen)');
      });
  };

  const HEADER = ({navigation}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
          paddingVertical: 13,
          paddingHorizontal: 10,
          elevation: 3,
          borderBottomColor: '#cccccc',
          borderBottomWidth: 1,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/icons/close.png')}
            style={{
              height: 25,
              width: 25,
              tintColor: '#000000',
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => imageUploadTest()}>
          <CustomText
            text="Create Request"
            textWeight={600}
            textSize={19}
            textColor="black"
          />
        </TouchableOpacity>

        <TouchableOpacity disabled={!postFilled} onPress={() => submitTicket()}>
          <Image
            source={require('../assets/icons/tick.png')}
            style={{
              height: 25,
              width: 25,
              tintColor: postFilled ? 'blue' : '#cccccc',
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <HEADER navigation={navigation} />
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
          <View
            style={{backgroundColor: 'white', padding: 10, marginBottom: 15}}>
            <TextInput
              style={styles.textInput}
              onChangeText={value => setTitle(value)}
              placeholder="Title"
            />
            <TextInput
              multiline
              style={styles.textInput}
              placeholder="Description"
              onChangeText={value => setDescription(value)}
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
          <View
            style={{backgroundColor: 'white', padding: 10, marginBottom: 15}}>
            <TextInput
              style={styles.textInput}
              placeholder="Asset"
              onChangeText={value => setAssetName(value)}
            />
            <TextInput style={styles.textInput} placeholder="Category" />
            <TextInput
              style={styles.textInput}
              placeholder="Location"
              onChangeText={value => setLocation(value)}
            />
          </View>

          <View
            style={{backgroundColor: 'white', padding: 10, marginBottom: 15}}>
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
      </ScrollView>
    </>
  );
}

const styles = {
  textInput: {
    padding: 10,
  },
};
