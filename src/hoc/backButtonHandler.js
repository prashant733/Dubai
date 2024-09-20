import React from 'react'
import { BackHandler } from 'react-native'

const backButtonHandler = (Component, navigateToScreen) => {
  return class CompoundComponent extends React.Component {
    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
    }

    componentWillUnmount() {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        this.handleBackPress
      )
    }

    handleBackPress = () => {
      if (navigateToScreen) {
        this.props.navigation.navigate(navigateToScreen)
      }
       else {
       
        BackHandler.exitApp()
      }
    }

    render() {
      return <Component {...this.props} />
    }
  }
}

export default backButtonHandler