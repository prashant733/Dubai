import React, { useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text, FlatList, Switch, Platform } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import { Icons, DateTimeLevel } from '@grainary/common'
import { colors, family, fonts, metrics, styles } from '@grainary/themes'
// import AsyncStorage from '@react-native-community/async-storage';
// const RowItem = props => {

class RowItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: null,
            selectedIndex: null,
            List: [
                {
                    days: 'sunday',
                    key: 'SUN',
                    open: false,
                    open_time: '',
                    close_time: '',

                },
                {
                    days: 'monday',
                    key: 'MON',
                    open: false,
                    open_time: '',
                    close_time: '',

                },
                {
                    days: 'tuesday',
                    key: "TUE",
                    open: false,
                    open_time: '',
                    close_time: '',

                },
                {
                    days: 'wednesday',
                    key: "WED",
                    open: false,
                    open_time: '',
                    close_time: '',

                },
                {
                    days: 'thursday',
                    key: "THU",
                    open: false,
                    open_time: '',
                    close_time: '',

                },
                {
                    days: 'friday',
                    key: 'FRI',
                    open: false,
                    open_time: '',
                    close_time: '',

                },
                {
                    days: 'saturday',
                    key: "SAT",
                    open: false,
                    open_time: '',
                    close_time: '',

                }],
            List1: [
                {
                    days: 'sunday',
                    key: 'SUN',
                    open: false,
                    open_time: '',
                    close_time: '',

                },
                {
                    days: 'monday',
                    key: 'MON',
                    open: false,
                    open_time: '',
                    close_time: '',

                },
                {
                    days: 'tuesday',
                    key: "TUE",
                    open: false,
                    open_time: '',
                    close_time: '',

                },
                {
                    days: 'wednesday',
                    key: "WED",
                    open: false,
                    open_time: '',
                    close_time: '',

                },
                {
                    days: 'thursday',
                    key: "THU",
                    open: false,
                    open_time: '',
                    close_time: '',

                },
                {
                    days: 'friday',
                    key: 'FRI',
                    open: false,
                    open_time: '',
                    close_time: '',

                },
                {
                    days: 'saturday',
                    key: "SAT",
                    open: false,
                    open_time: '',
                    close_time: '',

                }],
            selectedDays: [],
            isDatePickerVisible: false,

        }
    }

    changeValue = (index) => {
        const tempArray = [...this.state.List]
        const tempArray1 = [...this.state.List1]

        if (tempArray[index].open) {
            tempArray[index].open = false
        } else {
            tempArray[index].open = true
        }
        if (tempArray1[index].open) {
            tempArray1[index].open = false
        } else {
            tempArray1[index].open = true
        }
        this.setState({
            List: tempArray,
            List1: tempArray1,

        })
    }

    componentDidUpdate(prevProps) {
        console.log(this.props, "props-------------", prevProps)
        // don't forget to compare props
        if (this.props.selectedHours !== prevProps.selectedHours) {

        }
    }

    componentDidMount() {
        console.log("ComponentDidMount", this.props.selectedHours)
        this.setState({
            selectedDays: this.props.selectedHours
        })
        this.showSelectedDay()
    }


    showSelectedDay = () => {
        const tempArray = [...this.state.List]
        const tempArray1 = [...this.state.List1]
        const selecteditems = this.props.selectedHours;
        for (var i = 0; i < tempArray.length; i++) {
            for (var j = 0; j < selecteditems.length; j++) {
                if (tempArray[i].days == selecteditems[j].days) {

                    const startDateTime = moment().format("MM/DD/YYYY") + " " + selecteditems[j].open_time
                    const endDateTime = moment().format("MM/DD/YYYY") + " " + selecteditems[j].close_time
                    const stillUtc1 = moment.utc(startDateTime).toDate();
                    const startDate = moment(stillUtc1).local().format("h:mm A")
                    const stillUtc2 = moment.utc(endDateTime).toDate();
                    const endDate = moment(stillUtc2).local().format("h:mm A")



                    // var stillUtc1 = moment.utc(new Date(selecteditems[j].open_time)).toDate();
                    // const startDate = moment(stillUtc1).local().format("h:mm A")
                    tempArray[i].open_time = startDate
                    tempArray[i].close_time = endDate
                    tempArray[i].open = selecteditems[j].open
                    tempArray1[i].open_time = selecteditems[j].open_time
                    tempArray1[i].close_time = selecteditems[j].close_time
                    tempArray1[i].open = selecteditems[j].open
                } else if (tempArray[i].key == selecteditems[j].days) {
                    const startDateTime = moment().format("MM/DD/YYYY") + " " + selecteditems[i].open_time
                    const endDateTime = moment().format("MM/DD/YYYY") + " " + selecteditems[i].close_time
                    const stillUtc1 = moment.utc(startDateTime).toDate();
                    const startDate = moment(stillUtc1).local().format("h:mm A")
                    const stillUtc2 = moment.utc(endDateTime).toDate();
                    const endDate = moment(stillUtc2).local().format("h:mm A")
                    // var stillUtc1 = moment.utc(new Date(selecteditems[i].open_time)).toDate();
                    // const startDate = moment(stillUtc1).local().format("h:mm A")
                    tempArray[i].open_time = startDate
                    tempArray[i].close_time = endDate
                    tempArray[i].open = selecteditems[j].open
                }
            }
        }

        this.setState({
            List: tempArray,
            List1: tempArray1
        }, () => console.log("selctedDate", this.state.List1))

    }


    hideDatePicker = () => {
        this.setState({
            isDatePickerVisible: false
        })
    };

    lists(tempArray) {
        var arr = []
        for (var i = 0; i < this.state.List1.length; i++) {
            if (this.state.List1[i].open_time != '') {
                console.log("%%%%%%%%%%%%%%%%%%%%%%%%-----------", this.state.List1[i])
                arr.push(this.state.List1[i])
                this.props.selectedlist(arr)
            }
        }
    }
    handleConfirm = (date) => {
        const tempArray = [...this.state.List]
        const tempArray1 = [...this.state.List1]

        if (this.state.type == 'startTime') {
            tempArray[this.state.selectedIndex].open_time = moment(date).format('LT')
            tempArray1[this.state.selectedIndex].open_time = date//moment(date).format('HH:mm:ss')

            // tempArray1[this.state.selectedIndex].open_time = moment.utc(moment(date)).format('HH:mm:ss')
            this.setState({
                List: tempArray,
                List1: tempArray1
            })

            this.lists(tempArray1)

        } else if (this.state.type == 'endTime') {
            tempArray[this.state.selectedIndex].close_time = moment(date).format('LT')
            tempArray1[this.state.selectedIndex].close_time = date//moment(date).format('HH:mm:ss')

            // tempArray1[this.state.selectedIndex].close_time = moment.utc(date).format('HH:mm:ss')
            console.log("tempArray-----0rkgndknd------", tempArray);
            this.setState({
                List: tempArray,
                List1: tempArray1
            })
            this.lists(tempArray1)
        }
        this.hideDatePicker();

        setTimeout(() => {
            console.log("******************SELECTED", this.state.List)
        }, 600);
    };

    selectDate = (type, index) => {
        this.setState({
            isDatePickerVisible: true,
            type: type,
            selectedIndex: index
        })
    }

    renderItems = ({ item, index }) => {
        return (
            <View>
                <View style={style.inputContainer}>
                    <View style={{ width: 40 }}>
                        <Text style={style.Day_Text}>{'Day'}</Text>
                        <Text style={style.Day}>{item.key}</Text>
                    </View>
                    <TouchableOpacity
                        disabled={!item.open}
                        style={{ height: 40, width: 70, }} onPress={() => this.selectDate('startTime', index)}>
                        <Text style={style.Day_Text}>{'Open time'}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[style.Day, { color: item.open ? colors.black : colors.red, width: 75 }]}>{item.open ? item.open_time ? item.open_time : '' : 'CLOSED'}</Text>
                            {item.open ? <Image style={{ height: 10, width: 10, resizeMode: 'contain', alignSelf: 'center', marginTop: 3, marginLeft: Platform.OS == "ios" ? -3 : 0 }} source={Icons.downArrow} /> : null}

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled={!item.open}
                        style={{ height: 40, width: 70, alignItems: 'center' }} onPress={() => this.selectDate('endTime', index)}>
                        <Text style={[style.Day_Text]}>{'Close time'}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[style.Day, { color: item.open ? colors.black : colors.red, width: 75 }]}>{item.open ? item.close_time ? item.close_time : '' : 'CLOSED'}</Text>
                            {item.open ? <Image style={{ height: 10, width: 10, resizeMode: 'contain', alignSelf: 'center', marginTop: 3, marginLeft: Platform.OS == "ios" ? -3 : 0 }} source={Icons.downArrow} /> : null}

                        </View>
                    </TouchableOpacity>
                    <View style={{ marginTop: 10 }}>
                        <TouchableOpacity onPress={() => this.changeValue(index)}>
                            <Image source={item.open ? Icons.openToggle : Icons.closeToggle} style={{ height: 35, width: 50, resizeMode: 'contain' }} />
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ borderWidth: 0.5, width: '100%', alignSelf: 'center', borderColor: colors.themeColor, marginTop: -3 }} />
            </View>
        )
    }
    render() {
        return (
            <View style={{ width: '100%' }}>
                <FlatList
                    contentContainerStyle={{ width: '100%', }}
                    data={this.state.List}
                    extraData={this.state}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItems}
                />
                <DateTimePickerModal
                    isVisible={this.state.isDatePickerVisible}
                    mode={"time"}
                    headerTextIOS="Pick a time"
                    onConfirm={(date) => this.handleConfirm(date)}
                    onCancel={this.hideDatePicker}
                />
            </View>
        )
    }
}


const style = StyleSheet.create({
    inputContainer: { ...styles.row, width: '100%', ...styles.spaceBetween, marginTop: 5 },
    Day_Text: { fontSize: fonts.fs_10, color: colors.themeColor },
    Day: { fontSize: fonts.fs_15, fontWeight: '300', marginTop: 5, },

    levelTitle: { position: 'absolute', top: -10, left: 15, backgroundColor: '#fff', ...family.Montserrat_Bold, fontSize: fonts.fs_12, fontWeight: 'bold', color: colors.buttonBgColor }
})

export default RowItem



