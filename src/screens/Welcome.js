import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert, Platform, Linking, PermissionsAndroid
} from 'react-native';
import React, { Component, useEffect } from 'react';
import Icons from '../components/common/Icons'
import colors from '../themes/colors';
import { fonts } from '../themes';

export default function GetStarted(props) {

  return (
    <ImageBackground style={style.container} source={Icons.splash}>
      <View style={{ height: 300, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{
          fontSize: fonts.fs_22,
          color: colors.white,
          fontFamily: 'Poppins-SemiBold',
        }}>{`DUBAI`}</Text>
      </View>
      <View style={style.maincontainer}>
        <TouchableOpacity activeOpacity={0.6}
          style={style.business}
          onPress={() => props.navigation.navigate('SignIn')}
        >
          <Text style={{
            fontSize: fonts.fs_17,
            color: colors.white,
            fontFamily: 'Poppins-SemiBold',
          }}>{`SIGNIN`}</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}
          style={style.business}
          onPress={() => props.navigation.navigate('SignUp')}
        >
          <Text style={{
            fontSize: fonts.fs_17,
            color: colors.white,
            fontFamily: 'Poppins-SemiBold',
          }}>{`SIGNUP`}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: { flex: 1 },
  getStart: {
    fontSize: fonts.fs_28,
    fontWeight: Platform.OS === "ios" ? 'bold' : null,
    lineHeight: 30,
    marginLeft: 20,
    marginTop: 50,
    color: colors.white,
  },
  getStart1: {
    fontSize: fonts.fs_18,
    textAlign: 'center',
    fontWeight: Platform.OS === "ios" ? 'bold' : null,
    color: colors.white,
  },
  business: {
    alignSelf: 'center',
    marginTop: 20,
    height: 48,
    width: '65%',
    backgroundColor: '#FC9B13',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
  },
  maincontainer: {
    height: '25%',
    width: '100%',
    position: 'absolute',
    bottom: 0
  },

});
