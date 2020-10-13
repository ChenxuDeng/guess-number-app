import React from 'react';
import {View,StyleSheet,Text,Platform} from "react-native";
import color from "../../color/color";

function Header(props) {
    const styles=StyleSheet.create({
        header:{
            height:90,
            padding:30,
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:Platform.OS==='ios'?'white':'#f7287b',
            borderBottomColor:Platform.OS==='ios'?'black':null,
            borderBottomWidth:Platform.OS==='ios'?1:0
        },
        headerTitle:{
            color:Platform.OS==='ios'?color.primary:'black',
            fontSize:18,
            fontFamily:'open-sans-bold'
        }
    })

    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>
                {props.title}
            </Text>
        </View>
    );
}

export default Header;