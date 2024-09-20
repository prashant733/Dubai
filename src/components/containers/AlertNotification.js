import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { styles } from '@grainary/themes'

const AlertNotification = ({ text, visible, containerStyle, textStyle }) => {
    return visible ? (
        <View style={[style.container, containerStyle]}>
            <Text style={[style.text, textStyle]}>{text}</Text>
        </View>
    ) : null
}

AlertNotification.defaultProps = {
    visible: false,
    text: '',
}

const style = StyleSheet.create({
    container: { ...styles.container, ...styles.center, backgroundColor: 'rgb(164, 223, 99)', padding: 10, marginBottom: 10, borderRadius: 5, },
    text: { fontSize: 13, },
})

export default AlertNotification
