import React from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text } from 'react-native'
import { Icons } from '@grainary/common'
import { colors, family, fonts, metrics, styles } from '@grainary/themes'

const LevelTextInput = props => {
    return (
        <View style={[style.inputContainer, props.style]}>
            <Text style={[style.levelTitle]}>{"  "+props.title+"  "}</Text>
            <TextInput
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor}
                style={style.inputContainerStyle}
                autoCapitalize="none"
                value={props.value}
                onChangeText={props.onChangeText}
                maxLength={props.maxLength}
                keyboardType={props.keyboardType}
                multiline ={props.multiline}
                editable={props.editable}
            />
            <TouchableOpacity style={style.searchButton} activeOpacity={0.6} onPress={props.onPressSearch} >
                <Image style={[style.searchStyle, { tintColor: props.tintColor }]} source={Icons.search} />
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    inputContainer: { ...styles.selfCenter, ...styles.row, height: 50,zIndex: 0, width: '100%', borderRadius: 10, borderWidth: 2, borderColor: "#E6E6E6" },
    searchButton: { height: '100%', width: 40, justifyContent: 'center', alignItems: 'center' },
    inputContainerStyle: { flex: 1,zIndex: 0, fontSize: fonts.fs_15, color: colors.buttonBgColor, marginLeft:8},
    searchStyle: { height: 22, width: 22 },
    levelTitle: { zIndex:9999,position: 'absolute', top: -10, left: 15, backgroundColor: colors.textBgColor, ...family.Montserrat_Bold, fontSize: fonts.fs_13, fontWeight: 'bold',color: colors.buttonBgColor, }
})

export default LevelTextInput