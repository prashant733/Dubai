import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { colors, family, fonts, metrics, styles } from '@grainary/themes'

const SectionTitle = props => {
    return (
        <View style={[styles.row, styles.spaceBetween, styles.selfCenter, { width: '90%', paddingBottom: 10 }]} >
            <Text style={[family.sofia_bold, style.title, { fontSize: props.sectionTitle == "Match" ? fonts.fs_22 : fonts.fs_28 }]}>{props.sectionTitle == "Match" ? "Getting to know you" : props.sectionTitle == "Tradein" ? "Trade-in" : props.sectionTitle}</Text>
            <View style={{ height: 56, width: 100, borderRadius: 16, backgroundColor: colors.bgColor, justifyContent: 'center' }}>
                <Text style={[family.sofia_bold, style.matchLabel]}>{'Matches'}</Text>
                <Text style={[family.sofia_bold, style.randomLabel]}>{props.randomNumber}</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    title: { paddingBottom: 20, paddingTop: 10, paddingRight: 18, color: colors.black, fontSize: fonts.fs_22 },
    matchLabel: { paddingLeft: 20, color: colors.subTitleColor, fontSize: fonts.fs_12, textAlign: 'left', lineHeight: fonts.fs_16, fontStyle: 'normal' },
    randomLabel: { paddingLeft: 20, color: colors.brand800, fontSize: fonts.fs_20, lineHeight: 28, textAlign: 'left', textDecorationLine: 'underline' },
})

export default SectionTitle