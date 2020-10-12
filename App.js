import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/header/header";
import GameStartScreen from "./components/screen/gameStartScreen";
import GameScreen from "./components/screen/gameScreen";
import GameOverScreen from "./components/screen/gameOverScreen";
import * as Font from 'expo-font'
import AppLoading from "expo/build/launch/AppLoading";

const fetchFont=()=>{
    return Font.loadAsync({
        'open-sans':require('./assets/font/OpenSans-Regular.ttf'),
        'open-sans-bold':require('./assets/font/OpenSans-Bold.ttf')
    })
}

export default function App() {
  const styles = StyleSheet.create({
      screen:{
        flex:1,
        alignItems:'center'
      }
  });

  const [inputNumber,setInputNumber]=useState(null)
  const [rounds,setRounds]=useState(0)
  const [font,setFont]=useState(false)

  const gameStartHandler=(userInput)=>{
      setInputNumber(userInput)
  }

  const gameOverHandler=(rounds)=>{
      setRounds(rounds)
  }

  const gameResetHandler=()=>{
      setRounds(0)
      setInputNumber(null)
  }

  if(!font){
      return <AppLoading startAsync={fetchFont} onFinish={()=>{setFont(true)}}/>
  }

  const content=inputNumber && rounds<=0?<GameScreen userInput={inputNumber} gameOverHandler={(rounds)=>gameOverHandler(rounds)}/>:<GameStartScreen gameStartHandler={(userInput) => gameStartHandler(userInput)}/>

  return (
    <View style={styles.screen}>
      <Header title={'Guess a Number'}/>
      {rounds>0?<GameOverScreen rounds={rounds} number={inputNumber} gameResetHandler={gameResetHandler}/>:content}
      <StatusBar style="auto" />
    </View>
  );
}

