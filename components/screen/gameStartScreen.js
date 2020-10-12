import React,{useState} from 'react';
import {View,StyleSheet,Text,Button,TouchableWithoutFeedback,Keyboard,Alert} from "react-native";
import Card from "../card/card";
import color from "../../color/color";
import Input from "../input/input";
import Number from "../number/number";
import MainButton from "../mainButton/mainButton";

function GameStartScreen(props) {
    const styles=StyleSheet.create({
        screen:{
            flex:1,
            padding:10,
            alignItems:'center'
        },
        title:{
            fontSize:20,
            marginVertical:10,
            fontFamily:'open-sans-bold'
        },
        buttonContainer:{
            flexDirection:'row',
            paddingHorizontal:50,
            width:'100%',
            justifyContent:'space-between'
        },
        gameArea:{
            width:'80%',
            alignItems:'center',
            backgroundColor:'white',
            paddingVertical:20,
            marginTop:10
        },
        input:{
            width:40,
            marginBottom:10,
            textAlign:'center',
            fontFamily:'open-sans'
        },
        confirmed:{
            padding:20,
            marginTop:10,
            backgroundColor:'white',
            alignItems:'center'
        }
    })

    const [value,setValue]=useState('')
    const [inputNumber,setInputNumber]=useState(null)
    const [confirm,setConfirm]=useState(false)

    const changeHandler=(inputValue)=>{
        setValue(inputValue.replace(/[^0-9]/g,''))
    }

    const resetHandler=()=>{
        setValue('')
        setConfirm(false)
    }

    const confirmHandler=()=>{
        const enteredNumber=parseInt(value)
        if(isNaN(enteredNumber) || enteredNumber<=0 || enteredNumber>99){
            Alert.alert('Invalid number!','Number has to be between 1-99!',[{text:'ok',style:'destructive',onPress:resetHandler}])
            return
        }
        setInputNumber(enteredNumber)
        setConfirm(true)
        Keyboard.dismiss()
    }

    let confirmed=null
    if(confirm){
        confirmed=<Card style={styles.confirmed}>
            <Text style={{fontFamily:'open-sans'}}>
                You selected
            </Text>
            <Number>
                {inputNumber}
            </Number>
            <MainButton onPress={()=>props.gameStartHandler(inputNumber)} style={{paddingHorizontal:10}}>
                start game
            </MainButton>
        </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.title}>
                    Start a New Game!
                </Text>
                <Card style={styles.gameArea}>
                    <Text style={{fontFamily:'open-sans'}}>
                        select a number
                    </Text>
                    <Input style={styles.input}
                           keyboardType={'number-pad'}
                           autoCapitalize={'none'}
                           autoCorrect={false}
                           maxLength={2}
                           value={value}
                           onChangeText={changeHandler}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={{flex:1}}>
                            <Button title={'Confirm'} color={color.primary} onPress={confirmHandler}/>
                        </View>
                        <View style={{flex:1,marginLeft:16}}>
                            <Button title={'Reset'} color={color.secondary} onPress={resetHandler}/>
                        </View>
                    </View>
                </Card>
                {confirmed}
            </View>
        </TouchableWithoutFeedback>
    );
}

export default GameStartScreen;