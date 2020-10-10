import React from 'react';
import {StyleSheet,View} from "react-native";

function Card(props) {
    const styles=StyleSheet.create({
        card:{
            shadowColor:'black',
            shadowOffset:{
                width:0,
                height:2
            },
            shadowRadius:6,
            elevation:5,
            borderRadius:5
        }
    })

    return (
        <View style={{...styles.card,...props.style}}>
            {props.children}
        </View>
    );
}

export default Card;