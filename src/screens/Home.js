import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Alert, Platform,
    BackHandler,
  } from 'react-native';
  import React, { Component, useEffect } from 'react';
  import Icons from '../components/common/Icons';
  import colors from '../themes/colors';
import { fonts } from '../themes';
import Header from '../components/common/Header';
import { useFocusEffect } from '@react-navigation/native';
  
  export default function HomeScreen(props) {
    useFocusEffect(
      React.useCallback(() => {
       
        const backAction = () => {
          Alert.alert('Hold on!', 'Are you sure you want to exit?', [
            {
              text: 'Cancel',
              onPress: () => null,
            },
            { text: 'Yes', onPress: () => BackHandler.exitApp() },
          ]);
          return true;
        };
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );
        return () => backHandler.remove();
      }, []),
    );
  
    return (
      <ImageBackground style={style.container} source={Icons.splash}>
        <View style={style.maincontainer}>
          <Text style={style.getStart1}>{`Welcome to the app!`}</Text>
        </View>
      </ImageBackground>
    );
  }
  
  const style = StyleSheet.create({
    container: { flex:1 },
    getStart1: {
      fontSize: fonts.fs_25,
      textAlign: 'center',
      fontWeight: Platform.OS === "ios" ? 'bold' : null,
      color: colors.white,
    },
    maincontainer: {
      flex:1,
     justifyContent:'center',
     alignItems:'center'
    },
   
  });
  