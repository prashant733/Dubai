

import React from 'react'
import { Modal, View, StyleSheet, Image } from 'react-native'

import { Icons } from '@grainary/common'
import { colors, family, fonts, metrics, styles } from '@grainary/themes'

const ActivityIndicator = props => {
  return (
    <React.Fragment>
      {props?.isLoading ? <View style={style.container1}>
        <Image style={{ height: 100, width: 100,  }} source={Icons.grocery} />
      </View> : null}
    </React.Fragment>
  )
}

const style = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.modalColor, },
  container1: { flex: 1, position: 'absolute', top: 0,borderRadius:10, bottom: 0, left: 0, right: 0, justifyContent: 'center', alignItems: 'center', zIndex: 999999 }
})

export default ActivityIndicator