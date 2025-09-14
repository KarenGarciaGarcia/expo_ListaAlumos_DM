
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Platform, Text, View,StatusBar, ScrollView, TextInput } from 'react-native';


export default function Formulario(){
    return (
        <SafeAreaView style={style.mainS}>
            <Text style={style.label}>Nombre:</Text>
            <TextInput style={style.input} placeholder="Escribe tu nombre"/>
            <Text style={style.label}>Descripción:</Text>
            <TextInput multiline={true} numberOfLines={14} style={[style.input,style.textArea]} placeholder="Agrega una Descripción"/>
            <Text style={style.label}>Correo Electronico:</Text>
            <TextInput style={style.input} placeholder="Ingresa tu correo" keyboardType="email-address"/>
            <Text style={style.label}>Contraseña:</Text>
            <TextInput style={style.input} placeholder="********" secureTextEntry/>
        </SafeAreaView>
    );
 
}
const style = StyleSheet.create({
    mainS:{
        flex:2,
        backgroundColor:'#eee6ebff',
        paddingTop:Platform.OS === 'android' ? StatusBar.currentHeight: 44,
        padding: 15
    },
    label:{
        fontWeight:'bold',
        marginTop:10,
        marginBottom:10
    },
    input:{
        borderWidth:1,
        borderColor:'#030303ff',
        borderRadius:10,

    },
    textArea:{
        height:100,
        textAlignVertical:'top',
    }
    

})