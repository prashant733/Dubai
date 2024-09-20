import React, { Fragment } from 'react'
import { StyleSheet, Modal, View, Text, Dimensions, Image, TouchableOpacity } from 'react-native'

import { Icons } from '@grainary/common'
import { t } from '@grainary/containers'
import { colors, family, fonts, metrics, styles } from '@grainary/themes'

const { height, width } = Dimensions.get('screen')

const CustomModal = props => (
    <Fragment>
        <Modal transparent={true} {...props}>
            <View style={[style.container, { backgroundColor: colors.modalColor }]} >
                <View style={style.container}>
                    <View style={style.subContainer}>
                        <TouchableOpacity onPress={props.onRequestClose} activeOpacity={0.7} style={style.closeIcon} >
                            {/* <Image style={style.imageStyle} source={Icons.cross} /> */}
                        </TouchableOpacity>
                        <View style={style.viewContainer} >
                            <View style={style.messsageView} >
                                {/* <Image style={style.messageStyle} source={Icons.message} /> */}
                            </View>
                            <View style={{ marginTop: 40 }}>
                                <Text style={[family.sofia_bold, { ...styles.selfCenter, color: colors.textColor, fontSize: fonts.fs_15 }]}>{t('text_take')}</Text>
                                <Text style={[family.sofia_bold, { ...styles.selfCenter, color: colors.textColor, fontSize: fonts.fs_15 }]}>{t('text_tofigure')}</Text>
                            </View>
                            <TouchableOpacity onPress={props.onClick} activeOpacity={0.7} style={{ ...styles.center, marginTop: 40, height: 50, width: 180, backgroundColor: colors.themeColor, borderRadius: 10 }}>
                                <Text style={[family.sofia_bold, { ...styles.selfCenter, color: colors.white, fontSize: fonts.fs_15 }]}>{t('text_continue')}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    </Fragment>
)

const style = StyleSheet.create({
    container: { ...styles.container, ...styles.center, },
    subContainer: { ...styles.center, ...styles.shadow, borderRadius: 4, paddingBottom: 35, backgroundColor: colors.white, },
    closeIcon: { alignItems: 'flex-end', width: width - 60, height: 35, marginRight: 20, marginTop: 20 },
    messsageView: { ...styles.center, height: 120, width: 120, borderRadius: 60, backgroundColor: colors.primaryColor, marginLeft: 10, marginRight: 10 },
    viewContainer: { height: 'auto', ...styles.center },
    imageStyle: { height: 25, width: 25 },
    messageStyle: { height: 37, width: 37, ...styles.selfCenter }
})

export default CustomModal