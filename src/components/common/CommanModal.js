import React, {useState} from 'react';
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Icons,
  Button,
  InputText,
  DateTimeLevel,
  Header,
} from '@grainary/common';

const CommanModal = props => {
  const [modalVisible, setModalVisible] = useState(true);

  const showModal = () => {
    setModalVisible(!modalVisible);
  };
  const hideModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={[styles.centeredView]}>
      <Modal
        animationType="slide"
        transparent
        backdropOpacity={1}
        // onNavigate={onNavigate}
        visible={props.modalVisible}
        onRequestClose={() => {
          hideModal();
        }}>
        {/* <TouchableWithoutFeedback onPress={props.dismiss}> */}
        <View
          style={{
            flex: 1,
            // height:'100%',
            justifyContent: 'flex-end',
            //   marginBottom:50,
            backgroundColor: 'rgba(0,0,0,0.3)',
            blurRadius: 1,
          }}>
          <View style={styles.mainView}>
            <View style={styles.ImageView}>
              <Image
                source={props.IconImage}
                resizeMode="contain"
                style={{height: 80, width: 80}}
              />
            </View>
            <View style={{marginTop: 20}}>
              <Text style={styles.MainText}>{props.txt}</Text>
              <Text style={[styles.MainText2, props.Text2Style]}>
                {props.text2}
              </Text>
              
            </View>
            <TouchableOpacity
              style={{
                height: 45,
                width: '70%',
                backgroundColor: '#F3E4D9',
                alignItems: 'center',
                marginTop: 30,
                justifyContent: 'center',
                borderRadius: 8,
                borderWidth:1,
                borderColor:'#C8803A',
                fontFamily:'Verlag-Bold'
              }}
              onPress={props.yes}>
              <Text style={styles.cancelText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 45,
                width: '70%',
                backgroundColor: '#F01B26',
                alignItems: 'center',
                marginTop: 10,
                borderRadius: 8,
                fontFamily:'Verlag-Bold',

                justifyContent: 'center',
              }}
              onPress={props.cancel}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </TouchableWithoutFeedback> */}
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  mainView: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#F3E4D9',
    height: 270,
    width: '90%',
    borderRadius: 28,
    marginBottom: 20,
    justifyContent: 'center',
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    textAlign: 'center',
  },
  MainText: {
    // ...AMStyle,
    fontFamily: 'Verlag-Bold',
    fontSize: 18,
    // fontWeight: '500',
    color: 'black',
    alignSelf: 'center',
  },
  MainText2: {
    // ...Modal2,
    fontFamily: 'Verlag-Bold',
    fontSize: 16,


    alignSelf: 'center',
    width: 200,
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
  },
  ImageView: {
    // backgroundColor: '#FBB815',
    height: 70,
    width: 70,
    // borderWidth: 5,
    // borderColor: 'black',
    // borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -35,
    zIndex: 9999,
  },
});

export default CommanModal;
