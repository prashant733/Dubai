import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Platform, FlatList, I18nManager, Image, TouchableOpacity, Modal, TextInput, Text, View } from 'react-native';
// import { Icons, Button, InputText, DateTimeLevel, ErrorView, GoogleAutocomplete, ActivityIndicator, Header, DropdownField } from '@grainary/common';

// import Images from '../../assets/images';
import CountryCode from '../CountryCode/index.json';
// import { colors, family, fonts, metrics,  } from '@grainary/themes';
import Icons from './Icons';
// import { COLORS } from '../../constants/Colors';
const HEADER_HEIGHT = Platform.OS === 'ios' ? 64 : 56;

const CountryModal = props => {
    const [searchText, setSearchText] = useState('')
    const [hideCountryFlag, sethideCountryFlag] = useState(null)
    const [arrayData, setArrayData] = useState(CountryCode)

    useEffect(() => {
        console.log('props at contry---', props);
        if (props?.visible == true) {
            setSearchText('')
            setArrayData(CountryCode)
        }
    }, [props.visible])

    const _renderListItems = (item, index) => {
        return (
            <>
                <TouchableOpacity key={index.toString()}
                    onPress={() => { props.selectCode('+' + item.callingCode),props.flag(item.flag) }}>
                    <View style={styles.listViewRowContainer}>
                        {hideCountryFlag ? null : (
                            <Image
                                source={{ uri: item.flag }}
                                style={styles.countryFlagContainer}
                            />
                        )}
                        <Text style={styles.modalCountryName}>{item.name.common}</Text>
                        <Text style={styles.modalCountryCode}>{'(+' + item.callingCode + ')'}</Text>
                    </View>
                    <View style={styles.divider} />
                </TouchableOpacity>
            </>
        )
    }
    const _searchFilterFunction = (text) => {
        setSearchText(text)
        if (/^-{0,1}\d+$/.test(searchText)) {
            var newData = CountryCode.filter(function (item) {
                const itemData = item.callingCode;
                const textData = searchText;
                return itemData.startsWith(textData);
            });
        } else {
            var newData = CountryCode.filter(function (item) {
                const itemData = item.name.common.toUpperCase();
                const textData = searchText.toUpperCase();
                return itemData.startsWith(textData);
            });
        }
        setArrayData([...newData])
        if (text.length === 0) {
            setArrayData(CountryCode)
        }
    }

    return (
        <Modal
            animationType={'slide'}
            visible={props.visible}
            onRequestClose={props.modalClose}>
            <SafeAreaView style={{ flex: 1 }}>
                <View elevation={10} style={styles.searchBarContainer}>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={props.onBack}>
                        <Image
                            resizeMode="contain"
                            style={styles.backImageStyle}
                            source={Icons.backArrow}
                        />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.modalSearchBox}
                        value={searchText}
                        onChangeText={(text) => _searchFilterFunction(text)}
                        placeholder={"Search Country"}
                        keyboardType="default"
                        returnKeyType={'done'}
                        blurOnSubmit={true}
                    />
                </View>
                <FlatList
                    overScrollMode="never"
                    style={{ paddingTop: 10 }}
                    keyboardShouldPersistTaps={'handled'}
                    showsVerticalScrollIndicator={false}
                    initialNumToRender={50}
                    data={arrayData}
                    numColumns={1}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => _renderListItems(item, index)}
                />
            </SafeAreaView>
        </Modal>
    )
}
export default CountryModal

const styles = StyleSheet.create({
    listViewRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingStart: 2,
        margin: 10,
    },
    countryFlagContainer: {
        width: 32,
        paddingRight: 2,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        marginLeft: 10,
    },
    modalCountryName: { fontSize: 18, color: "black", paddingHorizontal: 10 },
    modalCountryCode: { fontSize: 18, color: "black" },
    divider: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#D3D3D3',
        width: '95%',
        height: 0.8,
    },
    modalSearchBox: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        paddingLeft: 8,
        height: 40,
        marginLeft: 9,
        marginRight: 10,
        fontSize: 15,
        borderRadius: 8,
        backgroundColor: '#DEDEDE',
    },
    searchBarContainer: {
        height: HEADER_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    backImageStyle: {
        width: 25,
        height: 25,
        marginLeft: 9,
        alignSelf: 'center',
        transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
});