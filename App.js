import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/header/header";
import GameStartScreen from "./components/screen/gameStartScreen";

export default function App() {
  const styles = StyleSheet.create({
      screen:{
        flex:1
      }
  });

  return (
    <View style={styles.screen}>
      <Header title={'Guess a Number'}/>
      <GameStartScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

