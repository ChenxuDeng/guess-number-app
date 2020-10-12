import React from 'react';
import {View,StyleSheet,Text} from "react-native";

function Header(props) {
    const styles=StyleSheet.create({
        header:{
            height:90,
            padding:36,
            width:'100%',
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#f7287b'
        },
        headerTitle:{
            color:'black',
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