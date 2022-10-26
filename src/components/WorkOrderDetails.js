import {View, Image, TouchableOpacity, Modal, Alert} from 'react-native';
import {CustomText} from './common';
import React, {useState, useContext} from 'react';
import {GlobalStateContext} from '../routes/GlobalStateProvider';
import axios from 'axios';
import {ACCEPT_TICKET_API, CLOSE_WORK_ORDER_API} from '../extras/APIS';

export default function WorkOrderDetails({route, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentStatus, setCurrentStatus] = useState('Open');
  const [currentStatusIcon, setCurrentStatusIcon] = useState(
    require('../assets/icons/open.png'),
  );

  const changeStatusandModal = (status, icon) => {
    setCurrentStatus(status),
      setModalVisible(false),
      setCurrentStatusIcon(icon);
    navigation.pop();
  };

  const {accessToken} = useContext(GlobalStateContext);

  const updateStatus = () => {
    const id = route.params.id;
    console.log(id);
    const body = JSON.stringify({
      status: 'close',
    });
    axios
      .patch(CLOSE_WORK_ORDER_API + '/' + id, body, {
        headers: {
          'content-type': 'application/json',
          'access-token': accessToken,
        },
      })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <CustomText
          text= {'printer is not working'}
          textSize={20}
          textWeight={800}
          textColor="black"
          style={{marginLeft: 20, marginTop: 20}}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginLeft: 20,
          }}>
         
          <CustomText
            text={'Low Priority'}
            textSize={16}
            textWeight={400}
            
            textColor="#00000080"
            style={{margin: 5, alignSelf: 'center',marginLeft:10}}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 20,
          borderColor: '#b3b0ab',
          borderWidth: 0.9,
          padding: 10,
          borderRadius: 5,
          backgroundColor: '#edebe8',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Image
            style={{height: 20, width: 20, marginLeft: 5}}
            source={currentStatusIcon}
          />
          <CustomText
            text={currentStatus}
            textSize={16}
            textWeight={700}
            textColor="#00000080"
            style={{marginLeft: 5}}
          />
        </View>
        <View>
          <Image
            style={{height: 15, width: 15, marginRight: 10}}
            source={require('../assets/icons/down-triangle.png')}
          />
        </View>
      </TouchableOpacity>


      <View
        style={{
          borderBottomColor: '#8f8c88',
          borderBottomWidth: 0.4,
    
      
          width:'100%'
        }}>
        </View>

      <View style={{padding: 20}}>
        <CustomText
          text={'Work Description'}
          textSize={20}
          textWeight={600}
          textColor="black"
          style={{}}
        />
        <CustomText
          text={'Inspection for Dell Laptop not Working'}
          textSize={15}
          textWeight={400}
          textColor="black"
          style={{marginTop: 10}}
        />
      </View>
      
      <View
        style={{
          borderBottomColor: '#8f8c88',
          borderBottomWidth: 0.4,
    
      
          width:'100%'
        }}>
        </View>
   

      <View style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <CustomText
            text={'Location'}
            textSize={18}
            textWeight={600}
            textColor="black"
          />
          {/* <TouchableOpacity>
            <Image
              style={{height: 20, width: 20, marginLeft: 5}}
              source={require('../assets/icons/menu.png')}
            />
          </TouchableOpacity> */}
        </View>

        <CustomText
          text={'Building 2, Desk 4 , Unit 6, Selec HQ, Navi Mumbai.'}
          textSize={16}
          textWeight={400}
          textColor="black"
        />
      </View>
      
      <View
        style={{
          borderBottomColor: '#8f8c88',
          borderBottomWidth: 0.4,
    
      
          width:'100%'
        }}>
        </View>
      <View style={{padding: 20}}>
        <CustomText
          text={'Asset'}
          textSize={18}
          textWeight={600}
          textColor="black"
          style={{}}
        />
        <CustomText
          text={'Dell Laptop - 2376avgs'}
          textSize={15}
          textWeight={400}
          textColor="black"
          style={{marginTop: 10}}
        />
      </View>
      <View
        style={{
          borderBottomColor: '#8f8c88',
          borderBottomWidth: 0.4,
          margin: 15,
        }}></View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            flex: 1,
            marginTop: '90%',
            backgroundColor: '#595c61',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
          <View style={{padding: 10}}>
            <CustomText
              text={'Update Status'}
              textSize={20}
              textWeight={600}
              textColor="#FFFFFF"
            />
          </View>
         

          <TouchableOpacity
            onPress={() =>
              changeStatusandModal('Open', require('../assets/icons/open.png'))
            }
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 10,
              borderColor: '#b3b0ab',
              borderWidth: 0.9,
              padding: 10,
              borderRadius: 5,
              backgroundColor: '#edebe8',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,

                  marginLeft: 5,
                }}
                source={require('../assets/icons/open.png')}
              />
              <CustomText
                text={'Open'}
                textSize={15}
                textWeight={700}
                textColor="#00000080"
                style={{marginLeft: 5}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              changeStatusandModal(
                'In Progress',
                require('../assets/icons/inprogress.png'),
              )
            }
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 10,
              borderColor: '#b3b0ab',
              borderWidth: 0.9,
              padding: 10,
              borderRadius: 5,
              backgroundColor: '#edebe8',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,
                  marginLeft: 5,
                }}
                source={require('../assets/icons/inprogress.png')}
              />
              <CustomText
                text={'In Progress'}
                textSize={15}
                textWeight={700}
                textColor="#00000080"
                style={{marginLeft: 5}}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              changeStatusandModal(
                'Complete',
                require('../assets/icons/complete.png'),
                updateStatus(),
              )
            }
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              margin: 10,
              borderColor: '#b3b0ab',
              borderWidth: 0.9,
              padding: 10,
              borderRadius: 5,
              backgroundColor: '#edebe8',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Image
                style={{
                  height: 20,
                  width: 20,

                  marginLeft: 5,
                }}
                source={require('../assets/icons/complete.png')}
              />
              <CustomText
                text={'Complete'}
                textSize={15}
                textWeight={700}
                textColor="#00000080"
                style={{marginLeft: 5}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
