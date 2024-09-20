import React, {Component} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import Icons from './Icons';
// import ICONS from '../Common/Icons';
export default class ActionButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
      style={{height: 60, width: 50, position: 'absolute', bottom:15, right: 20, justifyContent: 'center', alignItems: 'center'}}
        onPress={() => this.props.onPress()}>
        <Image style={{height: 55, width: 55}} source={Icons.plus} resizeMode='contain'/>
      </TouchableOpacity>
    );
  }
}
