import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {
  Icons,
  Button,
  InputText,
  Header,
  SearchTextInput,
  ImageContainer,
} from '@grainary/common';
import {colors, family, fonts, metrics, styles} from '@grainary/themes';


const {width, height} = Dimensions.get('screen');

const imageContainer = props => {
  return (
    <>
    <View key={() => props.key2} style={[style.appBar1, props.newItem]}>
      <ImageBackground
        style={{
          height: Platform.OS=="ios"?130:120,
          width: 60,
        //   backgroundColor: 'yellow',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop:30,
          zIndex: 9999,
        }} resizeMode='contain' source={{uri:props.categoryImage}}>
        {/* <Image
          style={{
            height: 20,
            width: 65,
            position: 'absolute',
            bottom: -10,resizeMode:'contain'
          }} source={Icons.shadow}/> */}
      </ImageBackground>
      {/* <View key={() => props.key2} style={[style.appBar1, props.subItem]}> */}
        <TouchableOpacity onPress={()=>props.wishlist()}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            height: 30,
            width: 30,
            borderRadius: 15,
            backgroundColor: colors.white,
            justifyContent:'center',
            alignItems:'center'
          }}>
             <Image style={{height:25,width:25,resizeMode:'contain',tintColor:'red'}} source={props.heart}/>   
          </TouchableOpacity>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            // marginTop: 70,
          }}>
          <Text style={[{marginTop:5,letterSpacing:0.5,fontFamily:'Verlag-Book',color:'black'}]}>{props.title}</Text>
          <Text style={[{marginTop:Platform.OS=="ios"?5:0,fontWeight:Platform.OS=="ios"?'600':null,fontSize:fonts.fs_16,fontFamily:'Verlag-Bold',color:'black'}]}>{props.subtitle}</Text>
          <Text style={[{marginTop:Platform.OS=="ios"?8:0,fontWeight:Platform.OS=="ios"?'700':null,fontSize:fonts.fs_16,fontFamily:'Verlag-Bold',color:'black'}]}>{props.price}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center',marginTop:Platform.OS=="ios"?5:0}}>
            <Image source={Icons.star} style={{height: 14, width: 14,tintColor:'#EEBB58'}} />
            <Text style={{marginLeft:5,color:'black',fontFamily:'Verlag-Book',}}>{props.rating}</Text>
          </View>
        </View>
      {/* </View> */}
     
    </View>
    </>
  );
};
export default imageContainer;

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 210 : 210;
const style = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  container: {
    flex: 1,
  },
  titleView: {
    borderBottomWidth: 2,
    width: 20,
    borderBottomColor: 'white',
  },
  background: {
    height: 30,
    width: 30,
  },
  text2: {
    color: 'white',
    marginTop: 10,
    // backgroundColor:'green',
    height: 40,
    width: '90%',
    fontFamily: 'Poppins-SemiBold',
  },
  appBar: {
    // height: (width - 60) / 2 + 60,
    // width: (width - 70) / 2,
    borderRadius: 20,
    backgroundColor:'red'
    // backgroundColor: 'red',
  },
  appBar1: {
    height: (width - 40+170) / 2,
    width: (width - 65)/2 ,
    borderRadius: 20,
    backgroundColor: '#F3E4D9',
  },
  leftBtn: {
    height: '100%',
    width: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text1: {
    marginTop: 5,
    color: 'white',
    fontSize: 17,
    height: 25,
    // backgroundColor:'red',
    fontFamily: 'Poppins-Bold',
    width: 105,
  },
  leftIcon: {
    height: 20,
    width: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  notification: {
    flex: 1,
    justifyContent: 'flex-start',
    bottom: 15,
    marginLeft: 15,
    backgroundColor: 'green',
  },
});