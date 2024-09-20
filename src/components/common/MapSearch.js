import React, { useState, useEffect } from 'react'
import { View, StyleSheet, TextInput, Image,TouchableOpacity } from 'react-native'

import { Icons } from '@grainary/common'
import { colors, family, fonts, metrics, styles } from '@grainary/themes'
// import { TouchableOpacity } from 'react-native-gesture-handler'

const MapSearch = props => {
    const [tfValue, setTfValue] = useState(props?.title)

    useEffect(() => {
        setTfValue(props?.title ? props?.title : '77054')
    }, [])

    return (
        <View style={[style.inputContainer]}>
            <TouchableOpacity activeOpacity={0.6} onPress={props.onPressBack} style={style.searchButton}>
                <Image style={[style.searchStyle]} source={Icons.headerBack} />
            </TouchableOpacity>
            <View style={[styles.center, styles.row, { width: '50%' }]}>
                <View style={style.searchButton}>
                    <Image style={[style.searchStyle]} source={Icons.mapSearch} />
                </View>
                <TextInput
                    value={tfValue}
                    placeholderTextColor={colors.textColor}
                    style={[style.inputContainerStyle]}
                    autoCapitalize="none"
                    returnKeyType={'search'}
                    maxLength={10}
                    onChangeText={(val) => setTfValue(val)}
                    onBlur={() => props.onBlur(tfValue)}
                />
            </View>
            <TouchableOpacity activeOpacity={0.6} style={style.searchButton}>
                <Image style={[style.searchStyle]} source={Icons.menu} />
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    inputContainer: { ...styles.spaceBetween, backgroundColor: colors.white, ...styles.row, height: 45, marginLeft: 10, marginRight: 10 },
    searchButton: { height: '100%', width: 40, justifyContent: 'center', alignItems: 'center' },
    inputContainerStyle: { ...family.sofia_bold, color: colors.titleColor, width: '25%', fontSize: fonts.fs_14, alignItems: 'center', alignSelf: 'center' },
    searchStyle: { height: 22, width: 22 },
})

export default MapSearch