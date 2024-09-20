// import { Icons } from '@grainary/common'
// import { colors, fonts, styles } from '@grainary/themes'
import React from 'react'
import { Image, Platform, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../themes/colors'
import { fonts } from '../../themes'
import Icons from './Icons'
const Header = props => {
    return (
        <SafeAreaView style={style.headerView} >
            {!props.hideBack ? <TouchableOpacity style={{ height: 30, width: 70, alignItems: 'center', borderRadius: 15, alignSelf: 'center', justifyContent: 'center', backgroundColor: 'white', flexDirection: 'row' }} activeOpacity={0.6} onPress={props.onPressMenu} >
                <Image source={Icons.backArrow} style={{ height: 15, width: 15, resizeMode: 'contain' }} />
                <Text style={{ marginLeft: 10, fontSize: fonts.fs_14, fontFamily: 'Poppins-Regular', color: colors.black }}>Back</Text>
            </TouchableOpacity> : <View style={{ width: '20%' }} />}
            <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', height: 50, alignItems: 'center' }}>
                <Text style={[{ fontFamily: 'Poppins-Bold', letterSpacing: 0.13, fontSize: fonts.fs_18, lineHeight: 24, textAlign: 'center', color: '#273A53', fontWeight: '600', marginLeft: 30 }, props.titleStyle]} >{props.title}</Text>
            </View>
            {props.showSearch ? <TouchableOpacity style={{ height: 50, width: '20%', alignItems: 'flex-end', alignSelf: 'center', justifyContent: 'center' }} activeOpacity={0.6} onPress={props.onPressMenu2} >
                <Text style={[{ fontFamily: 'Poppins-Bold', fontSize: fonts.fs_16, textAlign: 'center', color: '#273A53', fontWeight: '600', marginLeft: 0 }, props.titleStyle]}>{`Clear All`}</Text>

            </TouchableOpacity> : <View style={{ width: '20%' }} />}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    headerView: {
        flexDirection:'row',
        alignSelf:'center',
        marginTop: Platform.OS == 'android' ? 0 : 20,
        marginBottom:10,
        height: 50, width: '90%',
        backgroundColor: colors.transparent
    },
    searchStyle: { height: 22, width: 22, alignSelf: 'center' },
})

export default Header