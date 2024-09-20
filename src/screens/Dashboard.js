import {
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    Alert, Platform, Linking, PermissionsAndroid,
    Dimensions
} from 'react-native';
import React, { Component, useEffect,useState } from 'react';
import Icons from '../components/common/Icons';
import colors from '../themes/colors';
import { fonts } from '../themes';
import Header from '../components/common/Header';
import { BarChart } from 'react-native-chart-kit';
import SQLite from 'react-native-sqlite-storage';
SQLite.enablePromise(true)
//   import { Icons, Button } from '@grainary/common';
//   import { colors, family, fonts, metrics, styles } from '@grainary/themes';

export default function Dashboard(props) {

    const [db, setDb] = useState(null);
    const [users, setUsers] = useState([]);
  const[monthlydata,setMonthlydata]=useState([])
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
          closeDB(db);
        }
      };
    }, []);
  
    const closeDB = async (db) => {
      await db.close();
    };
    const getUsers = async (db) => {
        const users = [];
        const results = await db.executeSql('SELECT * FROM users');
        results.forEach(result => {
          for (let i = 0; i < result.rows.length; i++) {
            console.log("dddd-dd--",result.rows.item(i));
            users.push(result.rows.item(i));
          }
        });
    
      const monthlyData = Array(12).fill(0); 
users.forEach((user) => {
        const month = new Date(user.month).getMonth(); 
        monthlyData[month] += 1;
      });
       setMonthlydata(monthlyData)
      setUsers(users)
      };

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                data: monthlydata
            }
        ]
    };

    const chartConfig = {
        backgroundGradientFrom: '#fff',
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: '#fff',
        backgroundGradientToOpacity: 0.5,
        fillShadowGradientOpacity: 1,
        color: (opacity = 1) => `#023047`,
        labelColor: (opacity = 1) => `#333`,
        strokeWidth: 2,
        barPercentage: 0.5,
        useShadowColorFromDataset: false,
        decimalPlaces: 0,
    };
    
    return (
        <ImageBackground style={style.container} source={Icons.splash}>
            <View style={style.maincontainer}>
                <Text style={style.getStart1}>{`Monthly User Data`}</Text>
                <BarChart
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                    data={data}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    //   yAxisLabel="$"
                    chartConfig={chartConfig}
                    showBarTops={true}
                />

            </View>
        </ImageBackground>
    );
}

const style = StyleSheet.create({
    container: { flex: 1 },
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
        //   fontSize: fonts.fs_18,
        textAlign: 'center',
        fontWeight: Platform.OS === "ios" ? 'bold' : null,
        //   color: colors.white,
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
        alignSelf: 'center',
        marginTop: 20
    },
    user: {
        alignSelf: 'center',
        marginTop: '3%'
    },
});
