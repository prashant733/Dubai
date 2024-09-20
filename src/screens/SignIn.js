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
import auth from '@react-native-firebase/auth';
import SQLite from 'react-native-sqlite-storage';
import React, { Component, useEffect, useState } from 'react';
import { validateName, checkNormalData, checkName, checkEmail, checkMobile, checkPassword, checkConfirmPassword } from '../Validation'
import colors from '../themes/colors';
import { fonts } from '../themes';
import InputText from '../components/common/InputText';
import Icons from '../components/common/Icons'
import ErrorView from '../components/common/ErrorView';
import Header from '../components/common/Header';
import Button from '../components/common/Button';
SQLite.enablePromise(true);

export default function SignIn(props) {
  const [emailError, setEmailError] = useState({ status: false, string: '' });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true)
  const [passwordError, setPasswordError] = useState({ status: false, string: '' });
  const [db, setDb] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const initDB = async () => {
      const database = await SQLite.openDatabase({ name: 'mydb.db', location: 'default' });
      setDb(database);
      // await createTable(database);
      // loadUsers(database);
    };

    initDB();
    return () => {
      if (db) {
        // closeDB(db);
      }
    };
  }, []);
  const passwordValidate = (value) => {
    if (value === '') {
      setPasswordError(checkPassword(value, 'Please enter password'))
    }
    else if (value.length > 0 && checkPassword(value))
      setPasswordError(checkPassword(value, `Password should be between 8 to 16 characters and should include 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Character ( !"#$%&'()*+,-.:;<=>?@[]^_{|})`))

  }

  const setErrorState = () => {
    if (email === '') {
      setEmailError(checkEmail(email, "Please enter Email ID."))
    }
    else if (email.length > 0 && checkEmail(email)) {
      setEmailError(checkEmail(email, "Please enter valid Email ID"))
    }
    if (password === '') {
      setPasswordError(checkPassword(password, 'Please enter password'))
    }
    else if (password.length > 0 && checkPassword(password)) {
      setPasswordError(checkPassword(password, `Password should be between 8 to 16 characters and should include 1 Uppercase, 1 Lowercase, 1 Number and 1 Special Character ( !"#$%&'()*+,-.:;<=>?@[]^_{|}~)`))
    }

  }

  const emailValidate = (value) => {
    setEmail(value);
    if (value === '') {
      setEmailError(checkEmail(value, "Please enter Email ID."))
    }
    else if (value.length > 0 && checkEmail(value)) {
      setEmailError(checkEmail(value, "Please enter valid Email ID"))
    }

  }


  const submit = () => {
    Keyboard.dismiss()
    if (!checkEmail(email, '').status && !checkPassword(password, '').status) {
      setErrorState()
      AccountLogin()
    }
    else {
      setErrorState()
    }
  }


  const AccountLogin = () => {
    auth().signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('User logged in:', userCredential.user);
        props.navigation.navigate('Home')
        setCurrentUser(email)
      })
      .catch(error => {
        console.log(error);
        alert(error)
      });
  }

  const setCurrentUser = (email) => {
    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO users (email) VALUES (?)`,
        [email],
        (sqlTxn, res) => {
          console.log('User added successfully');
        },
        error => {
          console.log('Error adding user: ', error.message);
        }
      );
    });
  };

  const hideOnPress = () => {
    setHidePassword(!hidePassword)
  }

  return (
    <ImageBackground style={style.container} source={Icons.splash}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{ flex: 1 }}>
        <Header onPressMenu={() => props.navigation.goBack()} />
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
          <View style={style.mainc}>
            <Text style={style.getStart}>{`Welcome!!`}</Text>
            <Text style={style.information}>{`Login to App.`}</Text>
          </View>
          <View style={style.mainview}>
            <Text style={style.name}>email</Text>
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
            <Text style={style.phone}>Password</Text>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
              <InputText
                placeholder="Password"
                placeholderTextColor={colors.black}
                containerStyle={{ marginTop: 0 }}
                secureTextEntry={hidePassword}
                inputStyle={[
                  { fontSize: fonts.fs_16, marginLeft: 5, color: colors.black },
                ]}
                value={password}
                onChangeText={value => { setPassword(value), passwordValidate(value) }}
              />
              <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', right: 35, position: 'absolute' }}
                activeOpacity={0.3} onPress={() => hideOnPress()}>
                <Image style={{ height: 25, width: 25, resizeMode: 'contain', tintColor: colors.black }} source={hidePassword ? Icons.closeeye : Icons.openeye} />
              </TouchableOpacity>
            </View>
            <ErrorView text={passwordError.text} show={passwordError.status} />

            <Button
              title="Sign In"
              style={{ alignSelf: 'center', marginBottom: 40, marginTop: 20 }}
              textTitle={{
                fontSize: fonts.fs_16,
                color: colors.white,
              }}
              onPress={() => {
                submit()
              }
              }
            />
          </View>
          <View style={style.belowcontainer}>
            <Text style={style.already}>Don't Have An Account? <Text style={{ color: colors.orange, fontFamily: 'Poppins-SemiBold' }} onPress={() => props.navigation.push('SignUp')}>Register.</Text></Text>
          </View>
        </ScrollView>
        {/* <ActivityIndicator onRequestClose={false} isLoading={isLoading} /> */}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: { flex: 1 },
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

