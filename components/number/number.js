import React from 'react';
import {View, StyleSheet, Text} from "react-native";
import color from "../../color/color";

function Number(props) {
    const styles=StyleSheet.create({
        border:{
            borderColor:color.secondary,
            borderWidth:2,
            borderRadius:10,
            paddingVertical:5,
            paddingHorizontal:10,
            marginVertical:10
        },
        text:{
            color:color.secondary,
            fontSize:22,
            fontFamily:'open-sans'
        }
    })

    return (
        <View style={styles.border}>
            <Text style={styles.text}>
                {props.children}
            </Text>
        </View>
    );
}

export default Number;