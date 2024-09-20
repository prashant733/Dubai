import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { colors, family, fonts, metrics, styles } from '@grainary/themes'

const QuitButton = props => {
    return (
        <View style={style.mainView} >
            <TouchableOpacity activeOpacity={0.6} disabled={!props.enabled} style={[style.btn, props.style]} onPress={() => props.onPress()}>
                <Text style={[family.sofia_bold, style.nextText]}>{props.title ? props.title : 'Next'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    mainView: { ...styles.selfCenter, height: 'auto', width: '100%' },
    btn: { height: 40, width: '100%', backgroundColor: colors.secBrand500, borderRadius: 32, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' },
    nextText: { color: colors.brand900, fontSize: fonts.fs_16, fontWeight: '800' }
})

export default QuitButton