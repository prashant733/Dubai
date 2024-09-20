import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors, family, fonts, metrics, styles } from '@grainary/themes'

const NextButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.6} disabled={!props.enabled} style={[style.btn, props.style]} onPress={() => props.onPress()}>
            <Text style={[family.sofia_bold, style.nextText]}>{props.title ? props.title : 'Next'}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    btn: { height: 40, width: 100, backgroundColor: colors.secBrand500, borderRadius: 32, alignItems: 'center', justifyContent: 'center' },
    nextText: { color: colors.brand900, fontSize: fonts.fs_16, fontWeight: '800' }
})

export default NextButton