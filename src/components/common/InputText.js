import React, { Component } from 'react'
import { View, TextInput, Text,StyleSheet,Image } from 'react-native'
// import { colors, family, fonts, metrics, styles } from '@grainary/themes'
import colors from '../../themes/colors'

const InputText = props => {
   
        return (
            <View style={[STYLES.inputContainer,props.containerStyle, {flexDirection:'row' }]}>
            {/* <Image style={{ height:20,width:20, color: '#000',marginLeft:15,resizeMode:'contain' }} source={props.InputIcon}/> */}
                <TextInput
                    style={[STYLES.inputText, props.inputStyle]}
                    placeholder={props.placeholder}
                    placeholderTextColor={props.placeholderTextColor}
                    underlineColorAndroid={"transperent"}
                    secureTextEntry={props.secureTextEntry}
                    // onFocus={() => setState({ borderColor: colors.appBackground })}
                    // onBlur={() => setState({ borderColor: colors.title })}
                    keyboardType={props.keyboardType}
                    maxLength={props.maxLength}
                    value={props.value}
                    // onKeyPress={props.onKeyPress}
                    autoCorrect={false}
                    // multiline={props.multiline}
                    onChangeText={props.onChangeText}
                    editable={props.editable}
                />
            </View>
        )
    }
    

const STYLES = StyleSheet.create({
    inputContainer: {
        height: 50,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        // borderWidth:1,
        // borderColor:'#EAEAEA',
        borderRadius:12,
        borderBottomColor:colors.white,
        alignSelf: 'center',
        zIndex: 0
    },
    label: {
        fontSize: 16,
        // color: Colors.labelColor,
    },
    inputText: {
        fontSize: 18,
        height: 55,
        marginLeft: -5,
        
        flex: 1,
        paddingLeft: 5,
        color: colors.black,
    },
})

export default InputText
