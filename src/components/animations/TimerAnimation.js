import React, { Component } from 'react'
import { Animated, View } from 'react-native'

class TimerAnimation extends Component {
    constructor(props) {
        super(props)
        this.delayValue = 500
        this.state = {
            scaleValue: new Animated.Value(0),
            animatedValue: new Animated.Value(0),
        }
    }

    componentDidMount() {
        const { animatedValue, scaleValue } = this.state
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 0,
            useNativeDriver: false,
            delay: 500
        }).start()
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: false,
            delay: 500
        }).start()
    }

    render() {
        const { animatedValue, scaleValue } = this.state
        this.delayValue = this.delayValue + 350
        const translateX = animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [this.delayValue, 0],
            extrapolate: 'extend'
        })
        return (
            <View style={{ height: 'auto' }}>
                {this.props.children}
            </View>
        )
    }
}

export default TimerAnimation