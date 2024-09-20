import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    ScrollView, Platform, Keyboard, Modal, Linking
  } from 'react-native';
  import React, { Component, useEffect, useState } from 'react';
  
  import { fonts } from '../themes';
  import colors from '../themes/colors';
  import InputText from '../components/common/InputText';
  import Header from '../components/common/Header';
  import Icons from '../components/common/Icons'
  import ErrorView from '../components/common/ErrorView';
  import Button from '../components/common/Button';
  import CountryModal from '../components/common/CountryModal';

  import { validateName, checkNormalData, checkName, checkEmail, checkMobile, checkPassword, checkConfirmPassword } from '../Validation'
import SQLite from 'react-native-sqlite-storage';
SQLite.enablePromise(true)
  export default function Profile(props) {
  
    const [codeModal, setCodeModal] = useState(false);
    const [countryFlag, setCountryFlag] = useState('data:image/png;base64,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')
    const [selectedCode, setSelectedCode] = useState('+91')
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState({ status: false, string: '' });
    const [emailError, setEmailError] = useState({ status: false, string: '' });
    const [db, setDb] = useState(null);

    useEffect(() => {
      const initDB = async () => {
        const database = await SQLite.openDatabase({ name: 'mydb.db', location: 'default' });
        setDb(database);
        await getCurrentUser(database);
        // loadUsers(database);
      };
  
      initDB();
      return () => {
        if (db) {
          // closeDB(db);
        }
      };
    }, []);

    const getCurrentUser = (db) => {
      db.transaction(txn => {
        txn.executeSql(
          `SELECT * FROM users ORDER BY id DESC LIMIT 1`,
          [],
          (sqlTxn, res) => {
            let len = res.rows.length;
            if (len > 0) {
              let user = res.rows.item(0);
              console.log('Current User:', user);
              setPhoneNumber(user.phone)
              setEmail(user.email)

              // You can return or use this user info in your application
            }
          },
          error => {
            console.log('Error retrieving user: ', error.message);
          }
        );
      });
    };
    
  
    const phoneValidate = (value) => {
      setPhoneNumber(value);
      if (value === '') {
        setPhoneNumberError(checkMobile(value, 'Please enter phone number'))
      }
      else if (value.length > 0 && checkMobile(value)) {
        setPhoneNumberError(checkMobile(value, 'Please enter valid phone number'))
      }
    }
  
    const setErrorState = () => {
  
      if (phoneNumber === '') {
        setPhoneNumberError(checkMobile(phoneNumber, 'Please enter phone number'))
      }
      else if (phoneNumber.length > 0 && checkMobile(phoneNumber)) {
        setPhoneNumberError(checkMobile(phoneNumber, 'Please enter valid phone number'))
      }
    }
  
  
    const loginAccount = async () => {
    
  
    }
  
  
    const submit = () => {
      Keyboard.dismiss()
      if (!checkNormalData(phoneNumber, '').status){
        setErrorState()
        loginAccount()
      }
      else {
        setErrorState()
      }
    }
  
    const openModal = () => {
      setCodeModal(true);
    };
  
    return (
      <ImageBackground style={style.container} source={Icons.splash}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
          <Header onPressMenu={() => props.navigation.goBack()} />
          <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
            <View style={style.mainc}>
              <Text style={style.getStart}>{`Profile`}</Text>
              {/* <Text style={style.information}>{`Register to ingest organic.`}</Text> */}
            </View>
            <View style={style.mainview}>
             
              <Text style={style.phone}>email</Text>

            <InputText
              placeholder="Email"
              placeholderTextColor={colors.black}
              containerStyle={{ marginTop: 10, borderColor: email.length > 0 ? '#87DC69' : '#EAEAEA' }}
              inputStyle={{ paddingLeft: 10 }}
              value={email}
              onChangeText={value => { setEmail(value), setEmailError(checkEmail(value, 'Please enter email.')), emailValidate(value) }}
            />
            <ErrorView text={
              emailError.text} show={emailError.status}

            />
              <Text style={style.phone}>Phone Number</Text>
              <View style={style.input}>
                <InputText
                  placeholder="Phone Number"
                  placeholderTextColor={colors.black}
                  containerStyle={{ marginTop: 10 }}
                  keyboardType="phone-pad"
                  maxLength={10}
                  secureTextEntry={false}
                  returnKeyType='done'
                  inputStyle={[
                    // family.Montserrat_Regular,
                    { fontSize: fonts.fs_16, width: '90%', marginLeft: 65, color: colors.black },
                  ]}
                  value={phoneNumber}
                  onChangeText={value => { setPhoneNumber(value),phoneValidate(value),setPhoneNumberError(checkNormalData(value,'Please enter Phone Number')) }}
                />
                <View style={style.flag}
                  activeOpacity={0.3} 
                  // onPress={() => openModal()}
                  >
                  {/* <Image style={style.downarrow} source={Icons.downArrow} /> */}
                  <View
                    style={style.modal1}
                    // onPress={() => openModal()}
                    >
                    <Image style={style.countryflag} source={{ uri: countryFlag }} />
                  </View>
                  <Text style={{}}>{selectedCode}</Text>
                </View>
              </View>
               <ErrorView text={phoneNumberError.text} show={phoneNumberError.status} />
  
            </View>
           
          </ScrollView>
          {/* <ActivityIndicator onRequestClose={false} isLoading={isLoading} /> */}
        </KeyboardAvoidingView>
  
  
      </ImageBackground>
    );
  }
  
  const style = StyleSheet.create({
    container: { flex:1 },
    getStart: {
      fontFamily: 'Poppins-SemiBold',
      textAlign: 'left',
      fontSize: fonts.fs_24,
  
      color: colors.white,
    },
    information: {
      fontSize: fonts.fs_14,
      fontFamily: 'Poppins-Regular',
      color: colors.white,
      fontWeight: Platform.OS == "ios" ? '500' : null,
  
    },
    forgot: {
      fontSize: fonts.fs_15,
      marginLeft: 20,
      marginTop: 10,
      color: colors.black,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      elevation: 8,
    },
    already: {
      fontFamily: 'Poppins-Regular',
      marginLeft: 10,
      fontSize: fonts.fs_16,
      textAlign: 'center',
      color: colors.black,
  
    },
    mainc: {
      marginTop: 20,
      alignSelf: 'flex-start',
      marginLeft: 20
    },
    mainview: {
      height: "auto",
      width: '90%',
      backgroundColor: 'white',
      alignSelf: 'center',
      marginTop: 20,
      borderRadius: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 8,
    },
    name: {
      marginTop: 20,
      marginLeft: 20,
      fontFamily: 'Poppins-SemiBold',
      fontSize: fonts.fs_16,
    },
    phone: {
      marginTop: 20,
      marginLeft: 20,
      fontFamily: 'Poppins-SemiBold',
      fontSize: fonts.fs_16,
      color: colors.black
    },
    input: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 0
    },
    flag: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: 10,
      justifyContent: 'center',
      left: 10,
      position: 'absolute',
      height: 35,
      width: 80,
    },
    downarrow: {
      height: 10,
      width: 10,
      resizeMode: 'contain',
      tintColor: colors.black
    },
    countryflag: {
      height: 25,
      width: 30,
      resizeMode: 'contain',
      marginTop: 2
    },
    modal1: {
      height: 30,
      width: 35,
      marginLeft: 10,
    },
    terms: {
      flexDirection: 'row',
      marginTop: 20,
      marginLeft: 20,
      marginBottom: 30,
    },
    belowcontainer: {
      height: 45,
      justifyContent: 'center',
      width: '80%',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      backgroundColor: colors.white,
      alignSelf: 'center',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
  
  });
  