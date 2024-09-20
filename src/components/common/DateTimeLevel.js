import React, { useState,useEffect } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text } from 'react-native'
import { Icons } from '@grainary/common'
import { colors, family, fonts, styles } from '@grainary/themes'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

const DateTimeLevel = props => {
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

// console.log("isDatePickerVisible---",true);
useEffect(()=>{
    setDate(props.date)
},[])

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        hideDatePicker();
        console.log("A date has been picked: ", date);
        setDate((moment(date).format('YYYY-MM-DD')))
        setTime((moment(date).format('LT')))
        props.selectedDate(moment(date).format('YYYY-MM-DD'))
        // hideDatePicker();
    };


    return (
        <TouchableOpacity onPress={() => { setDatePickerVisibility(true)}} style={[style.inputContainer, props.style]}>
            {/* <TouchableOpacity style={style.searchButton} activeOpacity={0.6} onPress={() => setDatePickerVisibility(true)} >
                <Image style={[style.searchStyle, { tintColor: props.tintColor }]} source={props.image} />
            </TouchableOpacity> */}
            <View style={{height:50, width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
            <TextInput
                value={date!=''?date:props.date}
                editable={false}
                placeholder={props.placeholder}
                placeholderTextColor={colors.black}
                style={style.inputContainerStyle}
                autoCapitalize="none"
            />
             <View style={style.searchButton} activeOpacity={0.6}
            //   onPress={() => { setDatePickerVisibility(true)}}
              >
                 <Text style={{color:colors.black,marginRight:10,opacity:0.5}}>{'DOB'}</Text>
            </View>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                minimumDate={props.minimumDate}
                maximumDate={new Date()}
                mode={props.type == 'date' ? "date" : "time"}
                onConfirm={(date) => handleConfirm(date)}
                date={new Date()}
                onCancel={hideDatePicker}
            />
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    inputContainer: { ...styles.selfCenter,  height: 50, width: '100%', borderRadius: 15, borderWidth: 1, borderColor: "#C8803A",backgroundColor:colors.white },
    searchButton: { height: '100%', width: 50, justifyContent: 'center', alignItems: 'center' },
    inputContainerStyle: { flex: 1, padding: 0, fontSize: fonts.fs_14, color: colors.black,marginLeft:10 },
    searchStyle: { height: 20, width: 20,resizeMode:'contain' },
    levelTitle: { position: 'absolute', top: -10, left: 15, backgroundColor: colors.textBgColor, ...family.Montserrat_Bold, fontSize: fonts.fs_13, fontWeight: 'bold', color: colors.buttonBgColor }
})

export default DateTimeLevel