import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./components/header/header";

export default function App() {
  const styles = StyleSheet.create({
      screen:{
        flex:1
      }
  });

  return (
    <View style={styles.screen}>
      <Header title={'Guess a Number'}/>
      <StatusBar style="auto" />
    </View>
  );
}

