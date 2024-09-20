import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    Alert, Platform, Linking, PermissionsAndroid,FlatList,
    Dimensions
  } from 'react-native';
  import React, { Component, useEffect,useState } from 'react';
  import Icons from '../components/common/Icons';
  import colors from '../themes/colors';
import { fonts } from '../themes';
import Header from '../components/common/Header';
import SQLite from 'react-native-sqlite-storage';
SQLite.enablePromise(true)
//   import { Icons, Button } from '@grainary/common';
//   import { colors, family, fonts, metrics, styles } from '@grainary/themes';
const { width, height } = Dimensions.get('screen')
  export default function UserList(props) {
    const [db, setDb] = useState(null);
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      const initDB = async () => {
        const database = await SQLite.openDatabase({ name: 'mydb.db', location: 'default' });
        setDb(database);
        await getUsers(database);
        // loadUsers(database);
      };
  
      initDB();
      return () => {
        if (db) {
        //   closeDB(db);
        }
      };
    }, []);
  
    const closeDB = async (db) => {
      await db.close();
    };
    const getUsers = async (db) => {
        const users = [];
        const results = await db.executeSql('SELECT * FROM users');
        console.log('rrrrrr---',results);
        
        results.forEach(result => {
          for (let i = 0; i < result.rows.length; i++) {
            users.push(result.rows.item(i));
          }
        });
      console.log("djjdjddj====",users);
      setUsers(users)
        // return users;
      };

    // const users=[{id:1,name:'Prashant',email:'pa@gmail.com',month:'september'},{id:2,name:'pia',email:'pa@gmail.com',month:'september'},{id:3,name:'ria',email:'pa@gmail.com',month:'september'}]
    return (
      <ImageBackground style={style.container} source={Icons.splash}>
        <View style={style.maincontainer}>
          <Text style={style.getStart1}>{`User List`}</Text>
  
          <FlatList
        data={users}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({ item }) => (
            <View  style={[style.tabView]}>
            <View style={style.borderView}
            >
              <View style={style.side}>
                <View style={style.side1}>
                  <Text style={style.time}>{item.name}</Text>
                  <Text style={style.test}>{item.email}</Text>
                  <Text style={style.text}>{item.month}</Text>
                </View>
                
              </View>
            </View>
          </View>
    
        )}
      />
        </View>
      </ImageBackground>
    );
  }
  
  const style = StyleSheet.create({
    container: { flex:1 },
    getStart: {
    //   ...family.Montserrat_Bold,
    //   fontSize: fonts.fs_28,
      fontWeight: Platform.OS === "ios" ? 'bold' : null,
      lineHeight: 30,
      marginLeft: 20,
      marginTop: 50,
    //   color: colors.white,
    },
    getStart1: {
      fontSize: fonts.fs_18,
      textAlign: 'center',
      fontWeight: Platform.OS === "ios" ? 'bold' : null,
      color: colors.white,
    },
    business: {
      alignSelf: 'center',
      marginTop: 20,
      height: 48,
      width: '65%',
      backgroundColor: '#FC9B13',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 14,
    },
    maincontainer: {
        flex:1,

    //   height: '25%',
    //   width: '100%',
    //   position: 'absolute',
    //   bottom: 0
    },
    user: {
      alignSelf: 'center',
      marginTop: '3%'
    },
    incident: {
        fontSize: 35,
        fontFamily: 'Poppins-Light',
        fontWeight: '400',
        marginLeft: 15,
        marginTop: 30,
        opacity: 0.8
      },
      square: {
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 4,
        height: 150,
        shadowColor: "black",
        width: 150
      },
      side: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      side1: {
        justifyContent: 'space-around',
        marginLeft: 10,
        width: '80%'},

      time: {
        fontSize: 16,
        marginTop: 15,
        color: colors.black,
        fontWeight: 'bold',
        fontFamily: 'Roboto-Bold',
      },
      test: {
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        color: colors.black,
      },
      text: {
        color: colors.black,
        fontSize: 15,
        marginBottom: 15,
        fontFamily: 'Poppins-SemiBold',
      },
      side2: { marginRight: 5, justifyContent: 'space-around', alignItems: 'center', width: '20%' },
      more: { height: 6.2, width: 30, marginLeft: 5 },
      more1: { height: 30, width: 35, right:3 },
      container2:
      {
        height: "auto",
        width: width - 40,
        backgroundColor: colors.white,
        marginTop: 30,
        marginBottom: 10,
        borderRadius: 17,
        borderWidth: 0.2,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
    
        elevation: 8,
      },
      days: {
        fontSize: 16,
        color: colors.containerTitleColor,
        fontWeight: "bold",
      },
      subPlanView: {
        // borderWidth: 2,
        //borderColor: 'red',
        // alignItems: 'flex-start',
        // height: scaleHeight(100),
        justifyContent: 'space-around',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10
        // margin: scaleHeight(5)
      },
      subscriptionType: {
        fontSize: 30,
        fontWeight: '300',
      },
      timePeriod: {
        fontSize: 14,
        fontWeight: 'bold',
      },
      tabView: {
        height: "auto",
        width: width - 40,
        alignSelf: 'center',
        backgroundColor: colors.white,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 17,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
      },
      borderView: {
        borderWidth: 0.2,
        borderColor: colors.white,
        borderRadius: 10
      },
    
  });
  