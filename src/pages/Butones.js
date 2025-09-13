
import {TouchableOpacity, StyleSheet, Platform, Text, View,StatusBar } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';



export default function Botones(){
    return (
        <View style={style.mainS}>
            <Text style={style.h1}> Botones</Text>

            {/* Boton 1 */}
            <TouchableOpacity style={style.botonBasico}>
                <Text style={style.text} >Boton 1</Text>
            </TouchableOpacity>

            {/* Boton 2 */}
            <TouchableOpacity style={style.botonIcono}>
                <Icon name="person" size={20} style={style.iconB}/>
                <Text style={style.text} >Boton Icono</Text>
            </TouchableOpacity>
            


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
    h1:{
    fontSize:25,
    fontWeight: 'bold'
    },
    botonBasico:{
        backgroundColor:'#fff',
        padding:12,
        borderRadius:10,
        marginTop:10,
        marginBottom:10
    },
    text:{
        
        color:'#070707ff',
        textAlign:'center',
        fontWeight:'bold',
  
    },
    botonIcono: {
        backgroundColor:'#fff',
        fontSize: 30,
        padding:12,
        borderRadius:10,
        marginTop:10,
        marginBottom:10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'

    },
    iconB:{
        color:'#e60a0aff',
    }
    


})