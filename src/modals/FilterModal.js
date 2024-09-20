import React, { Fragment, useState, useEffect } from 'react'
import { StyleSheet, Modal, View, Text, ScrollView, TouchableOpacity, Dimensions, Image, Platform } from 'react-native'

import { Icons } from '@grainary/common'
import { RangeSlider } from '@grainary/component'
import { colors, family, fonts, metrics, styles } from '@grainary/themes'

const { height, width } = Dimensions.get('screen')

var transmissionsArray = [
    {
        name: 'Automatic',
        focused: true
    },
    {
        name: 'Direct Drive',
        focused: false
    }
]

var fuelsArray = [
    {
        name: 'Petrol',
        focused: true
    },
    {
        name: 'Diesel',
        focused: false
    },
    {
        name: 'Electric',
        focused: false
    }
]

const colorsArray = [
    {
        name: 'All',
        code: '#0DBD45',
        focused: true
    },
    {
        name: 'Red',
        code: 'red',
        focused: false
    },
    {
        name: 'White',
        code: 'white',
        focused: false,
    },
    {
        name: 'Black',
        code: 'black',
        focused: false
    },
    {
        name: 'Blue',
        code: 'blue',
        focused: false
    }
]

const yearsArray = [
    {
        name: '2020',
        focused: false
    },
    {
        name: '2019',
        focused: true
    },
    {
        name: '2018',
        focused: false
    }
]

const FilterModal = props => {
    const [transmissionsData, setTransmissionsData] = useState(transmissionsArray)
    const [fuelsType, setFuelsType] = useState(fuelsArray)
    const [colorsData, setColorsData] = useState(colorsArray)
    const [yearsData, setYearsData] = useState(yearsArray)

    const onFocused = (item, id, type) => {
        if (type == 'transmission') {
            const updatedData = [...transmissionsData]
            var temp = updatedData.map((item, index) => index == id ? { ...item, "focused": true } : { ...item, "focused": false })
            setTransmissionsData(temp)
        }
        else if (type == 'fuel') {
            const updatedData = [...fuelsType]
            var temp = updatedData.map((item, index) => index == id ? { ...item, "focused": true } : { ...item, "focused": false })
            setFuelsType(temp)
        }
        else if (type == 'color') {
            const updatedData = [...colorsData]
            var temp = updatedData.map((item, index) => index == id ? { ...item, "focused": true } : { ...item, "focused": false })
            setColorsData(temp)
        }
        else if (type == 'year') {
            const updatedData = [...yearsData]
            var temp = updatedData.map((item, index) => index == id ? { ...item, "focused": true } : { ...item, "focused": false })
            setYearsData(temp)
        }
    }

    const renderPrimaryLabels = (label) => {
        return (
            <Text style={[family.sofia_bold, { paddingTop: 10, paddingRight: 18, paddingLeft: 20, color: colors.black, fontSize: fonts.fs_14 }]}>{label}</Text>
        )
    }

    const renderSecondryLabels = (label) => {
        return (
            <Text style={[family.sofia_bold, { paddingBottom: 10, paddingTop: 10, paddingRight: 18, paddingLeft: 20, color: colors.black, fontSize: fonts.fs_18 }]}>{label}</Text>
        )
    }

    const renderButton = (item, index, type) => {
        return (
            <TouchableOpacity activeOpacity={0.6} onPress={() => onFocused(item, index, type)} style={[styles.center, styles.selfCenter, styles.row, { height: 40, paddingLeft: 10, paddingRight: 10, backgroundColor: item.focused ? colors.itemTextColor : colors.primaryColor, borderRadius: 10, marginTop: 10, marginLeft: index == 0 ? 0 : 10 }]} >
                <Text style={[family.sofia_bold, { color: item.focused ? colors.white : colors.gray, fontSize: fonts.fs_14, textAlign: 'center' }]}>{item.name}</Text>
            </TouchableOpacity>
        )
    }

    const rederColorButton = (item, index, type) => {
        return (
            <View style={[styles.ItemCenter, { height: 40, width: 40, marginLeft: index == 0 ? 0 : 10 }]}>
                {index == 0 ?
                    <>
                        <TouchableOpacity activeOpacity={0.6} onPress={() => onFocused(item, index, type)} style={[styles.center, styles.ItemCenter, styles.selfCenter]}>
                            {/* <Image source={Icons.group1} /> */}
                        </TouchableOpacity>
                        <Text style={[family.sofia_bold, { color: item.focused ? colors.black : colors.gray, fontSize: fonts.fs_12, textAlign: 'center', marginTop: 10 }]}>{item.name}</Text>
                    </>
                    :
                    <>
                        <View style={[styles.center, styles.ItemCenter, { height: 35, width: 26 }]} >
                            <TouchableOpacity activeOpacity={0.6} onPress={() => onFocused(item, index, type)} style={{ height: 14, width: 14, borderRadius: 7, backgroundColor: item.code, borderWidth: .5, borderColor: colors.gray, marginBottom: 4 }} />
                        </View>
                        <Text style={[family.sofia_bold, { color: item.focused ? colors.black : colors.gray, fontSize: fonts.fs_12, textAlign: 'center', marginTop: 10 }]}>{item.name}</Text>
                    </>
                }
            </View>
        )
    }

    const renderTransmissions = () => {
        return (
            <View style={[styles.row, { height: 48, backgroundColor: colors.transparent, borderRadius: 10, marginLeft: 18, }]} >
                {transmissionsData.map((item, index) => {
                    return (
                        renderButton(item, index, 'transmission')
                    )
                })}
            </View>
        )
    }

    const renderFuelTypes = () => {
        return (
            <View style={[styles.row, { height: 48, backgroundColor: colors.transparent, borderRadius: 10, marginLeft: 18, }]} >
                {fuelsType.map((item, index) => {
                    return (
                        renderButton(item, index, 'fuel')
                    )
                })}
            </View>
        )
    }

    const renderYears = () => {
        return (
            <View style={[styles.row, { height: 48, backgroundColor: colors.transparent, borderRadius: 10, marginLeft: 18, }]} >
                {yearsData.map((item, index) => {
                    return (
                        renderButton(item, index, 'year')
                    )
                })}
            </View>
        )
    }

    const renderColors = () => {
        return (
            <View style={[styles.row, { height: 48, backgroundColor: colors.transparent, borderRadius: 10, marginLeft: 18, marginTop: 10 }]} >
                {colorsData.map((item, index) => {
                    return (
                        rederColorButton(item, index, 'color')
                    )
                })}
            </View>
        )
    }

    return (
        <Fragment>
            <Modal transparent={true} animationType="slide" {...props}>
                <View style={[style.container, { backgroundColor: colors.modalColor, borderTopLeftRadius: 25, borderTopRightRadius: 25 }]} >
                    <View style={style.subContainer}>
                        <TouchableOpacity onPress={props.onRequestClose} activeOpacity={0.7} style={style.closeIcon} >
                            <Image style={style.imageStyle} source={Icons.cross} />
                        </TouchableOpacity>
                        <ScrollView style={styles.container} >
                            <View style={style.viewContainer} >
                                {renderSecondryLabels('Distance from your Location')}
                                {renderPrimaryLabels('Miles')}
                            </View>
                            {/* <View style={{ height: 90 }} >
                                <RangeSlider usedInmodal />
                            </View> */}
                            {renderSecondryLabels('Transmission')}
                            {renderTransmissions()}
                            <View style={{ marginTop: 15 }}>
                                {renderSecondryLabels('Fuel Type')}
                                {renderFuelTypes()}
                            </View>
                            <View style={{ marginTop: 15 }}>
                                {renderSecondryLabels('Color')}
                                {renderColors()}
                            </View>
                            <View style={{ marginTop: 5 }}>
                                {renderSecondryLabels('Year')}
                                {renderYears()}
                            </View>
                            <View style={[style.viewContainer, { marginTop: 10 }]} >
                                {renderSecondryLabels('Miles Driver')}
                                {renderPrimaryLabels('Miles')}
                            </View>
                            {/* <View style={{ height: 90 }} >
                                <RangeSlider usedInmodal />
                            </View> */}
                            <View style={style.viewContainer} >
                                {renderSecondryLabels('Budget')}
                                {renderPrimaryLabels('Dollar')}
                            </View>
                            {/* <View style={{ height: 90 }} >
                                <RangeSlider usedInmodal />
                            </View> */}
                            <View style={[styles.row, styles.spaceBetween, styles.ItemCenter, { marginTop: 5, marginBottom: 15 }]}>
                                {renderSecondryLabels('Advance Filters')}
                                <TouchableOpacity activeOpacity={0.6} style={{ marginRight: 20 }} >
                                    <Image source={Icons.group} />
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </Fragment>
    )
}

const style = StyleSheet.create({
    container: { ...styles.container, position: 'absolute', bottom: 0, left: 0, right: 0 },
    subContainer: { ...styles.shadow, height: (height - height / 8.7), borderTopLeftRadius: 25, borderTopRightRadius: 25, backgroundColor: colors.white, },
    closeIcon: { alignItems: 'flex-end', width: width - 20, height: 35, marginTop: 15, zIndex: 999999 },
    messsageView: { ...styles.center, height: 120, width: 120, borderRadius: 60, backgroundColor: colors.primaryColor, marginLeft: 10, marginRight: 10 },
    viewContainer: { height: 'auto' },
    imageStyle: { height: 25, width: 25 },
    messageStyle: { height: 37, width: 37, ...styles.selfCenter }
})

export default FilterModal