
import {TouchableOpacity, StyleSheet, Platform, Text, View,StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  Icon  from 'react-native-vector-icons/FontAwesome';



export default function BotonesV2(){
    return (
        <View style={style.mainS}>
            <Text style={style.title}>Botones Personalizados</Text>
            {/* Boton grande */}
            <TouchableOpacity style={style.botonGrande}>
                <Text style={style.textoBoton}> Boton Grande</Text>
            </TouchableOpacity>

            {/* Boton Grande con Icono */}
            <TouchableOpacity style={style.botonConIcono}>
                <MaterialIcons name="send" size={20} color={'#fff'} style={style.iconoIzquierda}/>
                <Text style={style.textoBoton}> Boton Grande</Text>
            </TouchableOpacity>

            {/*Boton Sombreado*/}
            <TouchableOpacity style={[style.botonSombreado, style.sombra]}>
                <Text style={style.textoBoton}>Sombra</Text>
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
    title:{
        fontSize:22,
        fontWeight:'bold',
        marginTop:20,
        textAlign:'center'

    },
    textoBoton:{
        color:'#050505ff',
        fontWeight: 'bold',
        fontSize:15,
        textAlign:'center'

    },
    botonGrande:{
        backgroundColor:'#fff',
        padding: 10,
        borderRadius: 15,
        marginTop: 10,
        alignSelf:'center'
    },
    botonConIcono:{
        backgroundColor:'#0ddb41ff',
        marginTop: 10,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        paddingVertical:12,
        borderRadius:15,
    },
    iconoIzquierda:{
        marginRight:10
    },
    botonSombreado:{
        backgroundColor: '#f372e8ff',
        paddingVertical:14,
        borderRadius:10,
        marginTop: 10,
        marginBottom: 15
    },
    sombra:{
        ...Platform.select({
            android:{
                elevation: 6,
            },
            ios: {
                ShadowColor: '#000',
                shadowOffset: {whidth: 0, height: 2},
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
        }),
    },
    


})