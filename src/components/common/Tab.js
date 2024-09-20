import React, { useState } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Image,
    Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icons, } from '@grainary/common';
import {  fonts, } from '@grainary/themes';

const Tab = (props) => {

    const navigation = useNavigation();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'black',
                height: Platform.OS === 'android' ? 50 : 55,
                width: '85%',
                marginLeft: 1,
                alignSelf: 'center',
                position: 'absolute',
                justifyContent: 'center',
                bottom: 15,
                borderRadius: 10
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                    width: '95%',
                    alignItems: 'center'
                }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                    style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
                    <Image
                        resizeMode="contain"
                        source={
                            props.homeEnable 
                                ? Icons.Home1
                                : Icons.Home
                        }
                        style={props.homeEnable ? STYLES.selectImageStyle : STYLES.imageStyle}
                    />
                    <Text style={{ fontSize: fonts.fs_14, color: props.homeEnable ? '#FC9B13' : 'white', fontFamily: 'Poppins-Medium' }}>Home</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Cart');
                    }}
                    style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <Image
                        resizeMode="contain"
                        source={
                               props.cartEnable 
                                ? Icons.cart1
                                : Icons.cart
                        }
                        style={props.cartEnable ? STYLES.selectImageStyle : STYLES.imageStyle}
                    />
                    <Text style={{ color: 'white', fontSize: fonts.fs_14, color: props.cartEnable ? '#FC9B13' : 'white', fontFamily: 'Poppins-Medium' }}>Cart</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Profile');
                    }}
                    style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <Image
                        resizeMode="contain"
                        source={
                               props.profileEnable
                                ? Icons.profile
                                : Icons.profile1
                        }
                        style={props.profileEnable ? STYLES.selectImageStyle : STYLES.imageStyle}
                    />
                    <Text style={{ color: 'white', fontSize: fonts.fs_14, color: props.profileEnable ? '#FC9B13' : 'white', fontFamily: 'Poppins-Medium' }}>Profile</Text>

                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Tab;

const STYLES = StyleSheet.create({
    tabBar: {
        height: 75,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
    },
    linearGradient: {
        height: 75,
    },
    imageStyle: {
        alignItems: 'center',
        width: 35,
        height: 24,
        marginRight: 5
    },
    categoryStyle: {
        alignItems: 'center',
        width: 74,
        height: 24,
    },
    walletStyle: {
        alignItems: 'center',
        width: 74,
        height: 24,
    },
    selectImageStyle: {
        width: 35,
        height: 24,
        marginRight: 5
    },
    walletSelectImageStyle: {
        width: 74,
        height: 24,
    },
});