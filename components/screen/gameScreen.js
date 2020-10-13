import React,{useState,useRef,useEffect} from 'react';
import {View, StyleSheet, Text, Alert, ScrollView,Dimensions} from "react-native";
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
            paddingHorizontal:20,
            marginTop:Dimensions.get('window').width>350?20:10
        },
        screen:{
            alignItems:'center',
            marginTop:20,
            flex:1,
            width:'100%'
        }
    })

    const initialNumber=numberGenerator(1,100,props.userInput)
    const [guess,setGuess]=useState(initialNumber)
    const [rounds,setRounds]=useState([initialNumber])
    const [height,setHeight]=useState(Dimensions.get('window').height)

    const currentMax=useRef(100)
    const currentMin=useRef(1)

    useEffect(()=>{
        const resetHeightHandler=()=>{
            setHeight(Dimensions.get('window').height)
        }
        Dimensions.addEventListener('change',resetHeightHandler)
        return ()=>{
            Dimensions.removeEventListener('change',resetHeightHandler)
        }
    })

    useEffect(()=>{
        if(guess===userInput){
            gameOverHandler(rounds.length)
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
        setRounds(rounds=>[nextNumber,...rounds])
    }

    if(Dimensions.get('window').height<500){
        return <View style={styles.screen}>
            <Text style={{fontFamily:'open-sans-bold',fontSize:18}}>
                Computer's guess
            </Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{width:66,marginRight:10}}>
                    <MainButton onPress={()=>newNumberHandler('higher')}>
                        <Ionicons name={'md-add'} size={24}/>
                    </MainButton>
                </View>
                <Number>
                    {guess}
                </Number>
                <View style={{width:66,marginLeft:10}}>
                    <MainButton onPress={()=>newNumberHandler('lower')}>
                        <Ionicons name={'md-remove'} size={24}/>
                    </MainButton>
                </View>
            </View>
            <ScrollView style={{width:'60%',marginBottom:10}} contentContainerStyle={{justifyContent:'flex-end',flexGrow:1}}>
                {rounds.map((round,index)=>{
                    return <View style={{height:40,borderWidth:1,borderColor:'black',flexDirection:'row',marginTop:10,alignItems:'center',paddingHorizontal:10}}>
                        <Text>
                            #{rounds.length-index}
                        </Text>
                        <Text style={{marginLeft:'auto'}}>
                            {round}
                        </Text>
                    </View>
                })}
            </ScrollView>
        </View>
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
                <ScrollView style={{width:'60%',marginBottom:10}} contentContainerStyle={{justifyContent:'flex-end',flexGrow:1}}>
                    {rounds.map((round,index)=>{
                        return <View style={{height:40,borderWidth:1,borderColor:'black',flexDirection:'row',marginTop:10,alignItems:'center',paddingHorizontal:10}}>
                            <Text>
                                #{rounds.length-index}
                            </Text>
                            <Text style={{marginLeft:'auto'}}>
                                {round}
                            </Text>
                        </View>
                    })}
                </ScrollView>
        </View>
    );
}

export default GameScreen;