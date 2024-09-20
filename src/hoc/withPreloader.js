import React, { Fragment } from 'react'
import { StyleSheet, View, Modal, Image } from 'react-native'

import { Icons } from '@grainary/common'
import { colors, family, fonts, metrics, styles } from '@grainary/themes'

const withPreloader = (Component, dataActionName) => {
  return class CompoundComponent extends React.Component {
    state = {
      isLoading: false,
    }

    growData = (...params) => {
      setTimeout(() => {
        this.setState({ isLoading: true })
      }, 0)
      const result = this.props[dataActionName](...params)
      result.finally(() => {
        this.setState({ isLoading: false })
      })
      return result
    }

    render() {
      return (
        <Fragment>
          <Modal
            transparent={true}
            visible={this.state.isLoading}
            onRequestClose={() => { }}
          >
            <View style={style.preloaderContainer}>
              {/* <ActivityIndicator size="large" color={colors.blue} /> */}
              <Image style={{ height: 90, width: 90, alignSelf: 'center', backgroundColor: colors.modalColor }} source={Icons.CarLogo} />
            </View>
          </Modal>
          <Component
            {...this.props}
            growData={this.growData}
            isLoading={this.state.isLoading}
          />
        </Fragment>
      )
    }
  }
}

const PRELOADER_SIZE = 36

const style = StyleSheet.create({
  preloaderContainer: { justifyContent: 'center', top: metrics.deviceHeight * 0.5 - PRELOADER_SIZE / 2, zIndex: 1000, },
})

export default withPreloader