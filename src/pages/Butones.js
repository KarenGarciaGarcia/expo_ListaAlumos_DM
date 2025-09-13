
import {StyleSheet, Platform, Text, View,StatusBar } from 'react-native';



export default function Botones(){
    return (
        <View style={style.mainS}>
            <Text> Botones</Text>
        </View>
    );

}
const style = StyleSheet.create({
    mainS:{
        flex:1,
        backgroundColor:'#e1b8d4ff',
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight: 44,
        padding: 15
    }
})