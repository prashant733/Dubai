import React from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text } from 'react-native'
// import { colors, family, fonts, metrics, styles } from '@grainary/themes'
import colors from '../../themes/colors'
import { fonts } from '../../themes'
const Button = props => {
    return (
        <TouchableOpacity activeOpacity={0.6} style={[style.searchStyle, props.style]} onPress={props.onPress}>
            <View style={style.button}>
                <Text style={[style.textTitle, props.textTitle]}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    textTitle: { fontSize: fonts.fs_14, fontFamily: 'Poppins-SemiBold', color: colors.white, },
    searchStyle: { height: 48, width: '65%', backgroundColor: colors.buttonBgColor, borderRadius: 14, justifyContent: 'center', alignItems: 'center', },
    arrow: { height: 13, width: 20, resizeMode: 'contain', marginLeft: 15 },
    button: { width: '100%', height: 48, justifyContent: 'center', alignItems: 'center', borderRadius: 14, backgroundColor: colors.darkgreen },
})

export default Button