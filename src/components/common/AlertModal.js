import React, { useState, useEffect } from 'react'
import { View, Text, Modal, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native'
import { colors, family, fonts, metrics, styles } from '@grainary/themes'
import { Icons } from '@grainary/common'


const AlertModal = props => {
    const { height, width } = Dimensions.get('screen')
    const STYLE = StyleSheet.create({
        centeredView: { flex: 1, backgroundColor: colors.buttonBgColor, justifyContent: "center", alignItems: "center" },
        modalView: { borderWidth: 5, borderColor: colors.themeColor, alignItems: 'center', justifyContent: 'center', backgroundColor: "white", borderRadius: 20, height: height > 800 ? 500 : 350, width: '90%', alignItems: "center", shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 4, elevation: 5 },
    })

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.modalDisplay}>
            <View style={STYLE.centeredView}>
                <View style={STYLE.modalView}>
                    <Image style={{ height: 55, width: 60, position: 'relative', marginBottom:20 }} resizeMode={'contain'} source={Icons.check} />
                    <Text style={[family.Montserrat_Bold, { fontSize: fonts.fs_24, color: colors.black, fontWeight: '500', textAlign: 'center', marginTop: 0 }]} numberOfLines={2}>{props.title}</Text>
                    <View style={{position:'absolute',bottom:30,width:"100%",alignItems:'center'}}>
                    <TouchableOpacity style={{ height: 50, width: '80%', borderWidth: 2, borderColor: colors.buttonBgColor, borderRadius: 25, alignItems: 'center', justifyContent: 'center', }}
                        onPress={() => props.onpress()}>
                        <Text style={[family.Montserrat_Bold, { fontSize: fonts.fs_16, color: colors.buttonBgColor, fontWeight: '700', textAlign: 'center', width: 250 }]}>{props.subTitle}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.hide()} style={[styles.selfCenter,{marginTop:25}]}>
                        <Text style={[family.Montserrat_Medium, { fontSize: fonts.fs_14,color:colors.themeColor,textDecorationLine: 'underline',}]}>{props.back}</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}
export default AlertModal