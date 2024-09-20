import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity, Platform, SafeAreaView } from 'react-native'
import { Icons } from '@grainary/common'
import { colors, family, fonts, metrics, styles } from '@grainary/themes'

const Header = props => {
    return (
        <SafeAreaView style={{height:100,width:'100%',backgroundColor:'rgba(238, 28, 37, 0.35)',shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,}} >

        <View style={style.headerView} >
            {!props.hideBack ? <TouchableOpacity style={{ height: 30, width: 30, alignItems: 'center',borderRadius:5, alignSelf: 'center', justifyContent: 'center',backgroundColor:'white' }} activeOpacity={0.6} onPress={props.onPressMenu} >
                <Image source={Icons.backArrow} style={{ height: 15, width: 15, resizeMode: 'contain',tintColor:'black' }} />
            </TouchableOpacity> : <View style={{ width: '20%' }} />}
            <View style={{ flex:1,alignSelf: 'center', justifyContent: 'center', height: 50, alignItems: 'center' }}>
                <Text style={[family.Montserrat_Medium, { letterSpacing: 0.13, fontSize: fonts.fs_16, lineHeight: 24, textAlign: 'center', color: '#273A53', fontWeight: '500',marginLeft:30 }, props.titleStyle]}>{props.title}</Text>
            </View>
            {props.showSearch ? <TouchableOpacity style={{ height: 50, width: '20%', alignItems: 'flex-end', alignSelf: 'center' }} activeOpacity={0.6} onPress={props.onPressMenu} >
                <Image style={{ height: 20, width: 25 }} source={Icons.Heart} />
            </TouchableOpacity> : <View style={{width: '20%'}}/>}
        </View>
        </SafeAreaView>

    )
}

const style = StyleSheet.create({
    headerView: {
        ...styles.row,
        ...styles.selfCenter,
        // marginTop: Platform.OS == 'android' ? 20 : 20,
        height: 30, width: '90%',
        // backgroundColor: 'rgba(238, 28, 37, 0.35)'
    },
    searchStyle: { height: 22, width: 22, alignSelf: 'center' },
})

export default Header