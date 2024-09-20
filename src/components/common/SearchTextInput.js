import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  Text,
} from 'react-native';

import { Icons } from '@grainary/common';
import { colors, family, fonts, metrics, styles } from '@grainary/themes';

const SearchTextInput = props => {
  return (
    //   <View tyle={[style.inputContainer1, props.style1]}>
    <View style={[style.inputContainer, props.style]}>
      <TouchableOpacity
        style={style.searchButton}
        activeOpacity={0.6}
        onPress={props.onPressSearch}>
        <Image
          style={[style.searchStyle, { tintColor: props.tintColor }]}
          source={Icons.search}
        />
      </TouchableOpacity>
      <TextInput
        placeholder={'Search here...'}
        autoCorrect={false}
        value={props.value}
        placeholderTextColor={props.placeholderTextColor}
        style={style.inputContainerStyle}
        onChangeText={(res) => props.onChangeText(res)}
        autoCapitalize="none"
        {...props}
      />
      <TouchableOpacity
        style={style.lineButton}
        activeOpacity={0.6}
        onPress={props.onPressSearch}>
        <Image
          style={[style.lineStyle, { tintColor: props.tintColor }]}
          source={Icons.line}
        />
      </TouchableOpacity>

    </View>

  );
};

const style = StyleSheet.create({
  inputContainer: {
    ...styles.selfCenter,
    ...styles.row,
    height: Platform.OS == 'ios' ? 45 : 45,
    width: '90%',
    borderRadius: 10,
    backgroundColor: colors.lightwhite,
  },
  inputContainer1: {
    // ...styles.selfCenter,
    ...styles.row,
    height: Platform.OS == 'ios' ? 40 : 45,

    borderRadius: 20,
    borderWidth: 0.1,
    borderColor: colors.gray,
    backgroundColor: 'red',
    width: '90%'
  },
  searchButton: {
    height: '100%',
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainerStyle: {
    fontFamily: 'Poppins-Regular',
    flex: 1,
    fontSize: fonts.fs_14,
    color: colors.deviderColor,
  },
  searchStyle: { height: 22, width: 22 },
  lineStyle: { height: 22, width: 2 },
  lineButton: {
    height: '100%',
    width: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchTextInput;
