/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  BackHandler,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {CustomText} from './common';
import FilterItemButton from './common/FilterItemButton';
import {GlobalStateContext} from '../routes/GlobalStateProvider';
import LinearGradient from 'react-native-linear-gradient';

const Homescreen = ({navigation}) => {
  function handleBackButtonClick() {
    BackHandler.exitApp();
  }

  useEffect(() => {
    console.log(roleOfUser);
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);
  const {modalVisible, setModalVisible, roleOfUser} =
    useContext(GlobalStateContext);

  const CreateScreenModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          activeOpacity={1}
          style={{
            backgroundColor: '#00000030',
            height: '100%',
          }}></TouchableOpacity>
        <View
          style={{
            width: '100%',
            backgroundColor: '#ffffff',
            position: 'absolute',
            bottom: 0,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}>
          <View
            style={{
              padding: 15,
              backgroundColor: '#FAFAFA',
            }}>
            <CustomText text="Create New" textWeight={700} textSize={15} />
          </View>
          <View
            style={{
              backgroundColor: '#ECECEC',
              height: 1,
            }}></View>
          {/* <TouchableOpacity
            onPress={() => (
              navigation.navigate('Create Request'), setModalVisible(false)
            )}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 15,
              }}>
              <Image
                style={{height: 25, width: 25, marginRight: 10}}
                source={require('../assets/icons/workorder.png')}
              />
              <CustomText text="Request" textWeight={500} textSize={18} />
            </View>
          </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => (
              navigation.navigate('Get Locations'), setModalVisible(false)
            )}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 15,
              }}>
              <Image
                style={{height: 25, width: 25, marginRight: 10}}
                source={require('../assets/icons/workorder.png')}
              />
              <CustomText text="Request" textWeight={500} textSize={18} />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  };
  return (
    <ScrollView style={{flex: 1, width: '100%'}}>
      <CreateScreenModal />

      <View>
        <LinearGradient
          colors={['rgb(235,233,255)', 'rgb(191, 222, 250)']}
          style={{padding: 50, alignItems: 'center'}}>
          <CustomText
            style={{marginBottom: 5}}
            textSize={18}
            textWeight={300}
            text={"Let's Get Started with"}
          />
          <CustomText
            style={{marginBottom: 10}}
            textSize={30}
            textWeight={400}
            text={" Today's Work "}
          />
          <Image
            style={{height: 25, width: 25, padding: 15, marginBottom: 15}}
            source={require('../assets/icons/calendar.png')}
          />
          <CustomText
            style={{marginBottom: 10, color: 'black'}}
            textSize={15}
            textWeight={300}
            text={"Start with what's due today"}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('WorkOrderScreen');
              // console.log(modalVisible);
            }}
            style={{
              padding: 10,
              backgroundColor: '#0b6efc',
              borderRadius: 20,
              alignItems: 'center',
              width: 200,
            }}>
            <CustomText
              textColor={'white'}
              textWeight={500}
              textSize={20}
              text={'View my work'}
            />
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <CustomText text={'My Impact'} textSize={14} textWeight={800} />
          <TouchableOpacity
          // onPress={()=>setModalVisible(!modalVisible)}
          >
            <CustomText
              text={'See All Stats'}
              textSize={14}
              textColor="#5F4ACD"
              textWeight={800}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            borderBottomColor: '#cfcfcf',
            borderBottomWidth: 1,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <CustomText
            text={'On-time Completion'}
            textSize={14}
            textColor="#000000"
          />
          <CustomText
            text={'97%'}
            textSize={14}
            // textColor="#5F4ACD"
            textWeight={500}
          />
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            borderBottomColor: '#cfcfcf',
            borderBottomWidth: 1,
          }}
        />
      </View>

      {/* {roleOfUser === 'technician-internal' || 'technician-external' ? ( */}
      {/* <> */}
      <View>
        <CustomText
          text={'My Filters'}
          textSize={14}
          textWeight={600}
          textColor={'#000000'}
          style={{margin: 10, marginTop: 30}}
        />
      </View>
      {/* <View> */}
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginVertical: 10,
        }}>
        <FilterItemButton
          textTitle="Past Due"
          textDesc="Work Orders"
          imageIcon={require('../assets/icons/pastdue.png')}
        />
        <FilterItemButton
          textTitle="High Priority"
          textDesc="Work Orders"
          imageIcon={require('../assets/icons/flag.png')}
        />
      </View>
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginHorizontal: 5,
          marginVertical: 10,
        }}>
        <FilterItemButton
          textTitle="Bookmarked"
          textDesc="Work Orders"
          imageIcon={require('../assets/icons/bookmark.png')}
        />
        <FilterItemButton
          textTitle="Last Updated"
          textDesc="Work Orders"
          imageIcon={require('../assets/icons/triangle.png')}
        />
        {/* </View> */}
      </View>
      {/* </> */}
      {/* ) : null} */}
    </ScrollView>
  );
};

export default Homescreen;
