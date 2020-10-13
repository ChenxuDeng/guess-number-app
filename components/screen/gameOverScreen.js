import React,{useEffect,useState} from 'react';
import {Image, Text, View, Dimensions, ScrollView} from "react-native";
import color from "../../color/color";
import MainButton from "../mainButton/mainButton";

function GameOverScreen(props) {
    const [imgWidth,setImgWidth]=useState(Dimensions.get('window').width*0.7)

    useEffect(()=>{
        const resetWidthHandler=()=>{
            setImgWidth(Dimensions.get('window').width*0.7)
        }
        Dimensions.addEventListener('change',resetWidthHandler)
        return ()=>{
            Dimensions.removeEventListener('change',resetWidthHandler)
        }
    })

    return (
        <ScrollView style={{width:'100%'}} contentContainerStyle={{paddingVertical:20}}>
            <View style={{justifyContent:'center',alignItems:'center',width:'100%'}}>
                <Text style={{fontFamily:'open-sans-bold',fontSize:18}}>
                    The Game is Over!
                </Text>
                <View style={{width:imgWidth,height:imgWidth,borderRadius:imgWidth/2,borderColor:'black',borderWidth:2,overflow:'hidden',marginVertical:20}}>
                    <Image source={require('../../assets/success.png')} style={{width:imgWidth,height:imgWidth}}/>
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
        </ScrollView>
    );
}

export default GameOverScreen;