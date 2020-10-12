import React from 'react';
import {View, TouchableOpacity, Text} from "react-native";
import color from "../../color/color";

function MainButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{backgroundColor:color.primary,paddingVertical:10,borderRadius:6,alignItems:'center',justifyContent:'center',...props.style}}>
                <Text style={{color:'white'}}>
                    {props.children}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default MainButton;