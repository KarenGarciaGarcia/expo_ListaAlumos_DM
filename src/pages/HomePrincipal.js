
import {TouchableOpacity, StyleSheet, Platform, Text, View,StatusBar } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import CardBasico from '../components/CardBasico';



export default function HomePrincipal(){
    return (
        <View style={style.mainS}>
            <Text style={style.title}>Pagina Principal</Text>
            <CardBasico/>
           


        </View>
    );
 
}
const style = StyleSheet.create({
    mainS:{
        flex:2,
        backgroundColor:'#e1b8d4ff',
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight: 44,
        padding: 15
    },
     title:{
        fontSize:22,
        fontWeight:'bold',
        marginTop:20,
        textAlign:'center',
     }
    

})