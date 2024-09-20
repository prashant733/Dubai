import React, { Component, useState } from 'react'
import { StyleSheet, View, StatusBar, FlatList, Platform, Text, TouchableOpacity, Image, Dimensions, Modal, Alert } from 'react-native'
// import { colors } from '../../constants/colors';
// import Images from '../../assets/images';
// import { useDispatch } from 'react-redux';
// import { getCountryFlag } from '../../redux/action/getCountryFlag'

import { Icons, Button, InputText, DateTimeLevel, ErrorView, GoogleAutocomplete, ActivityIndicator, Header,DropdownField } from '@grainary/common';
import { colors, family, fonts, metrics } from '@grainary/themes';
const { width, height } = Dimensions.get("screen")

const MyDropDown = (props) => {
    const [modalVisible, setmodalVisible] = useState(false)
    const [dropDownText, setdropDownText] = useState(props.title)
    const [type, settype] = useState(null)

    const selectId = (item) => {
        props.onSelect(item)

        props.close()
        // setdropDownText(item.title)
    }

    const categoryList = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.itemTouch} onPress={() => selectId(item)}>
                <View style={{ flexDirection: 'row', width: item?.title ? '50%' : '82%', alignSelf: 'center', alignItems: 'center', marginBottom: 7 ,  paddingRight:10}}>
                   
                    <Text style={styles.itemTxt}>{item?.name ? item?.name : item?.title}</Text>
                </View>
                <View style={styles.divider} />
            </TouchableOpacity>
        )
    }

    const selectItem = () => {
        setmodalVisible(props.editable)
    }
    return (
        <View style={[styles.dropDownView, props.dropView]}>
            {/* <TouchableOpacity disabled={!props.editable} style={[styles.downStyle]}
                onPress={() => selectItem()}>
                <View style={[styles.secondaryDropView, { marginRight: props.query ? 0 : 15 }]}>
                    <Text style={[styles.dropText, { alignSelf: props.query ? "center" : 'flex-start', width: props.query ? 'auto' : "100%", }]} numberOfLines={1}>
                        {props.title}
                    </Text>
                </View>
                <View style={styles.imgView}>
                    <Image style={styles.imgDropDown} source={Icons.lower} />
                </View>
            </TouchableOpacity> */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={props.modalVisible}>
                <View style={styles.modalWholeScreen}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            onPress={() => props.close()}
                            style={styles.closeTouch} >
                            <Image style={styles.closeImg} source={Icons.cross} />
                        </TouchableOpacity>
                        <FlatList
                            style={styles.flatList}
                            showsVerticalScrollIndicator={false}
                            data={props.data}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={categoryList}
                        />
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    downStyle: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        top: 5,
    },
    dropDownView: {
        width: '100%',
        alignSelf: 'center',
    },
    itemTouch: {
        borderRadius: 5,
        justifyContent: 'center',
        // marginTop: 5,
        height: 50,
        width: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        // flexDirection: 'row'
    },
    divider: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#D3D3D3',
        width: '85%',
        height: 0.8,
    },
    itemTxt: {
        fontFamily:'Verlag-Book',
        alignSelf: 'center',
        fontSize: 16,
        color: colors.black,
        marginLeft: 10,
        // fontFamily: 'avenir_lt_std_65_medium'
        // backgroundColor:'pink'
    },
    secondaryDropView: { flex: 1, },
    dropText: {
        alignSelf: 'center', fontSize: 14,
        left: 5, letterSpacing: 1, color: colors.black,
        // fontFamily: 'avenir_lt_std_65_medium'
    },
    imgView: { height: '100%', width: 10, justifyContent: 'center', alignItems: 'center', right: 5, },
    imgDropDown: { width: 15, height: 15, tintColor: colors.black, right: 2 },
    modalWholeScreen: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    modalView: { height: '60%', width: '90%', backgroundColor: colors.white, alignItems: 'center', borderRadius: 15 },
    closeTouch: { position: 'absolute', zIndex: 9999, right: 10, top: 15, },
    closeImg: { height: 25, width: 25 },
    flatList: { width: '100%', marginTop: 35, bottom: 0 },
    modalLine: { width: '80%', alignSelf: 'center', borderWidth: 0.8, borderBottomColor: '#D3D3D3', },
})
export default MyDropDown
