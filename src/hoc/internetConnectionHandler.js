

import {
  Text,
  StyleSheet,
  View,
  Image,
  Modal, Dimensions,SafeAreaView,TouchableOpacity
} from 'react-native';
import React, { Component,  } from 'react';
import { Icons } from '@grainary/common';
import NetInfo from "@react-native-community/netinfo"
const { width, height } = Dimensions.get("screen")

const internetConnectionHandler = Component => {
  return class CompoundComponent extends React.Component {
    state = {
      isConnectionError: false,
    }

    componentDidMount() {
      this.checkInternet()
      
    }

    componentWillUnmount() {
      this.unsubscribe()
    }

    handleConnectivityChange = isConnected => {
      this.setState({ isConnectionError: !isConnected })
    }

    checkInternet() {
      this.unsubscribe = NetInfo.addEventListener(state => {
        this.handleConnectivityChange(state.isConnected)
      })
    }

    render() {
      return (
        <React.Fragment>
          <Modal
            transparent={true}
            visible={this.state.isConnectionError}
            onRequestClose={() => { }}
          >
            <SafeAreaView style={styles.messageContainer}>
              <View style={styles.parentView}>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                  <View style={styles.childView}>
                    <View style={{ flex: 0.6, width: '85%', alignSelf: 'center', justifyContent: 'space-between', marginTop: 35 }} >
                      <Image style={styles.logo} source={Icons.Logo} />
                      <View style={{ height: 'auto', width: '100%', justifyContent: 'center', alignSelf: 'center', marginTop: 30 }}>
                        <Text style={styles.fame}>{'No Internet Connection...'}</Text>
                      </View>
                      <Text style={styles.aapDiscription} numberOfLines={3}>{"Oops... It seems you can't connect to our network, check your internet connection."}</Text>
                    </View>
                    <View style={{ flex: 1, marginTop: 100, }} >
                      <Image style={{ alignSelf: 'center', width: width - 50 ,}} resizeMode='contain' source={Icons.Error} />
                    </View>
                    <View style={{ flex: .5, alignSelf: 'center', }}>
                      {/* <TouchableOpacity activeOpacity={0.6} onPress={() => this.checkInternet()}>
                        <View style={styles.button}>
                          <Text style={styles.buttonRegister}>{'Retry'}</Text>
                        </View>
                      </TouchableOpacity> */}
                    </View>
                  </View>
                </View>
              </View>
            </SafeAreaView>
          </Modal>
          <Component {...this.props} />
        </React.Fragment>
      )
    }
  }
}

const styles = StyleSheet.create({
  messageContainer: { backgroundColor: 'white', flex: 1, width: "100%", },
  alertContainer: { backgroundColor: "white", flex: 0, width: 220, height: 60, },
  parentView: { flex: 1, backgroundColor:"black" },
  childView: { flex: 1, width: width, alignSelf: 'center', },
  fame: { color:"black", fontSize: 22, fontWeight: '500', textAlign: 'left', },
  aapDiscription: { fontSize: 16, color: "white", lineHeight: 24, width: '100%', alignSelf: 'center', height: 85, marginTop: 30, },
  logo: { height: 100, width: 100, },
  button: { height: 65, width: 150, alignSelf: 'center', backgroundColor:'orange', tintColor: 'yellow' },
  buttonRegister: { fontSize: 20, color: "white", alignSelf: 'center', top: 20, },
})

export default internetConnectionHandler