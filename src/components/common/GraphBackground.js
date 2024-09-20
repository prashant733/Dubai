import React from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text } from 'react-native'

import { Icons } from '@grainary/common'
import { colors, family, fonts, metrics, styles } from '@grainary/themes'

const GraphBackground = props => {
    return (
        <View style={style.searchStyle}>

            <View style={style.title}>
                <Text style={style.textTitle}>aaaaaa</Text>


            </View>

        </View>
    )
}

const style = StyleSheet.create({
    textTitle: { fontSize: fonts.fs_16, ...family.Montserrat_SemiBold, color: "#171725" },
    searchStyle: { height: "50%", width: '90%', backgroundColor: 'white', borderRadius: 15, ...styles.shadow },
    title: { ...styles.row, marginTop: 20, marginLeft: 10 }
})

export default GraphBackground