import React from 'react';
import {StyleSheet,TextInput} from "react-native";

function Input(props) {
    const styles=StyleSheet.create({
        textInput:{
            height:30,
            borderBottomColor:'grey',
            borderBottomWidth:1
        }
    })

    return (
        <TextInput {...props} style={{...styles.textInput,...props.style}}/>
    );
}

export default Input;