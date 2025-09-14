
import { StyleSheet, Platform, Text, View,StatusBar } from 'react-native';
import CardBasico from '../components/CardBasico';
import CardBasicoImg from '../components/CardImg';
import CardV2 from '../components/CardV2';



export default function HomePrincipal(){
    return (
        <View style={style.mainS}>
            <Text style={style.title}>Pagina Principal</Text>
            <CardBasico/>
            <CardBasicoImg/>
            <CardV2/>
           


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