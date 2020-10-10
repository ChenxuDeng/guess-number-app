import React from 'react';
import {View,StyleSheet,Text,TextInput,Button} from "react-native";
import Card from "../card/card";
import color from "../../color/color";

function GameStartScreen(props) {
    const styles=StyleSheet.create({
        screen:{
            flex:1,
            padding:10,
            alignItems:'center'
        },
        title:{
            fontSize:20,
            marginVertical:10
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
        }
    })

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>
                Start a New Game!
            </Text>
            <Card style={styles.gameArea}>
                <Text>
                    select a number
                </Text>
                <TextInput/>
                <View style={styles.buttonContainer}>
                    <View style={{flex:1}}>
                        <Button title={'Confirm'} color={color.primary}/>
                    </View>
                    <View style={{flex:1,marginLeft:16}}>
                        <Button title={'Reset'} color={color.secondary}/>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default GameStartScreen;