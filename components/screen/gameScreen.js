import React,{useState,useRef,useEffect} from 'react';
import {View, StyleSheet, Text, Button, Alert} from "react-native";
import Number from "../number/number";
import Card from "../card/card";
import {Ionicons} from '@expo/vector-icons'
import MainButton from "../mainButton/mainButton";

const numberGenerator=(min,max,exclude)=>{
    min=Math.ceil(min)
    max=Math.floor(max)
    const randomNumber=Math.floor(Math.random() * (max-min)+min)
    if(randomNumber===exclude){
        return numberGenerator(min,max,exclude)
    }else {
        return randomNumber
    }
}

function GameScreen(props) {
    const {userInput,gameOverHandler}=props

    const styles=StyleSheet.create({
        buttonContainer:{
            flexDirection:'row',
            backgroundColor:'white',
            alignItems:'center',
            justifyContent:'center',
            height:'30%',
            paddingHorizontal:20
        },
        screen:{
            alignItems:'center',
            marginTop:20
        }
    })

    const [guess,setGuess]=useState(numberGenerator(1,100,props.userInput))
    const [rounds,setRounds]=useState(0)

    const currentMax=useRef(100)
    const currentMin=useRef(1)

    useEffect(()=>{
        if(guess===userInput){
            gameOverHandler(rounds)
        }
    },[userInput,gameOverHandler,guess])

    const newNumberHandler=(direction)=>{
        if(direction==='higher' && guess>props.userInput || direction==='lower' && guess<props.userInput){
            Alert.alert('Invalid','stop cheating!',[{text:'Sorry',style:'cancel'}])
            return
        }
        if(direction==='lower'){
            currentMax.current=guess
        }else {
            currentMin.current=guess
        }
        const nextNumber=numberGenerator(currentMin.current,currentMax.current,guess)
        setGuess(nextNumber)
        setRounds(rounds=>rounds+1)
    }

    return (
        <View style={styles.screen}>
            <Text style={{fontFamily:'open-sans-bold',fontSize:18}}>
                Computer's guess
            </Text>
            <Number>
                {guess}
            </Number>
            <Card style={styles.buttonContainer}>
                <View style={{width:66}}>
                    <MainButton onPress={()=>newNumberHandler('higher')}>
                        <Ionicons name={'md-add'} size={24}/>
                    </MainButton>
                </View>
                <View style={{width:66,marginLeft:20}}>
                    <MainButton onPress={()=>newNumberHandler('lower')}>
                        <Ionicons name={'md-remove'} size={24}/>
                    </MainButton>
                </View>
            </Card>
        </View>
    );
}

export default GameScreen;