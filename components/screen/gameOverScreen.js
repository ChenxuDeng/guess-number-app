import React from 'react';
import {Button, Image, Text, View} from "react-native";
import color from "../../color/color";
import MainButton from "../mainButton/mainButton";

function GameOverScreen(props) {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontFamily:'open-sans-bold',fontSize:18}}>
                The Game is Over!
            </Text>
            <View style={{width:300,height:300,borderRadius:200,borderColor:'black',borderWidth:2,overflow:'hidden',marginVertical:20}}>
                <Image source={require('../../assets/success.png')} style={{width:300,height:300}}/>
            </View>
            <View style={{width:'80%',marginVertical:10}}>
                <Text style={{marginBottom:10,fontFamily:'open-sans',fontSize:20,textAlign:'center'}}>
                    Your phone need <Text style={{color:color.primary}}>{props.rounds}</Text> Rounds to guess the number <Text style={{color:color.primary}}>{props.number}</Text>.
                </Text>
            </View>
            <MainButton onPress={props.gameResetHandler} style={{paddingHorizontal:10}}>
                <Text style={{fontSize:18}}>
                    new game
                </Text>
            </MainButton>
        </View>
    );
}

export default GameOverScreen;