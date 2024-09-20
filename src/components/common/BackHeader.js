import React from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity, Platform, SafeAreaView } from 'react-native'
import { Icons } from '@grainary/common'
import { colors, family, fonts, metrics, styles } from '@grainary/themes'

const BackHeader = props => {
    return (
        <SafeAreaView style={style.headerView} >
            {!props.hideBack ? <TouchableOpacity style={{ height: 30, width: 70, alignItems: 'center', borderRadius: 15, alignSelf: 'center', justifyContent: 'center', backgroundColor: 'black', flexDirection: 'row' }} activeOpacity={0.6} onPress={props.onPressMenu} >
                <Image source={Icons.sidearrow} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
                <Text style={{ marginLeft: 5, fontSize: fonts.fs_14, fontFamily: 'Poppins-Regular', color: colors.white }}>Back</Text>
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
        ...styles.row,
        ...styles.selfCenter,
        marginTop: Platform.OS == 'android' ? 20 : 20,
        marginBottom:10,
        height: 50, width: '90%',
        backgroundColor: colors.transparent
    },
    searchStyle: { height: 22, width: 22, alignSelf: 'center' },
})

export default BackHeader